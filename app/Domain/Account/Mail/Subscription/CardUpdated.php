<?php

namespace CreatyDev\Domain\Account\Mail\Subscription;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class CardUpdated extends Mailable {
  use Queueable, SerializesModels;

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Card Updated')->mjml(
      'emails.account.subscription.card',
      [
        'hero_title' => 'Card Updated',
        'hero_text' => 'Your card details have been updated.'
      ]
    );
  }
}
