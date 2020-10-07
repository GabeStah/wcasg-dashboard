<?php

namespace CreatyDev\Http\Admin\Controllers\Configuration;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Configuration\Models\Configuration;
use Illuminate\Http\Request;

class ConfigurationController extends Controller {
  public function index() {
    return view('admin.configuration.index', [
      'configurations' => Configuration::all()
    ]);
  }

  public function update(Request $request) {
    $configurations = request('configurations');
    foreach ($configurations as $key => $data) {
      $configuration = Configuration::byName($key);
      $configuration->update(['data' => $data]);
    }

    return redirect()
      ->route('admin.configuration.index')
      ->with(
        'success',
        __('controller.admin.Configuration.disclaimer.update.success')
      );
  }
}
