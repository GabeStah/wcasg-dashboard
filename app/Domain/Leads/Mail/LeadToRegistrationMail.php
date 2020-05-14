<?php

namespace CreatyDev\Domain\Auth\Mail;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class LeadToRegistrationMail extends Mailable {
  use Queueable, SerializesModels;

  public $token;

  /**
   * Create a new message instance.
   *
   * @param $token
   */
  public function __construct($token) {
    parent::__construct();
    $this->token = $token;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build() {
    return $this->mjml('emails.lead.registration', [
      'hero_title' => 'Complete Signup',
      'hero_text' => 'Thank you for your purchase!',
      'token' => $this->token
    ])->subject('Please complete your registration');
  }
}
