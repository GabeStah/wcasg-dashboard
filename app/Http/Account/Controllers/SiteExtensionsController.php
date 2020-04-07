<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Contracts\View\Factory;
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
    $i8n = json_encode([
      'action' => __('account.extension.action'),
      'add_new_button' => __('account.extension.add_new_button'),
      'assertion' => __('account.extension.assertion'),
      'type' => [
        'built_in' => __('account.extension.type.built_in'),
        'custom' => __('account.extension.type.custom')
      ]
    ]);

    return view('account.sites.extensions.index', [
      'extensions' => $extensions,
      'i8n' => $i8n,
      'site' => $site
    ]);
  }
}
