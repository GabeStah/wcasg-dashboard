<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Configuration\Models\Configuration;
use CreatyDev\Domain\Ticket\Models\Ticket;
use CreatyDev\Solarix\Statistics\StatisticsService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class DashboardController extends Controller {
  /**
   * Show the user's application dashboard.
   *
   * @param Request $request
   * @param StatisticsService $statisticsService
   * @return Application|Factory|Response|View
   */
  public function index(
    Request $request,
    StatisticsService $statisticsService
  ) {
    $Nbtickets = Ticket::where('user_id', Auth::user()->id)->count();
    // Get statistics for active sites
    $statistics = $statisticsService->getSiteStatistics(
      Auth::user()->sites->where('active', true)
    );

    return view('account.dashboard.index', [
      'Nbtickets' => $Nbtickets,
      'topLeftPanel' => Configuration::byName('dashboard-panel-top-left'),
      'leftPanel' => Configuration::byName('dashboard-panel-bottom-left'),
      'rightPanel' => Configuration::byName('dashboard-panel-bottom-right'),
      'statistics' => $statistics,
      'token' => Auth::user()->getRememberToken()
    ]);
  }
}
