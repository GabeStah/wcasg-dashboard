<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Audits\Models\Audit;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AuditsController extends Controller {
  /**
   * View all sites.
   *
   * @return Factory|View|string
   */
  public function index() {
    try {
      $audits = Audit::all();

      return view('account.audits.index', compact('audits'));
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }

  public function create() {
    $user = auth()->user();
    $sites = $user->sites;
    return view('account.audits.create', ['sites' => $sites]);
  }
}
