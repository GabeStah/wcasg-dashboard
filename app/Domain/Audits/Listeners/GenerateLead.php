<?php

namespace CreatyDev\Domain\Audits\Listeners;

use CreatyDev\Domain\Audits\Events\AuditCompleted;
use CreatyDev\Domain\Leads\Mail\LeadGenerated;
use CreatyDev\Domain\Leads\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class GenerateLead implements ShouldQueue {
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
   * Create the event listener.
   *
   * @return void
   */
  public function __construct() {
    //
  }

  /**
   * Handle the event.
   *
   * @param AuditCompleted $event
   *
   * @return void
   */
  public function handle(AuditCompleted $event) {
    $lead = Lead::where('audit_id', '=', $event->audit->id)->first();
    if ($lead) {
      $email = $lead->mailto_address ?? config('mail.from.address');
      Mail::to($email)->send(new LeadGenerated($event->audit, $lead));
    }
  }
}
