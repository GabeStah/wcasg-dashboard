<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\InvalidOrigin;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Users\Models\Role;
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
        $site = $request->get('site');
        if ($site) {
            //            $fullSite->getDomainHost();
            // Check for matching origin
            $siteHost = $site->getDomainHost();
            $originHost = parse_url($request->header('origin'), PHP_URL_HOST);
            if ($siteHost === $originHost) {
                return $next($request);
            }
        }

        $error = new InvalidOrigin();
        $error->headers = [
            'Access-Control-Allow-Origin' => config('app.url'),
            'Content-Type' => 'text/javascript;charset=UTF-8'
        ];
        throw $error;
    }
}
