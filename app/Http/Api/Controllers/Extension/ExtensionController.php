<?php

namespace CreatyDev\Http\Api\Controllers\Extension;

use CreatyDev\App\Api\ApiResponse;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Extensions\Models\Action;
use CreatyDev\Domain\Extensions\Models\Extension;
use CreatyDev\Domain\Extensions\Models\Predicate;
use CreatyDev\Domain\Sites\Models\Site;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use LZCompressor\LZString;

class ExtensionController extends Controller {
  public function create(Request $request) {
  }

  public function get(Request $request, Extension $extension) {
  }

  public function update(Request $request, Extension $extension) {
    $user = Auth::user();

    if (!request('fn')) {
      //      return new ApiResponse(['message' => 'updated'], 200);
      return new ApiResponse(
        ['message' => 'Invalid request.'],
        403,
        null,
        new Exception('Invalid request.')
      );
    }

    $site = Site::find(request('site_id'))->load('extensions');

    // Check if site belongs to user
    if (!$user->sites->contains($site)) {
      return new ApiResponse(
        ['message' => 'Unauthorized'],
        401,
        null,
        new Exception('Unauthorized request')
      );
    }

    $extensions = $site->extensions;

    // Check if object belongs to site
    if (request('type') === 'action') {
      $action = Action::find(request('id'));
      if (!$action) {
        return new ApiResponse(
          ['message' => 'Invalid request'],
          403,
          null,
          new Exception('Invalid request')
        );
      }

      foreach ($extensions as $extension) {
        if ($extension->actions->contains($action)) {
          // Update
          $action->function = LZString::compressToBase64(request('fn'));
          $action->save();

          return new ApiResponse(
            [
              'message' => 'Successful update!',
              'data' => $action
            ],
            200
          );
        }
      }

      // No match found
      return new ApiResponse(
        ['message' => 'Invalid request'],
        403,
        null,
        new Exception('Invalid request')
      );
    } elseif (request('type') === 'predicate') {
      $predicate = Predicate::find(request('id'));
      if (!$predicate) {
        return new ApiResponse(
          ['message' => 'Invalid request'],
          403,
          null,
          new Exception('Invalid request')
        );
      }

      foreach ($extensions as $extension) {
        if ($extension->predicates->contains($predicate)) {
          // Update
          $predicate->function = LZString::compressToBase64(request('fn'));
          $predicate->save();

          return new ApiResponse(
            [
              'message' => 'Successful update!',
              'data' => $predicate
            ],
            200
          );
        }
      }

      // No match found
      return new ApiResponse(
        ['message' => 'Invalid request'],
        403,
        null,
        new Exception('Invalid request')
      );
    }
  }
}
