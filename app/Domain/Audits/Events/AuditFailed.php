<?php

namespace CreatyDev\Domain\Audits\Events;

use CreatyDev\Domain\Audits\Models\Audit;
use Exception;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AuditFailed implements ShouldBroadcast {
  use Dispatchable, InteractsWithSockets, SerializesModels;

  public $audit;
  public $error;

  /**
   * Create a new event instance.
   *
   * @param Audit     $audit
   * @param Exception $exception
   */
  public function __construct(Audit $audit, Exception $exception) {
    $this->audit = $audit;
    $this->error = $exception->getMessage();
  }

  public function broadcastAs() {
    return 'AuditFailed';
  }

  /**
   * Get the channels the event should broadcast on.
   *
   * @return Channel|array
   */
  public function broadcastOn() {
    return new Channel("audit-{$this->audit->id}");
  }
}
