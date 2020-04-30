<?php

namespace CreatyDev\Domain\Teams\Mail;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class TeamUpdated extends Mailable {
  use Queueable, SerializesModels;

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Team Updated')->mjml('emails.team.updated', [
      'hero_title' => 'Team Updated',
      'hero_text' => 'Your team has been updated.'
    ]);
  }
}
