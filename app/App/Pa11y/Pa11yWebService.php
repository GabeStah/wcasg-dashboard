<?php

namespace CreatyDev\App\Pa11y;

use Exception;
use GuzzleHttp\Client;
use CreatyDev\Domain\Users\Models\User;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Contracts\Support\Jsonable;

class Pa11yWebService implements Pa11y {
  /**
   * Holds GuzzleHttp Client.
   * To handle API requests.
   *
   * @var Client
   */
  protected $client;

  /**
   * Pa11yWebservice constructor.
   * @param Client $client
   */
  public function __construct(Client $client) {
    $this->client = $client;
  }

  /**
   * Generate a task for specified domain and standard.
   *
   * @param string $domain
   *
   * @return array|mixed
   */
  public function createTask(string $domain) {
    try {
      return $this->client->request(
        'POST',
        config('services.pa11y.endpoint') . 'tasks',
        [
          'form_params' => [
            'name' => 'Test Task',
            'url' => $domain,
            'standard' => 'WCAG2AA'
          ]
        ]
      );
    } catch (Exception $e) {
      return [
        'message' => 'An error has occurred.  Unable to create task.',
        'status' => '400'
      ];
    }
  }

  public function getTasks() {
    // TODO: Implement getTasks() method.
  }

  /**
   * @inheritDoc
   */
  public function getAllTasksAllResults() {
    // TODO: Implement getAllTasksAllResults() method.
  }

  public function getTask() {
    // TODO: Implement getTask() method.
  }

  public function editTask() {
    // TODO: Implement editTask() method.
  }

  public function deleteTask() {
    // TODO: Implement deleteTask() method.
  }

  public function runTask(string $id) {
    try {
      return $this->client->request(
        'POST',
        config('services.pa11y.endpoint') . "tasks/{$id}/run"
      );
    } catch (RequestException $e) {
      return [
        'message' => $e->getMessage(),
        'status' => $e->getCode()
      ];
    }
  }

  public function getTaskAllResults(string $id) {
    try {
      return $this->client->request(
        'GET',
        config('services.pa11y.endpoint') . "tasks/{$id}/results",
        [
          'query' => [
            // 'from' => null,
            // 'to' => null,
            'full' => 'true'
          ]
        ]
      );
    } catch (RequestException $e) {
      return [
        'message' => $e->getMessage(),
        'status' => $e->getCode()
      ];
    }
  }

  public function getTaskResult() {
    // TODO: Implement getTaskResult() method.
  }
}
