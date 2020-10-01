<?php

namespace CreatyDev\Domain\Api\Widget\Jobs;

use CreatyDev\Solarix\Coeus\CoeusApiService;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RecordWidgetRequest implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  protected $document;

  /**
   * The number of seconds the job can run before timing out.
   *
   * @var int
   */
  public $timeout = 60;

  /**
   * The number of times the job may be attempted.
   *
   * @var int
   */
  public $tries = 3;

  /**
   * Create a new job instance.
   *
   * @param $document
   */
  public function __construct($document) {
    $this->document = $document;
  }

  /**
   * Execute the job.
   *
   * @param CoeusApiService $coeusApiService
   * @return \Psr\Http\Message\ResponseInterface
   */
  public function handle(CoeusApiService $coeusApiService) {
    return $coeusApiService->insert($this->document);
  }

  /**
   * The job failed to process.
   *
   * @param  Exception  $exception
   * @return void
   */
  public function failed(Exception $exception) {
    //    event(new AuditFailed($this->site, $exception));
  }
}
