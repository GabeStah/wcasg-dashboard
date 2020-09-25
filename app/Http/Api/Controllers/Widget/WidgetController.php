<?php

namespace CreatyDev\Http\Api\Controllers\Widget;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Traits\Api\HasWidgetPayload;
use CreatyDev\Domain\Api\Widget\Events\WidgetRequested;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WidgetController extends Controller {
  use HasWidgetPayload;

  public function get(Request $request, Site $site) {
    $response = new Response();

    $payload = $this->getPayload($site);

    $payload = gzencode($payload);

    // All validation Middleware passed, allow response
    $response->withHeaders([
      'Access-Control-Allow-Origin' => $request->header('origin'),
      'Content-Type' => 'text/javascript;charset=UTF-8',
      'Content-Encoding' => 'gzip'
    ]);

    // Generate stats
    event(new WidgetRequested($site, strlen($payload)));

    // Respond with javascript content.
    return $response->setContent($payload);
  }
}
