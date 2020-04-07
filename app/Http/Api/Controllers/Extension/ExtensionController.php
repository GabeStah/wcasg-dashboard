<?php

namespace CreatyDev\Http\Api\Controllers\Extension;

use Carbon\Carbon;
use CreatyDev\App\Api\ApiResponse;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Extensions\Models\Action;
use CreatyDev\Domain\Extensions\Models\Extension;
use CreatyDev\Domain\Extensions\Models\Predicate;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Users\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use LZCompressor\LZString;

class ExtensionController extends Controller {
  private function createExtension(Request $request, User $user) {
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

    $extension = Extension::create([
      'enabled' => true,
      'name' => request('extension.name') ?? '',
      'description' => request('extension.description') ?? ''
    ]);

    //    $request->validate()
    $site
      ->extensions()
      ->attach($extension->id, ['enabled_at' => Carbon::now()]);

    // If action
    $actions = request('extension.actions');
    if ($actions) {
      foreach ($actions as $action) {
        $obj = [];
        $obj['name'] = $action['name'] ?? '';
        if (isset($action['fn'])) {
          $obj['function'] = $action['fn'];
        }
        $extension->actions()->create($obj);
      }
    }

    $predicates = request('extension.predicates');
    if ($predicates) {
      foreach ($predicates as $predicate) {
        $obj = [];
        $obj['name'] = $predicate['name'] ?? '';
        if (isset($predicate['fn'])) {
          $obj['function'] = $predicate['fn'];
        }
        $extension->predicates()->create($obj);
      }
    }

    $extension = $site->extensions()->find($extension->id);

    return new ApiResponse(
      [
        'message' => 'Extension added successfully!',
        'data' => $extension
      ],
      200
    );
  }

  private function disableExtension(Request $request, User $user) {
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

    $extension = Extension::findOrFail(request('extension.id'));

    if (!$extension) {
      return new ApiResponse(
        ['message' => 'Invalid request'],
        403,
        null,
        new Exception('Invalid request')
      );
    }

    $site
      ->extensions()
      ->updateExistingPivot($extension, ['enabled_at' => null]);

    $extension = $site->extensions()->find(request('extension.id'));

    return new ApiResponse(
      [
        'message' => 'Extension successfully deleted.',
        'data' => compact('extension')
      ],
      200
    );
  }

  private function enableExtension(Request $request, User $user) {
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

    //    $extension = Extension::findOrFail(request('extension.id'));
    $extension = $site->extensions->find(request('extension.id'));

    if (!$extension) {
      return new ApiResponse(
        ['message' => 'Invalid request'],
        403,
        null,
        new Exception('Invalid request')
      );
    }

    $site
      ->extensions()
      ->updateExistingPivot($extension, ['enabled_at' => Carbon::now()]);

    $extension = $site->extensions()->find(request('extension.id'));

    return new ApiResponse(
      [
        'message' => 'Extension successfully deleted.',
        'data' => compact('extension')
      ],
      200
    );
  }

  private function deleteExtension(Request $request, User $user) {
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

    $extension = Extension::findOrFail(request('extension.id'));

    if (!$extension) {
      return new ApiResponse(
        ['message' => 'Invalid request'],
        403,
        null,
        new Exception('Invalid request')
      );
    }

    $extension->delete();

    return new ApiResponse(
      [
        'message' => 'Extension successfully deleted.',
        'data' => null
      ],
      200
    );
  }

  public function update(Request $request, Extension $extension) {
    $user = Auth::user();

    if (request('type') === 'action') {
      return $this->updateAction($request, $extension, $user);
    } elseif (request('type') === 'predicate') {
      return $this->updatePredicate($request, $extension, $user);
    } elseif (request('type') === 'extension') {
      if (request('extension')) {
        if (request('action') === 'delete') {
          return $this->deleteExtension($request, $user);
        } elseif (request('action') === 'enable') {
          return $this->enableExtension($request, $user);
        } elseif (request('action') === 'disable') {
          return $this->disableExtension($request, $user);
        } elseif (request('extension')['dirty']) {
          return $this->createExtension($request, $user);
        }
      }
    }
  }

  private function updateAction(
    Request $request,
    Extension $extension,
    User $user
  ) {
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
  }

  private function updatePredicate(
    Request $request,
    Extension $extension,
    User $user
  ) {
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
