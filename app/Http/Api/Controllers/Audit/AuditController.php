<?php

namespace CreatyDev\Http\Api\Controllers\Audit;

use CreatyDev\App\Api\ApiResponse;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Events\AuditCreated;
use CreatyDev\Domain\Audits\Events\AuditRequested;
use CreatyDev\Domain\Audits\Jobs\CreateAuditTask;
use CreatyDev\Domain\Audits\Jobs\GetAuditResults;
use CreatyDev\Domain\Audits\Jobs\RunAuditTask;
use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Http\Request;

class AuditController extends Controller {
  public function create(Request $request, Pa11y $pa11y) {
    $audit = new Audit($request->get('params'));
    $audit->saveOrFail();

    // Dispatch Audit creation event.
    event(new AuditCreated($audit));

    // If token passed use background jobs
    if (request('token')) {
      // Dispatch Audit request event.
      event(new AuditRequested($audit));
    } else {
      // API request, synchronous
      CreateAuditTask::dispatchNow($audit);
      RunAuditTask::dispatchNow($audit);
      GetAuditResults::dispatchNow($audit);

      return new ApiResponse($pa11y->getTaskAllResults($audit->task_id));
    }
    return new ApiResponse();
  }

  public function get(Request $request, Audit $audit, Pa11y $pa11y) {
    return new ApiResponse($pa11y->getTaskAllResults($audit->task_id));
  }
}
