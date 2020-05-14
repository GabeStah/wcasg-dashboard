<?php

namespace CreatyDev\Domain\Api\Webhook\Listeners;

use Carbon\Carbon;
use CreatyDev\Domain\Api\Webhook\Events\WebhookLeadGenerated;
use CreatyDev\Domain\Auth\Mail\LeadToRegistrationMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class WebhookLeadGeneratedListener implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  /**
   * The number of seconds the job can run before timing out.
   *
   * @var int
   */
  public $timeout = 60;

  /**
   * The number of times the job may be attempted.
   *
   * @var int
   */
  public $tries = 3;

  /**
   * Handle the event.
   *
   * @param WebhookLeadGenerated $event
   * @return void
   */
  public function handle(WebhookLeadGenerated $event) {
    Mail::to($event->lead->email)->send(
      new LeadToRegistrationMail(
        $event->lead->generateConfirmationToken(new Carbon('14 days'))
      )
    );
  }
}
