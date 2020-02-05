<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\InvalidOrigin;
use Illuminate\Http\Request;

class CheckOriginValid {
    /**
     * Check if 'origin' header is valid.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws InvalidOrigin
     */
    public function handle($request, Closure $next) {
        if ($request->header('origin') !== 'http://localhost:5000') {
            $error = new InvalidOrigin();
            $error->headers = [
                'Access-Control-Allow-Origin' => config('app.url'),
                'Content-Type' => 'text/javascript;charset=UTF-8'
            ];
        }

        return $next($request);
    }
}
