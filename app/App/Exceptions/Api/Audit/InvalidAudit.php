<?php

namespace CreatyDev\App\Exceptions\Api\Audit;

use CreatyDev\App\Exceptions\Api;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class InvalidAudit extends Api {
  public $message;

  public function __construct(
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($message, $code, $previous);
    $this->message = __('error.api.audit.invalid');
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
