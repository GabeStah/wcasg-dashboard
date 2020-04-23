<?php

namespace CreatyDev\Domain\Subscriptions\Mail;

use Asahasrabuddhe\LaravelMJML\Mail\Mailable;
use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use CreatyDev\Solarix\Cashier\Subscription;
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
   * Create a new message instance.
   *
   * @param PaymentMethod $payment_method
   * @param Plan $plan
   * @param Subscription $subscription
   * @param User $user
   */
  public function __construct(
    PaymentMethod $payment_method,
    Plan $plan,
    Subscription $subscription,
    User $user
  ) {
    $this->subject('WCASG Subscription Confirmation');

    $this->payment_method = $payment_method;
    $this->plan = $plan;
    $this->subscription = $subscription;
    $this->user = $user;
  }

  /**
   * Build the message.
   *
   * @param Pa11y $pa11y
   * @return $this
   */
  public function build() {
    // The MJML conversion includes abundant extra characters that throw error from html2text parser used internally by
    // Laravel.  This line explicitly disables those errors for this single conversion process.
    libxml_use_internal_errors(true);

    $mjml = $this->mjml('emails.account.subscription.created', [
      'user' => $this->user,
      'subscription' => $this->subscription,
      'payment_method' => $this->payment_method,
      'plan' => $this->plan
    ]);

    return $mjml;
  }
}
