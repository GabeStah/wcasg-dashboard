<?php

namespace CreatyDev\Domain\Audits\Jobs;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Events\AuditFailed;
use CreatyDev\Domain\Audits\Events\AuditTaskCreated;
use CreatyDev\Domain\Audits\Events\AuditTaskStarted;
use CreatyDev\Domain\Audits\Models\Audit;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RunAuditTask implements ShouldQueue {
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

  protected $audit;

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
   * @param Audit $audit
   */
  public function __construct(Audit $audit) {
    $this->audit = $audit;
  }

  /**
   * Execute the job.
   *
   * @param Pa11y $pa11y
   *
   * @return void
   */
  public function handle(Pa11y $pa11y) {
    $pa11y->runTask($this->audit->task_id);
    event(new AuditTaskStarted($this->audit));
  }

  /**
   * The job failed to process.
   *
   * @param  Exception  $exception
   * @return void
   */
  public function failed(Exception $exception) {
    event(new AuditFailed($this->audit, $exception));
  }
}
