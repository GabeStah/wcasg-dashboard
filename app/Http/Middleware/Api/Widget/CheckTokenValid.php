<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\InvalidToken;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;

class CheckTokenValid {
    /**
     * Check if 'token' parameter is valid.
     *
     * @param Request $request
     * @param Closure $next
     * @param $token
     * @return mixed
     * @throws InvalidToken
     */
    public function handle($request, Closure $next) {
        $token = $request->get('token');
        $site = Site::whereToken($token)->firstOrFail();
        if ($site) {
            $request->session()->put('site_id', $site->id);
            // Add site attribute for future middleware.
            $request->attributes->add(['site' => $site]);
            $request->attributes->add(['site_id' => $site->id]);
            return $next($request);
        }

        $error = new InvalidToken();
        $error->setCorsOrigin($request->header('origin'));
        throw $error;
    }
}
