<?php

namespace CreatyDev\Domain\Api\Widget\Jobs;

use Exception;
use GuzzleHttp\Client;
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
   * @return void
   */
  public function handle() {
    $client = new Client();
    $token = config('solarix.coeus.token');
    $bearer = 'Bearer ' . $token;

    $coeusResponse = $client->request(
      'POST',
      config('solarix.coeus.url') . '/data/insert',
      [
        'body' => json_encode([
          'collection' => config('solarix.coeus.collections.statistics'),
          'db' => config('solarix.coeus.db'),
          'document' => [$this->document]
        ]),
        'headers' => [
          'Accept' => 'application/json',
          'Accept-Encoding' => 'gzip, deflate, br',
          'Authorization' => $bearer,
          'Content-Type' => 'application/json',
          'User-Agent' => 'wcasg-widget-dashboard/1.0'
        ]
      ]
    );
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
