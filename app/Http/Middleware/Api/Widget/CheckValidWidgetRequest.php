<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\InactiveSite;
use CreatyDev\App\Exceptions\Api\Widget\InvalidOrigin;
use CreatyDev\App\Exceptions\Api\Widget\InvalidSubscription;
use CreatyDev\App\Exceptions\Api\Widget\InvalidToken;
use CreatyDev\App\Exceptions\Api\Widget\MissingOrigin;
use CreatyDev\App\Exceptions\Api\Widget\MissingToken;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;

class CheckValidWidgetRequest {
  /**
   * Check if 'token' parameter is valid.
   *
   * @param Request $request
   * @param Closure $next
   * @return mixed
   * @throws InvalidToken
   * @throws MissingOrigin
   * @throws MissingToken
   * @throws InvalidOrigin
   * @throws InvalidSubscription
   * @throws InactiveSite
   */
  public function handle($request, Closure $next) {
    // Check for 'origin' header.
    if (!$request->hasHeader('origin')) {
      throw new MissingOrigin();
    }

    // Check if 'token' is valid.
    $token = $request->get('token');

    // Check if 'token' query string is missing.
    if (!$token) {
      throw new MissingToken();
    }

    // Find site record with matching token.
    $site = Site::whereToken($token)->first();

    // Check if no site found.
    if (!$site) {
      throw new InvalidToken();
    }

    // Check if current origin host matches site record domain host.
    $siteHost = $site->getDomainHost();
    $originHost = parse_url($request->header('origin'), PHP_URL_HOST)
      ? parse_url($request->header('origin'), PHP_URL_HOST)
      : $request->header('origin');
    if ($siteHost !== $originHost) {
      //            $error = new InvalidOrigin();
      //            $error->setCorsOrigin(config('app.url'));
      throw new InvalidOrigin();
    }

    // Check for active site.
    if (!$site->isActive()) {
      throw new InactiveSite();
    }

    // Check for valid subscription associated with site.
    if (!$site->isSubscriptionValid()) {
      throw new InvalidSubscription();
    }

    $request->attributes->add(['site_id' => $site->id]);

    // All checks passed.
    return $next($request);
  }
}
