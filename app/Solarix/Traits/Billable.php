<?php

namespace CreatyDev\Solarix\Traits;

use Laravel\Cashier\Billable as CashierBillable;
use CreatyDev\Solarix\Cashier\Subscription;
use CreatyDev\Solarix\Cashier\SubscriptionBuilder;

trait Billable {
  use CashierBillable;

  /**
   * Begin creating a new subscription.
   *
   * @param  string  $subscription
   * @param  string  $plan
   * @return SubscriptionBuilder
   */
  public function newSubscription($subscription, $plan) {
    return new SubscriptionBuilder($this, $subscription, $plan);
  }

  /**
   * Get all of the subscriptions for the Stripe model.
   *
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function subscriptions() {
    return $this->hasMany(Subscription::class, $this->getForeignKey())->orderBy(
      'created_at',
      'desc'
    );
  }
}
