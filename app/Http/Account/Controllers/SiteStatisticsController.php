<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Solarix\Statistics\StatisticsService;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;

class SiteStatisticsController extends Controller {
  /**
   * View Site statistics table.
   *
   * @param $id
   *
   * @param StatisticsService $statisticsService
   * @return Factory|View|string
   */
  public function index($id, StatisticsService $statisticsService) {
    $site = Site::findOrFail($id);

    return view('account.sites.statistics.index', [
      'site' => $site,
      'statistics' => $statisticsService->getSiteStatistics($site)
    ]);
  }
}
