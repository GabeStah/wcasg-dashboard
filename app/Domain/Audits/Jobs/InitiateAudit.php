<?php

namespace CreatyDev\Domain\Audits\Jobs;

use CreatyDev\App\Pa11y\Pa11y;
use CreatyDev\Domain\Audits\Models\Audit;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class InitiateAudit implements ShouldQueue {
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
   * @see https://laravel.com/docs/6.x/queues#job-chaining
   *
   * @return void
   */
  public function handle(Pa11y $pa11y) {
    $createResponse = $pa11y->createTask($this->audit->url);

    $createResponse = $pa11y->createTask(request('url'));
    if (is_array($createResponse)) {
      //      return response()->json(
      //        ['message' => $createResponse['message']],
      //        $createResponse['status'],
      //        [],
      //        JSON_PRETTY_PRINT
      //      );
    } elseif ($createResponse->getStatusCode() !== 201) {
      //      return response()->json(
      //        ['message' => $createResponse->getBody()],
      //        $createResponse->getStatusCode(),
      //        [],
      //        JSON_PRETTY_PRINT
      //      );
    }

    $task = json_decode($createResponse->getBody());
    $this->audit->update(['task_id' => $task->id]);
    $runResponse = $pa11y->runTask($task->id);

    if (is_array($runResponse)) {
      //      return response()->json(
      //        ['message' => $runResponse['message']],
      //        $runResponse['status'],
      //        [],
      //        JSON_PRETTY_PRINT
      //      );
    } elseif ($runResponse->getStatusCode() !== 202) {
      //      return response()->json(
      //        ['message' => $runResponse->getBody()],
      //        $runResponse->getStatusCode(),
      //        [],
      //        JSON_PRETTY_PRINT
      //      );
    }

    //    return response()->json($runResponse);
    //    return response()->json(
    //      ['message' => 'Audit created and running.', 'body' => $task],
    //      200,
    //      [],
    //      JSON_PRETTY_PRINT
    //    );
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
}
