<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\MissingOrigin;
use Illuminate\Http\Request;

class CheckOriginMissing {
    /**
     * Check if request has 'origin' header.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws MissingOrigin
     */
    public function handle($request, Closure $next) {
        if (!$request->hasHeader('origin')) {
            throw new MissingOrigin();
        }

        return $next($request);
    }
}
