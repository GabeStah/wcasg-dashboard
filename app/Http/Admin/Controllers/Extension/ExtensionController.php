<?php

namespace CreatyDev\Http\Admin\Controllers\Extension;

use CreatyDev\Domain\Extensions\Models\Extension;
use CreatyDev\App\Controllers\Controller;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\View\View;

class ExtensionController extends Controller {
  /**
   * Display all Extensions view.
   *
   * @return Factory|Response|View
   */
  public function index() {
    $extensions = Extension::whereImported(true)->get();

    $i8n = json_encode([
      'action' => __('admin.extension.action'),
      'add_new_button' => __('admin.extension.add_new_button'),
      'assertion' => __('admin.extension.assertion'),
      'type' => [
        'built_in' => __('admin.extension.type.built_in'),
        'custom' => __('admin.extension.type.custom')
      ]
    ]);

    return view('admin.extensions.index', [
      'extensions' => $extensions,
      'i8n' => $i8n
    ]);
  }
}
