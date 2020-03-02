<?php

namespace CreatyDev\Http\Middleware\Audit;

use Carbon\Carbon;
use Closure;
use CreatyDev\App\Exceptions\Api\Audit\ExpiredAuditException;
use CreatyDev\App\Exceptions\Api\Audit\IncompleteAuditException;
use CreatyDev\App\Exceptions\Api\Audit\InvalidAuditException;
use CreatyDev\App\Exceptions\Api\Audit\RunningAuditException;
use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Http\Request;

class ValidateAuditResultsRequest {
  /**
   * @param Request $request
   * @param Closure $next
   *
   * @return mixed
   * @throws ExpiredAuditException
   * @throws IncompleteAuditException
   * @throws InvalidAuditException
   * @throws RunningAuditException
   */
  public function handle(Request $request, Closure $next) {
    $audit = Audit::findOrFail(request('id'));

    app()->instance(Audit::class, $audit);

    if (!$audit) {
      throw new InvalidAuditException();
    }

    // Task not assigned.
    if (!$audit->task_id) {
      throw new IncompleteAuditException();
    }

    // Task assigned by no result
    if (!$audit->result_id && $audit->task_id) {
      throw new RunningAuditException();
    }

    // Check expiration
    if (!$audit->user_id) {
      $now = Carbon::now();
      $expiredAt = Carbon::create($audit->expired_at);
      if ($now->greaterThan($expiredAt)) {
        throw new ExpiredAuditException();
      }
    }

    // All checks passed.
    return $next($request);
  }
}
