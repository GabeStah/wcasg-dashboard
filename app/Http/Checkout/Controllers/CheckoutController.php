<?php

namespace CreatyDev\Http\Checkout\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Subscriptions\Events\SubscriptionCreated;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller {
  /**
   * Generate sites validation rules.
   * Requires that each passed domain be a full URL with a valid 'host',
   * or a basic domain with optional subdomain(s).
   *
   * @return string[]
   */
  private function sitesValidationRules() {
    $rules = [
      'confirm_ownership' => 'required'
    ];

    foreach (request('sites') as $key => $val) {
      if ($val) {
        $rules['sites.' . $key] = function ($attribute, $value, $fail) {
          $host = parse_url($value, PHP_URL_HOST);
          if (!$host) {
            $match = preg_match('/^([\w-]+\.)*[\w\-]+\.\w{2,10}$/', $value);
            if (!$match) {
              $fail(
                "Please enter a valid URL (e.g. 'https://www.example.com') or domain (e.g. 'example.com')."
              );
            }
          }
        };
      }
    }

    return $rules;
  }

  public function paymentIndex(Request $request) {
    $user = auth()->user();
    $lead = $user->lead;
    $plan = $lead->plan;
    $coupon = $plan->coupon;

    return view('checkout.payment', [
      'coupon_code' => $coupon ? $coupon->code : null,
      'client_secret' => $user->createSetupIntent()->client_secret,
      'lead' => $lead,
      'plan' => $plan,
      'user' => $user
    ]);
  }

  /**
   * Determine if coupon is valid.
   * Check existence of coupon, Stripe validity, and ensure not used by User.
   *
   * @param $coupon_code
   * @param User $user
   * @return bool|Builder|Model|object
   */
  public function isCouponCodeValid($coupon_code, User $user) {
    $coupon = Coupon::where('code', $coupon_code)->first();
    if (!$coupon || !$coupon->isValid() || $coupon->wasUsedByUser($user)) {
      return false;
    }
    return $coupon;
  }

  public function paymentStore(Request $request) {
    $user = Auth::user();
    $coupon_code = $request->input('coupon_code');
    $validCoupon = null;
    if ($coupon_code) {
      // Get valid coupon if coupon code supplied
      $validCoupon = $this->isCouponCodeValid($coupon_code, $user);
    }

    $lead = $user->lead;
    $plan = $lead->plan;

    $request->validate([
      'coupon_code' => [
        function ($attribute, $value, $fail) use ($coupon_code, $validCoupon) {
          if ($coupon_code && !$validCoupon) {
            $fail('Promo code is invalid.');
          }
        }
      ],
      'payment-method' => [
        function ($attribute, $value, $fail) use ($plan, $validCoupon) {
          if (
            (!isset($value) || !is_string($value)) &&
            $validCoupon &&
            $plan->price($validCoupon) > 0
          ) {
            // No payment method provided with a price above 0.
            $fail('A valid payment method is required.');
          }
        }
      ]
    ]);

    if ($validCoupon) {
      // Create Subscription w/ coupon
      $user
        ->newSubscription($plan->nickname, $plan->id)
        ->withCoupon($validCoupon->id)
        // Payment method may or may not be required.  Above checks determine if total requires valid payment method,
        // but Stripe will also error out if a PM is required but not provided.
        ->create(request('payment-method') ? request('payment-method') : null);
    } else {
      // Create Subscription w/o coupon
      $user
        ->newSubscription($plan->nickname, $plan->id)
        ->create(request('payment-method'));
    }

    $domains = $lead->getDomains();
    $subscription = $user->validSubscription();

    if ($domains) {
      // Create Sites
      if (!$subscription) {
        // Redirect with error
        die('TODO: No subscription');
      }

      foreach ($domains as $domain) {
        $site = new Site([
          'active' => true,
          'domain' => $domain,
          'subscription_id' => $subscription->id
        ]);

        $site->save();
      }
    }

    // Trigger subscription created event
    event(
      new SubscriptionCreated(
        request('payment-method'),
        $plan,
        $subscription,
        $user
      )
    );

    return redirect()
      ->route('account.sites.index')
      ->withSuccess(
        'Thank you for your subscription!  You can now add the widget snippets to your websites.'
      );
  }

  public function sitesIndex(Request $request) {
    $user = auth()->user();
    $lead = $user->lead;
    $plan = $lead->plan;
    $siteCountMaximum = $plan->getSiteCountMaximum();

    return view('checkout.sites', ['siteCountMaximum' => $siteCountMaximum]);
  }

  /**
   * Site
   *
   * @param Request $request
   * @return RedirectResponse
   */
  public function sitesStore(Request $request) {
    // We only want inline errors for this view since there are potentially
    // so many input fields, so ignore global error component.
    session()->put('disableGlobalErrors', true);
    $user = auth()->user();
    $lead = $user->lead;
    $plan = $lead->plan;
    $siteCountMaximum = $plan->getSiteCountMaximum();

    request()->validate($this->sitesValidationRules());
    // Ensure no attempts to increase sites array beyond allotted quantity.
    request()->validate(['sites' => 'array|max:' . $siteCountMaximum]);

    // Get only valid domains
    $domains = array_filter(request('sites'));

    $lead->metadata = (object) ['domains' => $domains];
    $lead->save();

    return redirect()
      ->route('checkout.payment.index')
      ->with('success', __('controller.account.Site.create.success'));
  }
}
