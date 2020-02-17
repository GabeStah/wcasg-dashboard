<?php

namespace CreatyDev\Solarix\Cashier;

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Laravel\Cashier\Exceptions\SubscriptionCreationFailed;
use Laravel\Cashier\SubscriptionBuilder as CashierSubscriptionBuilder;

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
   * @param string|null $token
   * @param array       $options
   * @param int|null    $planId
   *
   * @return Subscription
   * @throws SubscriptionCreationFailed
   */
  public function create($token = null, array $options = [], $planId = null) {
    $customer = $this->getStripeCustomer($token, $options);

    $subscription = $customer->subscriptions->create($this->buildPayload());

    if (in_array($subscription->status, ['incomplete', 'incomplete_expired'])) {
      $subscription->cancel();

      throw SubscriptionCreationFailed::incomplete($subscription);
    }

    if ($this->skipTrial) {
      $trialEndsAt = null;
    } else {
      $trialEndsAt = $this->trialExpires;
    }

    return $this->owner->subscriptions()->create([
      'name' => $this->name,
      'stripe_id' => $subscription->id,
      'stripe_plan' => $this->plan,
      'quantity' => $this->quantity,
      'trial_ends_at' => $trialEndsAt,
      'ends_at' => null,
      'plan_id' => !is_null($planId)
        ? $planId
        : Plan::where('gateway_id', $this->plan)->first()->id
    ]);
  }
}
