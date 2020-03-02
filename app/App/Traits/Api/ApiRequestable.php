<?php

namespace CreatyDev\App\Traits\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

/**
 * Applied to any class that may contain API request.
 *
 * Trait ApiRequestable
 */
trait ApiRequestable {
  /**
   * Determine if request URI is an API endpoint.
   *
   * @param Request $request
   *
   * @return bool
   */
  protected function isApiRequest(Request $request) {
    $uri = $request->getRequestUri();
    return Str::startsWith($uri, '/api');
  }
}
