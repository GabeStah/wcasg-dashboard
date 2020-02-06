<?php

namespace CreatyDev\Http\Api\Controllers\Widget;

use CreatyDev\App\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Storage;

class WidgetController extends Controller {
    public function get(Request $request) {
        $response = new Response();

        // TODO: Use for future Widget customization.
        $siteId = $request->get('site_id');

        // Get base Widget script file from storage.
        $contents = Storage::disk('widget')->get(
            config('widget.base.filename')
        );

        // All validation Middleware passed, allow response
        $response->withHeaders([
            'Access-Control-Allow-Origin' => $request->header('origin'),
            'Content-Type' => 'text/javascript;charset=UTF-8'
        ]);

        // Respond with javascript content.
        return $response->setContent($contents);
    }
}
