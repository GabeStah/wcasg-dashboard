<?php

namespace CreatyDev\Http\Home\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Sarfraznawaz2005\VisitLog\Facades\VisitLog;

class HomeController extends Controller {
  /**
   * Show the application home page.
   *
   * @param Request $request
   * @return Application|Factory|Response|View
   */
  public function index(Request $request) {
    // Log the visitor
    VisitLog::save();
    // Get Plans to show on the landing page
    $plans = Plan::whereActive(true)
      ->whereVisible(true)
      ->orderBy('amount')
      ->get();
    return view('home.index', compact('plans'));
  }
}
