<?php

namespace CreatyDev\Http\Api\Controllers\Domain;

use CreatyDev\App\Controllers\Controller;
use HttpResponseException;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Illuminate\Http\Request;
use Log;
use Storage;

class DomainController extends Controller {
    public function widget(Request $request) {
        // TODO: Parse $request and determine authentication / authorization
        $response = response();

        try {
            $contents = Storage::disk('widget')->get(
                config('widget.base.filename')
            );
            $response->setContent($contents);
            $response->withHeaders([
                'Access-Control-Allow-Origin' => 'http://localhost:5000',
                'Content-Type' => 'text/javascript;charset=UTF-8'
            ]);
        } catch (FileNotFoundException $exception) {
            Log::error($exception);
            $response->setContent('Failed to retrieve widget from server.');
        } catch (HttpResponseException $exception) {
            Log::error($exception);
            $response->setContent('Failed to retrieve widget from server.');
        } catch (ThrottleRequestsException $exception) {
            Log::error($exception);
            $response->setContent(
                'Request cannot be completed -- Exceeded throttle limit.'
            );
        }
        return $response;
    }

    public function foo(Request $request) {
        dump($request->headers);
        return response('Success')->withHeaders([
            'Access-Control-Allow-Origin' => 'http://localhost:63343'
        ]);
    }
}
