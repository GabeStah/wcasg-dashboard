<?php

namespace CreatyDev\App\Traits\Api;

use Illuminate\Http\Request;
use Tests\Mock\Request as MockRequest;

/**
 * Provides methods for handling Http Request properties.
 *
 * Trait HasRequest
 */
trait HasRequest {
  /**
   * @param Request|MockRequest $request
   * @return string
   */
  protected function getFingerprint($request) {
    return $request->fingerprint();
  }

  /**
   * @param Request||MockRequest $request
   * @return array
   */
  protected function getHeaders($request) {
    if ($request instanceof MockRequest) {
      return $request->getHeaders();
    }
    // Flatten to key/value pairs array
    return array_map(function ($element) {
      return $element[0];
    }, $request->headers->all());
  }

  /**
   * @param Request|MockRequest $request
   * @return string
   */
  protected function getHost($request) {
    return $request->getHost();
  }

  /**
   * @param Request|MockRequest $request
   * @return string|null
   */
  protected function getIp($request) {
    return $request->ip();
  }

  /**
   * @param Request|MockRequest $request
   * @return string
   */
  protected function getPath($request) {
    return $request->path();
  }

  /**
   * @param Request|MockRequest $request
   * @return string
   */
  protected function getUrl($request) {
    return $request->fullUrl();
  }
}
