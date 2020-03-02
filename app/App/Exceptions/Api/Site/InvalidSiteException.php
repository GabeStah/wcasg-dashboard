<?php

namespace CreatyDev\App\Exceptions\Api\Site;

use CreatyDev\App\Exceptions\BaseException;
use Illuminate\Contracts\View\View;

class InvalidSiteException extends BaseException {
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

    $this->message = __('error.api.invalid-site');

    if (isset($view)) {
      $this->view = $view;
    }
  }
}
