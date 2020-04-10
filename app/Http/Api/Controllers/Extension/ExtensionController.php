<?php

namespace CreatyDev\Http\Api\Controllers\Extension;

use Carbon\Carbon;
use CreatyDev\App\Api\ApiResponse;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Exceptions\Api\Authorization\InvalidAuthorizationException;
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
  private function addActions(Extension $extension) {
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
  }

  private function addPredicates(Extension $extension) {
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
  }

  private function createImportedExtension() {
    $extension = Extension::create([
      'enabled' => true,
      'imported' => true,
      'name' => request('extension.name') ?? '',
      'description' => request('extension.description') ?? ''
    ]);

    $this->addActions($extension);
    $this->addPredicates($extension);

    $extension = Extension::find($extension->id);

    return new ApiResponse(
      [
        'message' => 'Extension added successfully!',
        'data' => $extension
      ],
      200
    );
  }

  private function createExtension(User $user) {
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

    $site
      ->extensions()
      ->attach($extension->id, ['enabled_at' => Carbon::now()]);

    $this->addActions($extension);
    $this->addPredicates($extension);

    $extension = $site->extensions()->find($extension->id);

    return new ApiResponse(
      [
        'message' => 'Extension added successfully!',
        'data' => $extension
      ],
      200
    );
  }

  private function deleteExtension(User $user) {
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

  private function deleteImportedExtension(Extension $extension) {
    $extension->delete();

    return new ApiResponse(
      [
        'message' => 'Extension successfully deleted.',
        'data' => null
      ],
      200
    );
  }

  private function disableExtension(User $user) {
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

  private function disableImportedExtension(Extension $extension) {
    $extension->update(['enabled' => false]);

    return new ApiResponse(
      [
        'message' => 'Extension successfully disabled.',
        'data' => compact('extension')
      ],
      200
    );
  }

  private function enableImportedExtension(Extension $extension) {
    $extension->update(['enabled' => true]);

    return new ApiResponse(
      [
        'message' => 'Extension successfully enabled.',
        'data' => compact('extension')
      ],
      200
    );
  }

  private function enableExtension(User $user) {
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

  public function admin(Request $request) {
    $user = Auth::user();

    if (!$user->isAdmin()) {
      throw new InvalidAuthorizationException();
    }

    if (request('type') === 'action' && $this->hasImportedParentExtension()) {
      return $this->updateImportedAction();
    } elseif (
      request('type') === 'predicate' &&
      $this->hasImportedParentExtension()
    ) {
      return $this->updateImportedPredicate();
    } elseif (request('type') === 'extension' && request('extension')) {
      if (request('extension.dirty')) {
        return $this->createImportedExtension();
      } else {
        $extension = Extension::findOrFail(request('extension.id'));

        if (!$extension) {
          return new ApiResponse(
            ['message' => 'Invalid request'],
            403,
            null,
            new Exception('Invalid request')
          );
        }

        if (request('action') === 'delete') {
          return $this->deleteImportedExtension($extension);
        } elseif (request('action') === 'enable') {
          return $this->enableImportedExtension($extension);
        } elseif (request('action') === 'disable') {
          return $this->disableImportedExtension($extension);
        }
      }
    }
  }

  public function update(Request $request) {
    $user = Auth::user();

    if (request('type') === 'action' && !$this->hasImportedParentExtension()) {
      return $this->updateAction($user);
    } elseif (
      request('type') === 'predicate' &&
      !$this->hasImportedParentExtension()
    ) {
      return $this->updatePredicate($user);
    } elseif (request('type') === 'extension' && request('extension')) {
      // Built-in update
      if (request('action') === 'delete') {
        return $this->deleteExtension($user);
      } elseif (request('action') === 'enable') {
        return $this->enableExtension($user);
      } elseif (request('action') === 'disable') {
        return $this->disableExtension($user);
      } elseif (request('extension.dirty')) {
        return $this->createExtension($user);
      }
    }
  }

  private function updateAction(User $user) {
    if (!request('fn')) {
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

  private function hasImportedParentExtension() {
    if (!request('fn')) {
      return new ApiResponse(
        ['message' => 'Invalid request.'],
        403,
        null,
        new Exception('Invalid request.')
      );
    }

    $object = null;

    if (request('type') === 'action') {
      $object = Action::findOrFail(request('id'));
    } elseif (request('type') === 'predicate') {
      $object = Predicate::findOrFail(request('id'));
    }

    if (!$object || !$object->extensions) {
      return false;
    }

    // Ensure action is related to imported extension
    $extensions = $object->extensions->where('imported', '=', true);
    if (!$extensions) {
      return false;
    }

    return true;
  }

  private function updateImportedAction() {
    if (!request('fn')) {
      return new ApiResponse(
        ['message' => 'Invalid request.'],
        403,
        null,
        new Exception('Invalid request.')
      );
    }

    $action = Action::findOrFail(request('id'));

    // Ensure action is related to imported extension
    $extensions = $action->extensions->where('imported', '=', true);
    if (!$extensions) {
      return new ApiResponse(
        ['message' => 'Invalid request'],
        403,
        null,
        new Exception('Invalid request')
      );
    }

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

  private function updateImportedPredicate() {
    if (!request('fn')) {
      return new ApiResponse(
        ['message' => 'Invalid request.'],
        403,
        null,
        new Exception('Invalid request.')
      );
    }

    $predicate = Predicate::findOrFail(request('id'));

    // Ensure predicate is related to imported extension
    $extensions = $predicate->extensions->where('imported', '=', true);
    if (!$extensions) {
      return new ApiResponse(
        ['message' => 'Invalid request'],
        403,
        null,
        new Exception('Invalid request')
      );
    }

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

  private function updatePredicate(User $user) {
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
