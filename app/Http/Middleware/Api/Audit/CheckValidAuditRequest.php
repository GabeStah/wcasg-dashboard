<?php

namespace CreatyDev\Http\Middleware\Api\Audit;

use Closure;
use CreatyDev\App\Exceptions\Api\Site\InvalidSite;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Http\Request;

class CheckValidAuditRequest {
  /**
   * @param Request $request
   * @param Closure $next
   *
   * @return mixed
   * @throws InvalidSite
   */
  public function handle(Request $request, Closure $next) {
    $params = [];

    // Check for valid site_id
    if ($request->getContentType() === 'json' && $request->json('site_id')) {
      $params['site_id'] = $request->json('site_id');
    } elseif (request('site_id')) {
      $params['site_id'] = request('site_id');
    }

    $site = null;

    if (isset($params['site_id'])) {
      $site = Site::find($params['site_id']);
    }

    if (isset($params['site_id']) && !$site) {
      throw new InvalidSite();
    }

    // TODO: Check for active subscription related to site?
    // Assign user_id
    if (isset($params['site_id']) && $site) {
      $params['user_id'] = $site->user()->id;
    }

    // If site, get url
    if (isset($params['site_id']) && $site) {
      $params['url'] = $site->domain;
    } elseif ($request->getContentType() === 'json') {
      $params['url'] = $request->json('url');
    } else {
      $params['url'] = request('url');
    }

    // Assign id to token if passed
    if (request('token')) {
      $params['id'] = request('token');
    }

    $request->attributes->add(['params' => $params]);

    // All checks passed.
    return $next($request);
  }
}
