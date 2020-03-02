<?php

namespace CreatyDev\Http\Middleware\Api\Widget;

use Closure;
use CreatyDev\App\Exceptions\Api\Widget\MissingOriginException;
use Illuminate\Http\Request;

class CheckOriginMissing {
  /**
   * Check if request has 'origin' header.
   *
   * @param Request $request
   * @param Closure $next
   *
   * @return mixed
   * @throws MissingOriginException
   */
  public function handle($request, Closure $next) {
    if (!$request->hasHeader('origin')) {
      throw new MissingOriginException();
    }

    return $next($request);
  }
}
