<?php

namespace CreatyDev\Http\Middleware\Api;

use Closure;
use Illuminate\Http\Request;

class RespondAsJson {
  /**
   * Handle an incoming request.
   *
   * @param  Request $request
   * @param Closure  $next
   * @return mixed
   */
  public function handle(Request $request, Closure $next) {
    $request->headers->set('Accept', 'application/json');

    return response()->json($next($request), 200, [], JSON_PRETTY_PRINT);
  }
}
