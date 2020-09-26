<?php

namespace CreatyDev\Domain\Api\Widget\Events;

use CreatyDev\App\Traits\Api\HasRequest;
use CreatyDev\Domain\Api\Widget\Jobs\RecordWidgetRequest;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;

class WidgetRequested {
  use Dispatchable, HasRequest, InteractsWithSockets, SerializesModels;

  private function formatSite(Site $site) {
    $siteArray = $site->toArray();
    // Discard extensions
    unset($siteArray['extensions']);
    // Discard statements
    unset($siteArray['statement']);
    return $siteArray;
  }

  /**
   * Create a new event instance.
   *
   * @param Site $site
   * @param Request $request
   * @param $payload
   */
  public function __construct(Request $request, Site $site, $payload) {
    $document = [
      'bytes' => strlen($payload),
      'fingerprint' => $this->getFingerprint($request),
      'headers' => $this->getHeaders($request),
      'host' => $this->getHost($request),
      'ip' => $this->getIp($request),
      'path' => $this->getPath($request),
      'site' => $this->formatSite($site),
      'timestamp' => intval(microtime(true) * 1000)
    ];

    RecordWidgetRequest::dispatch($document)->onConnection('sqs');
  }
}
