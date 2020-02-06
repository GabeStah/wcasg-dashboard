<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\MissingToken;
use Illuminate\Http\Request;

class CheckTokenMissing {
    /**
     * Check if request has 'origin' header.
     *
     * @param Request $request
     * @param Closure $next
     * @param $token
     * @return mixed
     * @throws MissingToken
     */
    public function handle($request, Closure $next) {
        if (!$request->get('token')) {
            $error = new MissingToken();
            $error->setCorsOrigin($request->header('origin'));
            throw $error;
        }

        return $next($request);
    }
}
