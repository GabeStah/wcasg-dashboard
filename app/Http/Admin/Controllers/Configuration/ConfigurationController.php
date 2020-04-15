<?php

namespace CreatyDev\Http\Admin\Controllers\Configuration;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Configuration\Models\Configuration;
use Illuminate\Http\Request;
use LZCompressor\LZString;

class ConfigurationController extends Controller {
  public function index() {
    $configuration = Configuration::first();

    $disclaimer = null;

    if ($configuration->settings && $configuration->settings['disclaimer']) {
      $disclaimer = LZString::decompressFromBase64(
        $configuration->settings['disclaimer']
      );
    }

    return view('admin.configuration.index', [
      'configuration' => $configuration,
      'disclaimer' => $disclaimer
    ]);
  }

  public function update(Request $request) {
    $request->validate([
      'disclaimer' => 'required'
    ]);

    $configuration = Configuration::first();

    if ($configuration->settings) {
      $configuration->settings = (object) array_merge(
        $configuration->settings,
        [
          'disclaimer' => LZString::compressToBase64(request('disclaimer'))
        ]
      );
    } else {
      $configuration->settings = (object) [
        'disclaimer' => LZString::compressToBase64(request('disclaimer'))
      ];
    }

    $configuration->save();

    return redirect()
      ->route('admin.configuration.index')
      ->with(
        'success',
        __('controller.admin.Configuration.disclaimer.update.success')
      );
  }
}
