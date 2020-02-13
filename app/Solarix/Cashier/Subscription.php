<?php

namespace CreatyDev\Solarix\Cashier;

use Laravel\Cashier\Subscription as CashierSubscription;

class Subscription extends CashierSubscription {
  /**
   * Set the subscription table otherwise it will point to another table
   */
  protected $table = 'subscriptions';
}
