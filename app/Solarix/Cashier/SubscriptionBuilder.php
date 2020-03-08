<?php

namespace CreatyDev\Solarix\Cashier;

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
      'name' => $this->name,
      'stripe_id' => $stripeSubscription->id,
      'stripe_status' => $stripeSubscription->status,
      'stripe_plan' => $this->plan,
      'quantity' => $this->quantity,
      'trial_ends_at' => $trialEndsAt,
      'ends_at' => null
    ]);

    if ($subscription->incomplete()) {
      (new Payment(
        $stripeSubscription->latest_invoice->payment_intent
      ))->validate();
    }

    return $subscription;
  }
}
