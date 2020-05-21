<?php

namespace CreatyDev\Domain\Subscriptions\Events;

use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Stripe\PaymentMethod;

class SubscriptionCreated {
  use Dispatchable, InteractsWithSockets, SerializesModels;

  /**
   * @var PaymentMethod
   */
  public $payment_method;
  /**
   * @var Plan
   */
  public $plan;
  /**
   * @var Subscription
   */
  public $subscription;
  /**
   * @var User
   */
  public $user;
  /**
   * @var Coupon
   */
  public $coupon;

  public function __construct(
    $payment_method_id,
    Plan $plan,
    Subscription $subscription,
    User $user,
    Coupon $coupon = null
  ) {
    $this->payment_method = $payment_method_id
      ? PaymentMethod::retrieve($payment_method_id)
      : null;
    $this->plan = $plan;
    $this->subscription = $subscription;
    $this->user = $user;
    $this->coupon = $coupon;
  }
}
