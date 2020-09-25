<?php

namespace CreatyDev\Domain\Api\Widget\Events;

use CreatyDev\Domain\Api\Widget\Jobs\RecordWidgetRequest;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class WidgetRequested {
  use Dispatchable, InteractsWithSockets, SerializesModels;

  /**
   * Create a new event instance.
   *
   * @param Site $site
   * @param $bytes
   */
  public function __construct(Site $site, $bytes) {
    RecordWidgetRequest::dispatch($site, $bytes)->onConnection('sqs');
  }
}
