<?php

namespace CreatyDev\App\Pa11y;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

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
   * @param string $url
   *
   * @return array|mixed
   */
  public function createTask(string $url) {
    $response = $this->client->request(
      'POST',
      config('services.pa11y.endpoint') . 'tasks',
      [
        'form_params' => [
          'name' => 'Test Task',
          'url' => $url,
          'standard' => 'WCAG2AA'
        ]
      ]
    );

    return json_decode($response->getBody());
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
    $response = $this->client->request(
      'POST',
      config('services.pa11y.endpoint') . "tasks/{$id}/run"
    );
    return json_decode($response->getBody());
  }

  public function getTaskAllResults(string $id) {
    $response = $this->client->request(
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

    if ($response->getStatusCode() !== 200) {
      throw new ClientException('Task results could not be retrieved.');
    }

    $results = json_decode($response->getBody());
    // Return first element
    return $results[0];
  }

  public function getTaskResult() {
    // TODO: Implement getTaskResult() method.
  }
}
