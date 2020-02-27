<?php

namespace CreatyDev\Domain\Audits\Jobs;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Events\AuditCompleted;
use CreatyDev\Domain\Audits\Events\AuditFailed;
use CreatyDev\Domain\Audits\Events\AuditTaskStarted;
use CreatyDev\Domain\Audits\Models\Audit;
use DateTime;
use Exception;
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
    $resultObject = $pa11y->getTaskAllResults($this->audit->task_id);

    if (!$this->audit->result_id) {
      $this->audit->update(['result_id' => $resultObject->id]);
    }
    event(new AuditCompleted($this->audit));
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

  /**
   * Determine the time at which the job should timeout.
   *
   * @return DateTime
   */
  public function retryUntil() {
    return now()->addSeconds(60);
  }
}
