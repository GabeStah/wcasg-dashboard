<?php

namespace CreatyDev\Domain\Subscriptions\Mail;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Stripe\PaymentMethod;

class SubscriptionCreatedMail extends Mailable {
  use Queueable, SerializesModels;

  /**
   * @var PaymentMethod
   */
  protected $payment_method;
  /**
   * @var Plan
   */
  protected $plan;
  /**
   * @var Subscription
   */
  protected $subscription;
  /**
   * @var User
   */
  protected $user;
  /**
   * @var Coupon|null
   */
  protected $coupon;

  /**
   * Create a new message instance.
   *
   * @param Plan $plan
   * @param Subscription $subscription
   * @param User $user
   * @param PaymentMethod $payment_method
   * @param Coupon|null $coupon
   */
  public function __construct(
    Plan $plan,
    Subscription $subscription,
    User $user,
    PaymentMethod $payment_method = null,
    Coupon $coupon = null
  ) {
    parent::__construct();
    $this->subject('WCASG Subscription Confirmation');

    $this->payment_method = $payment_method;
    $this->plan = $plan;
    $this->subscription = $subscription;
    $this->user = $user;
    $this->coupon = $coupon;
  }

  /**
   * Build the message.
   *
   * @param Pa11y $pa11y
   * @return $this
   */
  public function build() {
    return $this->mjml('emails.account.subscription.created', [
      'hero_title' => 'Subscription Confirmation',
      'hero_text' => 'Thank you for your order!',
      'user' => $this->user,
      'subscription' => $this->subscription,
      'payment_method' => $this->payment_method,
      'plan' => $this->plan,
      'coupon' => $this->coupon
    ]);
  }
}
