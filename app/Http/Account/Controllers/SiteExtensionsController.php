<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Extensions\Models\Extension;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class SiteExtensionsController extends Controller {
  /**
   * View extensions for specific site.
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

  public function update(Request $request) {
    $id = $request->get('id');
    $type = $request->get('type');
    $type_id = $request->get('type_id');
    $extension = Extension::findOrFail($id);

    if ($type === 'action') {
      $action = $extension->actions->findOrFail($type_id);
    } elseif ($type === 'predicate') {
      $predicate = $extension->predicates->findOrFail($type_id);
    }

    //    return view('account.sites.extensions.index', [
    //      'site' => $site,
    //      'extensions' => $extensions
    //    ]);
  }
}
