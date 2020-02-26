<?php

namespace CreatyDev\Http\Api\Controllers\Audit;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Pa11y\Pa11y;
use Illuminate\Http\Request;

class AuditController extends Controller {
  public function create(Request $request, Pa11y $pa11y) {
    $createResponse = $pa11y->createTask(request('url'));
    if (is_array($createResponse)) {
      return response()->json(
        ['message' => $createResponse['message']],
        $createResponse['status'],
        [],
        JSON_PRETTY_PRINT
      );
    } elseif ($createResponse->getStatusCode() !== 201) {
      return response()->json(
        ['message' => $createResponse->getBody()],
        $createResponse->getStatusCode(),
        [],
        JSON_PRETTY_PRINT
      );
    }

    $task = json_decode($createResponse->getBody());
    $runResponse = $pa11y->runTask($task->id);

    if (is_array($runResponse)) {
      return response()->json(
        ['message' => $runResponse['message']],
        $runResponse['status'],
        [],
        JSON_PRETTY_PRINT
      );
    } elseif ($runResponse->getStatusCode() !== 202) {
      return response()->json(
        ['message' => $runResponse->getBody()],
        $runResponse->getStatusCode(),
        [],
        JSON_PRETTY_PRINT
      );
    }

    //    return response()->json($runResponse);
    return response()->json(
      ['message' => 'Audit created and running.', 'body' => $task],
      200,
      [],
      JSON_PRETTY_PRINT
    );
  }
  public function get(Request $request, Pa11y $pa11y) {
    $createResponse = $pa11y->createTask(request('url'));
    if (is_array($createResponse)) {
      return response()->json(
        ['message' => $createResponse['message']],
        $createResponse['status'],
        [],
        JSON_PRETTY_PRINT
      );
    } elseif ($createResponse->getStatusCode() !== 201) {
      return response()->json(
        ['message' => $createResponse->getBody()],
        $createResponse->getStatusCode(),
        [],
        JSON_PRETTY_PRINT
      );
    }

    $task = json_decode($createResponse->getBody());
    $runResponse = $pa11y->runTask($task->id);

    if (is_array($runResponse)) {
      return response()->json(
        ['message' => $runResponse['message']],
        $runResponse['status'],
        [],
        JSON_PRETTY_PRINT
      );
    } elseif ($runResponse->getStatusCode() !== 202) {
      return response()->json(
        ['message' => $runResponse->getBody()],
        $runResponse->getStatusCode(),
        [],
        JSON_PRETTY_PRINT
      );
    }

    //    return response()->json($runResponse);
    return response()->json(
      ['message' => 'Audit created and running.', 'body' => $task],
      200,
      [],
      JSON_PRETTY_PRINT
    );
  }

  public function results(Request $request, Pa11y $pa11y) {
    $response = $pa11y->getTaskAllResults(request('id'));
    if ($response->getStatusCode() !== 200) {
      return 'TODO: Failure message.';
    }
    $results = json_decode($response->getBody());

    //    return Response::json($data=[], $status=200, $headers=[], $options=JSON_PRETTY_PRINT);
    return response()->json(
      ['message' => 'Task results retrieved.', 'body' => $results],
      200,
      [],
      JSON_PRETTY_PRINT
    );
  }
}
