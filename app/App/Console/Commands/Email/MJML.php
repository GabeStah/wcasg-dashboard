<?php

namespace CreatyDev\App\Console\Commands\Email;

use Illuminate\Bus\Queueable;
use Asahasrabuddhe\LaravelMJML\Mail\Mailable;

class MJML extends Mailable {
  use Queueable;

  public $data;

  /**
   * Create a new message instance.
   *
   * @param $view
   * @param $subject
   * @param $data
   */
  public function __construct($view, $subject, $data = []) {
    $this->subject = $subject;
    $this->view = $view;
    $this->data = $data;
  }

  /**
   * Build
   *
   * @return mixed
   */
  public function build() {
    return $this->subject($this->subject)->mjml(
      $this->view,
      (array) $this->data
    );
  }
}
