<?php

namespace CreatyDev\App\Exceptions\Api\Authorization;

use CreatyDev\App\Exceptions\ApiException;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Throwable;

class InvalidAuthorizationException extends ApiException {
  public $message;

  public function __construct(
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = __('error.api.authorization.invalid');
  }

  /**
   * Render the exception as an HTTP response.
   *
   * @param Request $request
   * @return Response
   */
  public function render($request) {
    return parent::render($request);
  }
}
