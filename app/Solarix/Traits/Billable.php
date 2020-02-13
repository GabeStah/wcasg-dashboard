<?php

namespace CreatyDev\Solarix\Traits;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Cashier\Billable as CashierBillable;
use CreatyDev\Solarix\Cashier\Subscription;
use CreatyDev\Solarix\Cashier\SubscriptionBuilder;

trait Billable {
  use CashierBillable;

  /**
   * Begin creating a new subscription.
   *
   * @param string $subscription
   * @param string $plan
   * @return SubscriptionBuilder
   */
  public function newSubscription($subscription, $plan) {
    return new SubscriptionBuilder($this, $subscription, $plan);
  }

  /**
   * Determines if has a subscription.
   *
   * @return bool
   */
  public function isSubscribed(): bool {
    $count = $this->hasMany(Subscription::class, $this->getForeignKey())
      ->valid()
      ->count();

    return $count >= 1;
  }

  /**
   * Determine if the Stripe model has a given subscription.
   *
   * @param string $subscription
   * @param string|null $plan
   * @return bool
   */
  public function subscribed($subscription = 'default', $plan = null) {
    $subscription = $this->subscription($subscription);

    if (is_null($subscription)) {
      return false;
    }

    if (is_null($plan)) {
      return $subscription->valid();
    }

    return $subscription->valid() && $subscription->stripe_plan === $plan;
  }

  /**
   * Get a subscription instance by name.
   *
   * @param string $subscription
   * @return Subscription|null
   */
  public function subscription($subscription = 'default') {
    return $this->subscriptions
      ->sortByDesc(function ($value) {
        return $value->created_at->getTimestamp();
      })
      ->first(function ($value) use ($subscription) {
        return $value->name === $subscription;
      });
  }

  /**
   * Get all of the subscriptions for the Stripe model.
   *
   * @return HasMany
   */
  public function subscriptions() {
    return $this->hasMany(Subscription::class, $this->getForeignKey())->orderBy(
      'created_at',
      'desc'
    );
  }

  public function validSubscription() {
    return $this->hasMany(Subscription::class, $this->getForeignKey())
      ->valid()
      ->first();
  }
}
