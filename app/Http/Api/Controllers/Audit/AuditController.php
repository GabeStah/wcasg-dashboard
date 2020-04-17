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
use CreatyDev\Domain\Leads\Mail\LeadGenerated;
use CreatyDev\Domain\Leads\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AuditController extends Controller {
  public function create(Request $request, Pa11y $pa11y) {
    $auditData = [];

    if ($request->has('token')) {
      $auditData['id'] = $request->input('token');
    }

    if ($request->has('url')) {
      $auditData['url'] = $request->input('url');
    }

    if ($request->has('site_id')) {
      $auditData['site_id'] = $request->input('site_id');
    }

    $audit = new Audit($auditData);
    $audit->saveOrFail();

    $lead = null;

    if ($request->has('type') && $request->input('type') === 'lead') {
      $lead = new Lead($request->input());
      $lead->audit_id = $audit->id;
      $lead->saveOrFail();
    }

    // Dispatch Audit creation event.
    event(new AuditCreated($audit));

    if ($request->has('type') && $request->input('type') === 'lead') {
      // Dispatch Audit request event.
      event(new AuditRequested($audit));
      return redirect()
        ->route('audit.thanks')
        ->with('success', 'Thank you very much.');
    } elseif (request('token')) {
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
