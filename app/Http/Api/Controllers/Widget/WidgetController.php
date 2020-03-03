<?php

namespace CreatyDev\Http\Api\Controllers\Widget;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Traits\Api\HasWidgetPayload;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WidgetController extends Controller {
  use HasWidgetPayload;

  public function get(Request $request, Site $site) {
    $response = new Response();

    $payload = $this->getPayload($site);

    // All validation Middleware passed, allow response
    $response->withHeaders([
      'Access-Control-Allow-Origin' => $request->header('origin'),
      'Content-Type' => 'text/javascript;charset=UTF-8'
    ]);

    // Respond with javascript content.
    return $response->setContent($payload);
  }
}
