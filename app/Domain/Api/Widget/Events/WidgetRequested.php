<?php

namespace CreatyDev\Domain\Api\Widget\Events;

use CreatyDev\App\Traits\Api\HasRequest;
use CreatyDev\Domain\Api\Widget\Jobs\RecordWidgetRequest;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Tests\Mock\Request as MockRequest;

class WidgetRequested {
  use Dispatchable, HasRequest, InteractsWithSockets, SerializesModels;

  /**
   * Create a new event instance.
   *
   * @param Site $site
   * @param $payload
   * @param Request|MockRequest $request
   */
  public function __construct(Site $site, $payload, $request) {
    $document = [
      'request' => [
        'bytes' => strlen($payload),
        'fingerprint' => $this->getFingerprint($request),
        'headers' => $this->getHeaders($request),
        'host' => $this->getHost($request),
        'ip' => $this->getIp($request),
        'timestamp' =>
          $request instanceof MockRequest ? $request->getTimestamp() : time(),
        'url' => $this->getUrl($request)
      ],
      'site' => $this->getSite($site),
      'subscription' => $this->getSubscription($site),
      'user' => $this->getUser($site)
    ];

    RecordWidgetRequest::dispatch($document)->onConnection('sqs');
  }

  /**
   * Get serialized Site.
   *
   * @param Site $site
   * @return array
   */
  private function getSite(Site $site) {
    $siteArray = $site->toArray();
    // Discard extensions
    unset($siteArray['extensions']);
    // Discard statements
    unset($siteArray['statement']);
    // Discard subscription
    unset($siteArray['subscription']);
    return $siteArray;
  }

  /**
   * Get serialized Subscription from Site.
   *
   * @param Site $site
   * @return array|null
   */
  private function getSubscription(Site $site) {
    if ($site->subscription) {
      $data = $site->subscription->toArray();
      unset($data['user']);
      return $data;
    }
    return null;
  }

  /**
   * Get serialized User from Site.
   *
   * @param Site $site
   * @return array|null
   */
  private function getUser(Site $site) {
    if ($site->user()) {
      return $site->user()->toArray();
    }
    return null;
  }
}
