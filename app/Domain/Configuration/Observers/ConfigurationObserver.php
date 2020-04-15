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
    if (!$configuration->settings && !$configuration->settings['disclaimer']) {
      // Default disclaimer
      $disclaimer = app('files')->get(
        resource_path('assets/disclaimer/default.html')
      );

      $configuration->settings = (object) [
        'disclaimer' => LZString::compressToBase64($disclaimer)
      ];
    }

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
    return $this->setDefaults($configuration);
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
    return $this->setDefaults($configuration);
  }
}
