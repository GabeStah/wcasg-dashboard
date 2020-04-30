<?php

namespace CreatyDev\Domain\Account\Mail\Subscription;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class SubscriptionResumed extends Mailable {
  use Queueable, SerializesModels;

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Subscription Resumed')->mjml(
      'emails.account.subscription.resumed',
      [
        'hero_title' => 'Subscription Resumed',
        'hero_text' => 'Your subscription has resumed.'
      ]
    );
  }
}
