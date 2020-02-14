<?php

namespace CreatyDev\Domain\Auth\Listeners;

use CreatyDev\Domain\Auth\Mail\ActivationEmail;
use Illuminate\Support\Facades\Mail;

class SendActivationEmail {
  /**
   * Handle the event.
   *
   * @param object $event
   * @return void
   */
  public function handle($event) {
    //create token and send email
    Mail::to($event->user)->send(
      new ActivationEmail($event->user->generateConfirmationToken())
    );
  }
}
