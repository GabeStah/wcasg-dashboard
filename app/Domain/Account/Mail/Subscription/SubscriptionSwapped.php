<?php

namespace CreatyDev\Domain\Account\Mail\Subscription;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class SubscriptionSwapped extends Mailable {
  use Queueable, SerializesModels;

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Subscription Plan Changed')->mjml(
      'emails.account.subscription.swapped',
      [
        'hero_title' => 'Subscription Changed',
        'hero_text' => 'Your subscription has been updated.'
      ]
    );
  }
}
