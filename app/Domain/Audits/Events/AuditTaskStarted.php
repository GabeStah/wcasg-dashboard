<?php

namespace CreatyDev\Domain\Audits\Events;

use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Session;

class AuditTaskStarted {
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $audit;

  /**
   * Create a new event instance.
   *
   * @param Audit $audit
   */
  public function __construct(Audit $audit) {
    $this->audit = $audit;
  }
}
