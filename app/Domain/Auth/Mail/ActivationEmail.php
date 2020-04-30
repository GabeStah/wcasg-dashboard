<?php

namespace CreatyDev\Domain\Auth\Mail;

use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class ActivationEmail extends Mailable {
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
    return $this->mjml('emails.auth.activation', [
      'hero_title' => 'Account Activation',
      'hero_text' => 'Please activate your account to get started',
      'token' => $this->token
    ])->subject('Please activate your account');
  }
}
