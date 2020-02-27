<?php

namespace CreatyDev\Http\Audit\Controllers;

use CreatyDev\App\Controllers\Controller;

class AuditController extends Controller {
  public function index() {
    return view('audit.index');
  }
}
