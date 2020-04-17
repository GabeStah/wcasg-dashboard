<?php

namespace CreatyDev\Http\Audit\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Audits\Models\Audit;

class AuditController extends Controller {
  public function get() {
    $audit = Audit::findOrFail(request('id'));
    $resultsObject = $audit->results();

    return view('audit.show', [
      'audit' => $audit,
      'results' => $resultsObject->results
    ]);
  }
  public function index() {
    return view('audit.index');
  }

  public function thanks() {
    return view('audit.thanks');
  }
}
