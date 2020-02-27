<?php

namespace CreatyDev\Domain\Audits\Events;

use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AuditCompleted implements ShouldBroadcast {
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

  public function broadcastAs() {
    return 'AuditCompleted';
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
