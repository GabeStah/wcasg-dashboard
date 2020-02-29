<?php

namespace CreatyDev\Http\Audit\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Support\Facades\Request;

class AuditController extends Controller {
  public function get() {
    $audit = Audit::findOrFail(request('id'));
    $request = Request::create(route('api.audit.get', ['id' => request('id')]));
    $response = app()->handle($request);
    $results = json_decode($response->getContent())->original->results;

    return view('audit.show', ['audit' => $audit, 'results' => $results]);
  }
  public function index() {
    return view('audit.index');
  }
}
