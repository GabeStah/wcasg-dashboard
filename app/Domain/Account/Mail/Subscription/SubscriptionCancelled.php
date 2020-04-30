<?php

namespace CreatyDev\Domain\Account\Mail\Subscription;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class SubscriptionCancelled extends Mailable {
  use Queueable, SerializesModels;

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Subscription Cancelled')->mjml(
      'emails.account.subscription.cancelled',
      [
        'hero_title' => 'Subscription Cancelled',
        'hero_text' => 'Your subscription has been cancelled.'
      ]
    );
  }
}
