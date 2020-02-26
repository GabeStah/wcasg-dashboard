<?php

namespace CreatyDev\Domain\Audits\Jobs;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GetAuditResults implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  protected $audit;

  /**
   * The number of seconds the job can run before timing out.
   *
   * @var int
   */
  public $timeout = 10;

  //  /**
  //   * The number of times the job may be attempted.
  //   *
  //   * @var int
  //   */
  //  public $tries = 20;

  /**
   * Create a new job instance.
   *
   * @param Audit $audit
   */
  public function __construct(Audit $audit) {
    $this->audit = $audit;
  }

  /**
   * Execute the job.
   *
   * @param Pa11y $pa11y
   * @see https://laravel.com/docs/6.x/queues#job-chaining
   *
   * @return void
   */
  public function handle(Pa11y $pa11y) {
    // TODO: Chain this after initiate
    // TODO Determine retry delay
    $response = $pa11y->getTaskAllResults($this->audit->task_id);
    if ($response->getStatusCode() !== 200) {
      $this->fail();
    }
    if (!$this->audit->result_id) {
      $this->audit->update(['result_id' => $response->result]);
    }
  }

  /**
   * The job failed to process.
   *
   * @param  Exception  $exception
   * @return void
   */
  public function failed(Exception $exception) {
    // Send user notification of failure, etc...
  }

  /**
   * Determine the time at which the job should timeout.
   *
   * @return \DateTime
   */
  public function retryUntil() {
    return now()->addSeconds(30);
  }
}
