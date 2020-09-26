<?php

namespace CreatyDev\App\Traits\Api;

use Illuminate\Http\Request;

/**
 * Provides methods for handling Http Request properties.
 *
 * Trait HasRequest
 */
trait HasRequest {
  protected function getFingerprint(Request $request) {
    return $request->fingerprint();
  }

  protected function getHeaders(Request $request) {
    // Flatten to key/value pairs array
    return array_map(function ($element) {
      return $element[0];
    }, $request->headers->all());
  }

  protected function getHost(Request $request) {
    return $request->getHost();
  }

  protected function getIp(Request $request) {
    return $request->ip();
  }

  protected function getPath(Request $request) {
    return $request->path();
  }
}
