<?php

namespace CreatyDev\App\Traits\Api;

use CreatyDev\Domain\Sites\Models\Site;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Storage;

/**
 * Generates Widget payload.
 *
 * Trait HasWidgetPayload
 */
trait HasWidgetPayload {
  /**
   * Generate full, ordered payload.
   * Widget MUST be final inclusion.
   *
   * @param Site $site
   *
   * @return string
   * @throws FileNotFoundException
   */
  protected function getPayload(Site $site) {
    $payloads = [];
    array_push($payloads, $this->getExtensionPayload($site));
    array_push($payloads, $this->getStatementPayload($site));
    array_push($payloads, $this->getWidgetPayload());
    return implode('', $payloads);
  }

  /**
   * Gets packed module for Extensions.
   *
   * @param Site $site
   *
   * @return string
   */
  protected function getExtensionPayload(Site $site) {
    $extensions = $site->extensions;
    if ($extensions) {
      return webpackify('WcasgExtensions', json_encode($extensions));
    }
  }

  /**
   * Gets packed module for accessibility Statement.
   *
   * @param Site $site
   *
   * @return string
   */
  protected function getStatementPayload(Site $site) {
    $content = $site->statement->render($site);
    if ($content) {
      return webpackify('WcasgAccessibilityStatement', $content);
    }
  }

  /**
   * Get base Widget script file from storage.
   *
   * @return string
   * @throws FileNotFoundException
   */
  protected function getWidgetPayload() {
    return Storage::disk('widget')->get(config('widget.base.filename'));
  }
}
