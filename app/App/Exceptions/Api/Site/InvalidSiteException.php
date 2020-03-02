<?php

namespace CreatyDev\App\Exceptions\Api\Site;

use CreatyDev\App\Exceptions\ApiException;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class InvalidSiteException extends ApiException {
  public $message;

  public function __construct(
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = __('error.api.invalid-site');
  }

  /**
   * Token parameter invalid.
   * Render the exception as an HTTP response.
   *
   * @param  Request  $request
   * @return Response
   */
  public function render($request) {
    return parent::render($request);
  }
}
