<?php

namespace CreatyDev\Solarix\Cashier;

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Laravel\Cashier\Exceptions\PaymentActionRequired;
use Laravel\Cashier\Exceptions\PaymentFailure;
use Laravel\Cashier\Payment;
use Laravel\Cashier\SubscriptionBuilder as CashierSubscriptionBuilder;
use Stripe\PaymentMethod;

/**
 * TODO: Potentially implement service provider extension of Cashier\Subscription model
 * @see https://stackoverflow.com/questions/31435747/laravel-extend-a-vendor-class-installed-from-composer
 * @see https://laravel.com/docs/6.x/providers
 * @see https://laravel.com/docs/6.x/container
 * @see https://laravel.com/docs/6.x/contracts
 */

/**
 * Class SubscriptionBuilder
 * @package CreatyDev\Solarix\Cashier
 */
class SubscriptionBuilder extends CashierSubscriptionBuilder {
  /**
   * Create a new Stripe subscription.
   *
   * @param PaymentMethod|string|null $paymentMethod
   * @param array                             $options
   *
   * @return \Laravel\Cashier\Subscription
   * @throws PaymentActionRequired
   * @throws PaymentFailure
   */
  public function create($paymentMethod = null, array $options = []) {
    $customer = $this->getStripeCustomer($paymentMethod, $options);

    // Get local Plan
    $plan_local = Plan::find($this->plan);

    // Check for used Coupon
    $coupon_used = false;
    $coupon = $plan_local->coupon;
    if ($coupon && $this->owner->coupons->contains('id', '=', $coupon->id)) {
      $coupon_used = true;
    }

    if ($coupon && !$coupon_used) {
      // Assign coupon id from associated local plan to apply to Stripe subscription.
      $this->coupon = $coupon->id;
    }

    /** @var \Stripe\Subscription $stripeSubscription */
    $stripeSubscription = $customer->subscriptions->create(
      $this->buildPayload()
    );

    if ($this->skipTrial) {
      $trialEndsAt = null;
    } else {
      $trialEndsAt = $this->trialExpires;
    }

    $subscription = $this->owner->subscriptions()->create([
      'id' => $stripeSubscription->id,
      'plan_id' => $this->plan,
      // Support Laravel Cashier built-in lookup.
      'stripe_id' => $stripeSubscription->id,
      // Support Laravel Cashier built-in lookup.
      'stripe_plan' => $this->plan,
      'name' => $this->name,
      'stripe_status' => $stripeSubscription->status,
      'quantity' => $this->quantity,
      'trial_ends_at' => $trialEndsAt,
      'ends_at' => null
    ]);

    // Add Coupon to User
    if ($coupon && !$coupon_used) {
      // Assign coupon id from associated local plan to apply to Stripe subscription.
      $this->owner->coupons()->attach($coupon);
    }

    if ($subscription->incomplete()) {
      (new Payment(
        $stripeSubscription->latest_invoice->payment_intent
      ))->validate();
    }

    return $subscription;
  }
}
