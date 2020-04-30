<?php

namespace CreatyDev\Domain\Teams\Mail;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class TeamDeleted extends Mailable {
  use Queueable, SerializesModels;

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->subject('Team Deleted')->mjml('emails.team.deleted', [
      'hero_title' => 'Team Deleted',
      'hero_text' => 'Team has been deleted.'
    ]);
  }
}
