<?php

namespace CreatyDev\Http\Middleware\Api\Extension;

use Closure;
use CreatyDev\App\Exceptions\Api\Authorization\InvalidAuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckValidExtensionRequest {
  /**
   * @param Request $request
   * @param Closure $next
   *
   * @return mixed
   * @throws InvalidAuthorizationException
   */
  public function handle(Request $request, Closure $next) {
    // Must be a logged in user
    $user = Auth::user();
    if (!$user) {
      throw new InvalidAuthorizationException();
    }

    // Built-in require admin
    if (request('extension.imported') && !$user->isAdmin()) {
      throw new InvalidAuthorizationException();
    }

    // All checks passed.
    return $next($request);
  }
}
