<?php

namespace CreatyDev\Http\Api\Controllers\Widget;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Exceptions\Api\Widget;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Storage;

class WidgetController extends Controller {
    public function get(Request $request) {
        // TODO: Parse $request and determine authentication / authorization
        $response = new Response();

        try {
            $contents = Storage::disk('widget')->get(
                config('widget.base.filename')
            );
            // All validation Middleware passed, allow response
            $response->withHeaders([
                'Access-Control-Allow-Origin' => $request->header('origin'),
                'Content-Type' => 'text/javascript;charset=UTF-8'
            ]);
            return $response->setContent($contents);
        } catch (Exception $exception) {
            throw new Widget($exception->getMessage());
        }
    }
}
