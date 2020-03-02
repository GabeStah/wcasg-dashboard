<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\InactiveSiteException;
use CreatyDev\App\Exceptions\Api\Widget\InvalidSubscriptionException;
use CreatyDev\App\Exceptions\Api\Widget\InvalidTokenException;
use CreatyDev\App\Exceptions\Api\Widget\MissingTokenException;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;

class CheckValidStatementRequest {
  /**
   * Check if 'token' parameter is valid.
   *
   * @param Request $request
   * @param Closure $next
   *
   * @return mixed
   * @throws InvalidTokenException
   * @throws MissingTokenException
   * @throws InvalidSubscriptionException
   * @throws InactiveSiteException
   */
  public function handle($request, Closure $next) {
    // Check if 'token' is valid.
    $token = $request->get('token');

    // Check if 'token' query string is missing.
    if (!$token) {
      throw new MissingTokenException();
    }

    // Find site record with matching token.
    $site = Site::whereToken($token)->first();

    // Check if no site found.
    if (!$site) {
      throw new InvalidTokenException();
    }

    // Check for active site.
    if (!$site->isActive()) {
      throw new InactiveSiteException();
    }

    // Check for valid subscription associated with site.
    if (!$site->isSubscriptionValid()) {
      throw new InvalidSubscriptionException();
    }

    $request->attributes->add(['site_id' => $site->id]);

    // All checks passed.
    return $next($request);
  }
}
