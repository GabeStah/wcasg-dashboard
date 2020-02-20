<?php

namespace CreatyDev\Http\Api\Controllers\Widget;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Blade;
use LZCompressor\LZString;
use Storage;

class WidgetController extends Controller {
  public function get(Request $request) {
    $response = new Response();

    // Get base Widget script file from storage.
    $contents = Storage::disk('widget')->get(config('widget.base.filename'));

    $siteId = $request->get('site_id');
    $site = Site::findOrFail($siteId);

    $statementContent = $site->statement->render($site);

    $statementCompressed = webpackify(
      'WcasgAccessibilityStatement',
      $statementContent
    );

    // All validation Middleware passed, allow response
    $response->withHeaders([
      'Access-Control-Allow-Origin' => $request->header('origin'),
      'Content-Type' => 'text/javascript;charset=UTF-8'
    ]);

    // Respond with javascript content.
    return $response->setContent(
      $statementContent ? $statementCompressed . $contents : $contents
    );
  }
}
