<?php

namespace CreatyDev\Solarix\Mail;

use Asahasrabuddhe\LaravelMJML\Mail\Mailable as MJMLMailable;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class Mailable extends MJMLMailable {
  use Queueable, SerializesModels;

  public function __construct() {
    // The MJML conversion includes abundant extra characters that throw error from html2text parser used internally by
    // Laravel.  This line explicitly disables those errors for this single conversion process.
    libxml_use_internal_errors(true);
  }
}
