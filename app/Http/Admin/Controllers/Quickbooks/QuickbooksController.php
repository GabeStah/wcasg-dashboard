<?php

namespace CreatyDev\Http\Admin\Controllers\Quickbooks;

use CreatyDev\App\Controllers\Controller;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\View\View;

class QuickbooksController extends Controller {
  /**
   * Display base view.
   *
   * @return Factory|Response|View
   */
  public function index() {
    return view('admin.quickbooks.index');
  }
}
