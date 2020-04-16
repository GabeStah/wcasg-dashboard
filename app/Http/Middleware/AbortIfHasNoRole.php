<?php

namespace CreatyDev\Http\Middleware;

use Closure;

class AbortIfHasNoRole {
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \Closure $next
   * @param $role
   * @param null $permission
   * @return mixed
   */
  public function handle($request, Closure $next, $role, $permission = null) {
    if (!$request->user()->hasRole($role)) {
      return abort(404);
    }

    if ($permission !== null && !$request->user()->can($permission)) {
      return abort(404);
    }

    // Explicitly halt impersonation if an admin-required request.
    if ($role === 'admin' && session()->has('impersonate')) {
      session()->forget('impersonate');
      return redirect()
        ->route('admin.dashboard')
        ->with(['success', 'User impersonation has been terminated.']);
    }

    return $next($request);
  }
}
