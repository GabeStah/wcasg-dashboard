<?php

namespace CreatyDev\Domain\Audits\Events;

use CreatyDev\Domain\Audits\Jobs\CreateAuditTask;
use CreatyDev\Domain\Audits\Jobs\GetAuditResults;
use CreatyDev\Domain\Audits\Jobs\RunAuditTask;
use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AuditRequested {
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $audit;

  /**
   * Create a new event instance.
   *
   * @param Audit $audit
   */
  public function __construct(Audit $audit) {
    $this->audit = $audit;

    CreateAuditTask::withChain([
      new RunAuditTask($audit),
      new GetAuditResults($audit)
    ])->dispatch($audit);
  }

  /**
   * Get the channels the event should broadcast on.
   *
   * @return Channel|array
   */
  public function broadcastOn() {
    return new Channel('audit');
  }
}
