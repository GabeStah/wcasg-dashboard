<?php

namespace CreatyDev\Http\Api\Controllers\Configuration;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Exceptions\Api\Authorization\InvalidAuthorizationException;
use CreatyDev\Domain\Configuration\Models\Configuration;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Http\Request;

class ConfigurationController extends Controller {
  public function update(Request $request) {
    $user = User::whereRememberToken(request('token'))->first();

    if (!$user || !$user->isAdmin()) {
      throw new InvalidAuthorizationException();
    }

    $configuration = Configuration::byName($request->json('name'));
    if ($configuration) {
      $configuration->data = $request->json('data');
      $configuration->save();
    } else {
      Configuration::create([
        'name' => $request->json('name'),
        'type' => 'html',
        'data' => $request->json('data')
      ]);
    }
  }
}
