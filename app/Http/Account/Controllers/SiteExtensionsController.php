<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class SiteExtensionsController extends Controller {
  /**
   * View all sites.
   *
   * @param $id
   *
   * @return Factory|View|string
   */
  public function index($id) {
    $site = Site::findOrFail($id);
    $extensions = $site->extensions;

    return view('account.sites.extensions.index', [
      'site' => $site,
      'extensions' => $extensions
    ]);
  }
}
