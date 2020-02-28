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

    $response = response()->json($next($request));

    return $response->original;
  }
}
