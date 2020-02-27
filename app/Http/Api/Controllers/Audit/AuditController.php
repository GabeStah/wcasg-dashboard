<?php

namespace CreatyDev\Http\Api\Controllers\Audit;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Events\AuditCreated;
use CreatyDev\Domain\Audits\Events\AuditRequested;
use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Http\Request;

class AuditController extends Controller {
  public function create(Request $request, Pa11y $pa11y) {
    $audit = new Audit(['url' => request('url')]);
    $audit->saveOrFail();

    // Dispatch Audit creation event.
    event(new AuditCreated($audit));
    // Dispatch Audit request event.
    event(new AuditRequested($audit));
  }

  public function results(Request $request, Pa11y $pa11y) {
    return response()->json($pa11y->getTaskAllResults(request('id')));
  }
}
