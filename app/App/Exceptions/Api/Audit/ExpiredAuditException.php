<?php

namespace CreatyDev\App\Exceptions\Api\Audit;

use CreatyDev\App\Exceptions\BaseException;
use Illuminate\Contracts\View\View;
use Throwable;

class ExpiredAuditException extends BaseException {
  public function __construct(
    View $view = null,
    $message = '',
    $code = 0,
    Throwable $previous = null
  ) {
    parent::__construct($view, $message, $code, $previous);
    $this->message = __('error.api.audit.expired');
    $this->view = $view ? $view : view('audit.show');
  }
}