<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\InactiveSiteException;
use CreatyDev\App\Exceptions\Api\Widget\InvalidOriginException;
use CreatyDev\App\Exceptions\Api\Widget\InvalidSubscriptionException;
use CreatyDev\App\Exceptions\Api\Widget\InvalidTokenException;
use CreatyDev\App\Exceptions\Api\Widget\MissingOriginException;
use CreatyDev\App\Exceptions\Api\Widget\MissingTokenException;
use CreatyDev\App\Traits\Api\AllowWidgetAdminToken;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;

class CheckValidWidgetRequest {
  use AllowWidgetAdminToken;
  /**
   * Handle all Widget request validation.
   *
   * @param Request $request
   * @param Closure $next
   *
   * @return mixed
   * @throws InvalidTokenException
   * @throws MissingOriginException
   * @throws MissingTokenException
   * @throws InvalidOriginException
   * @throws InvalidSubscriptionException
   * @throws InactiveSiteException
   */
  public function handle($request, Closure $next) {
    // Check for 'origin' header.
    if (!$request->hasHeader('origin')) {
      throw new MissingOriginException();
    }

    // Check if 'token' is valid.
    $token = request('token');

    // Check if 'token' query string is missing.
    if (!$token) {
      throw new MissingTokenException();
    }

    $site = null;
    $originHost = get_domain($request->header('origin'));

    if ($this->hasAdminToken()) {
      // Bypass token check, get first matching.
      $site = Site::where(
        'domain',
        'LIKE',
        '%' . $originHost . '%'
      )->firstOrFail();
    } else {
      // Find site record with matching token.
      $site = Site::whereToken($token)->first();
    }

    // Check if no site found.
    if (!$site) {
      throw new InvalidTokenException();
    }

    // Check if current origin host matches site record domain host.
    $siteHost = $site->getDomainHost();
    if ($siteHost !== $originHost) {
      throw new InvalidOriginException();
    }

    // Check for active site.
    if (!$site->isActive()) {
      throw new InactiveSiteException();
    }

    // Check for valid subscription associated with site.
    if (!$site->isSubscriptionValid()) {
      throw new InvalidSubscriptionException();
    }

    app()->instance(Site::class, $site);

    // All checks passed.
    return $next($request);
  }
}
