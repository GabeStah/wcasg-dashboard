<?php

namespace CreatyDev\App\Exceptions\Api\Audit;

use CreatyDev\App\Exceptions\BaseException;
use Illuminate\Contracts\View\View;
use Throwable;

class InvalidAuditException extends BaseException {
  public function __construct(
    $message = null,
    View $view = null,
    $code = null,
    Throwable $previous = null
  ) {
    parent::__construct($message, $view, $code, $previous);

    if (isset($code)) {
      $this->code = $code;
    }

    $this->message = __('error.api.audit.invalid');

    if (isset($view)) {
      $this->view = $view;
    } else {
      $this->view = view('audit.show');
    }
  }
}
