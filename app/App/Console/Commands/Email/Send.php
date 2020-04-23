<?php

namespace CreatyDev\App\Console\Commands\Email;

use Exception;
use Faker\Generator as Faker;
use Illuminate\Config\Repository;
use Illuminate\Console\Command;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Mail;

class Send extends Command {
  /**
   * Data to pass to view.
   *
   * @var array
   */
  protected $data = [];

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Send a test email.';

  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'email:send {view : Dot syntax string of view (e.g. "emails.account.subscription.created").} {to? : Recipient address. [default: .env "MAIL_DEV_ADDRESS" value]} {--f|format=mjml : File format of view (mjml, blade).} {--s|subject=Test Email : Subject string.} {--d|data= : JSON formatted data to pass to view.}';

  /**
   * Subject of email.
   *
   * @var string|null
   */
  protected $subject;

  /**
   * Recipient email address.
   *
   * @var Repository|Application|mixed|null
   */
  protected $to = null;

  /**
   * View to send.
   *
   * @var string
   */
  protected $view = null;

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct() {
    parent::__construct();
    $this->to = config('mail.dev.address');
  }

  /**
   * Execute the console command.
   *
   * @return mixed
   * @throws Exception
   */
  public function handle() {
    try {
      $this->subject = $this->option('subject');
      $this->view = $this->argument('view');

      if ($this->argument('to')) {
        $this->to = $this->argument('to');
      }

      if (!$this->argument('view')) {
        throw new Exception('No view string was passed, aborting.');
      }

      if ($this->option('data') && json_decode($this->option('data'))) {
        $this->data = json_decode($this->option('data'));
      }

      if ($this->option('format') === 'mjml') {
        // The MJML conversion includes abundant extra characters that throw errors from html2text parser used
        // internally by Laravel.  This line explicitly disables those errors for this single conversion process.
        libxml_use_internal_errors(true);
        Mail::to($this->to)->send(
          new MJML($this->view, $this->subject, $this->data)
        );
      } elseif ($this->option('format') === 'blade') {
        Mail::to($this->to)->send(
          new Blade($this->view, $this->subject, $this->data)
        );
      } else {
        throw new Exception(
          "Format option of {$this->option('format')} is invalid, aborting."
        );
      }
    } catch (Exception $exception) {
      $this->error($exception->getMessage());
    }
  }
}
