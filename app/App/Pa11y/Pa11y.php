<?php

namespace CreatyDev\App\Pa11y;

/**
 * Interface Pa11y
 *
 * @see https://github.com/pa11y/pa11y-webservice/wiki/Web-Service-Endpoints
 * @package CreatyDev\App\Pa11y
 */
interface Pa11y {
  public function createTask(string $url);
  public function getTasks();

  /**
   * Get results for all of the tasks in the application.
   * @return mixed
   */
  public function getAllTasksAllResults();
  public function getTask();
  public function editTask();
  public function deleteTask();
  public function runTask(string $id);
  public function getTaskAllResults(string $id);
  public function getTaskResult();
}
