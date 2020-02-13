<?php

namespace CreatyDev\Solarix\Cashier;

use Laravel\Cashier\Subscription as CashierSubscription;

class Subscription extends CashierSubscription {
  /**
   * Enforce table name.
   */
  protected $table = 'subscriptions';

  /**
   * Filter query by active.
   *
   * @param \Illuminate\Database\Eloquent\Builder $query
   * @return void
   */
  public function scopeValid($query) {
    // TODO: Add logic
    //    $query->whereNull('ends_at')->orWhere(function ($query) {
    //      $query->onGracePeriod();
    //    });
  }
}
