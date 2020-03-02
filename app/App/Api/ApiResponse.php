<?php

namespace CreatyDev\App\Api;

use Exception;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Request;

class ApiResponse implements Responsable {
  protected $data = [];
  protected $exception = null;
  protected $headers = ['Content-Type' => 'application/json'];
  protected $status = 200;

  public function __construct(
    $data = null,
    $status = null,
    array $headers = null,
    Exception $exception = null
  ) {
    if (isset($data)) {
      $this->data = $data;
    }
    if (isset($exception)) {
      $this->exception = $exception;
    }
    if (isset($headers)) {
      $this->headers = $headers;
    }
    if (isset($status)) {
      $this->status = $status;
    }
  }

  private function responseObject(Request $request) {
    return [
      'data' => $this->data,
      'exception' => $this->exception
        ? [
          'code' => $this->exception->getCode(),
          'message' => $this->exception->getMessage(),
          'type' => explode('\\', get_class($this->exception))[
            count(explode('\\', get_class($this->exception))) - 1
          ]
        ]
        : null,
      'headers' => $this->headers,
      'status' => $this->status
    ];
  }

  /**
   * @inheritDoc
   */
  public function toResponse($request) {
    return response()->json(
      $this->responseObject($request),
      $this->status,
      $this->headers,
      JSON_PRETTY_PRINT
    );
  }
}
