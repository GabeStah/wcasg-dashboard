<?php

namespace CreatyDev\Http\Api\Controllers\Audit;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TaskController extends Controller {
  public function get(Request $request) {
    $response = new Response();

    $siteId = $request->get('site_id');
    $site = Site::findOrFail($siteId);

    $content = $site->statement->render($site);

    // All validation Middleware passed, allow response
    $response->withHeaders([
      'Access-Control-Allow-Origin' => $request->header('origin'),
      'Content-Type' => 'text/html;charset=UTF-8',
      'X-Content-Type-Options' => 'nosniff'
    ]);

    // Respond with content.
    return $response->setContent($content);
  }
}
