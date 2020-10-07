<?php

namespace CreatyDev\Domain\Configuration\Observers;

use CreatyDev\Domain\Configuration\Models\Configuration;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use LZCompressor\LZString;

class ConfigurationObserver {
  /**
   * Assign default values.
   *
   * @param Configuration $configuration
   *
   * @return Configuration
   * @throws FileNotFoundException
   */
  private function setDefaults(Configuration $configuration) {
    $settings = $configuration->settings;

    switch ($configuration->name) {
      case 'disclaimer':
    }

    if (!$settings['disclaimer']) {
      // Default disclaimer
      $data = app('files')->get(
        resource_path('assets/disclaimer/default.html')
      );

      $settings['disclaimer'] = LZString::compressToBase64($data);
    }

    if (!$settings['dashboard']) {
      $settings['dashboard'] = [];
      if (!$settings['dashboard']['panel-left']) {
        $data = app('files')->get(
          resource_path('assets/dashboard/panel-left.html')
        );

        $settings['dashboard']['panel-left'] = LZString::compressToBase64(
          $data
        );
      }

      if (!$settings['dashboard']['panel-right']) {
        $data = app('files')->get(
          resource_path('assets/dashboard/panel-right.html')
        );

        $settings['dashboard']['panel-right'] = LZString::compressToBase64(
          $data
        );
      }
      $settings['dashboard'] = (object) $settings['dashboard'];
    }

    $configuration->settings = (object) $settings;

    return $configuration;
  }

  /**
   * Business logic before Configuration created.
   *
   * @param Configuration $configuration
   *
   * @return Configuration
   * @throws FileNotFoundException
   */
  public function creating(Configuration $configuration) {
    //    return $this->setDefaults($configuration);
  }

  /**
   * Business logic before Configuration created.
   *
   * @param Configuration $configuration
   *
   * @return Configuration
   * @throws FileNotFoundException
   */
  public function updating(Configuration $configuration) {
    //    return $this->setDefaults($configuration);
  }
}
