<?php

namespace CreatyDev\Domain\Account\Mail;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;

class PasswordUpdated extends Mailable implements ShouldQueue {
  use Queueable, SerializesModels;

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Password Updated')->mjml(
      'emails.account.password.updated',
      [
        'hero_title' => 'Password Updated',
        'hero_text' => 'Your password has been updated.'
      ]
    );
  }
}
