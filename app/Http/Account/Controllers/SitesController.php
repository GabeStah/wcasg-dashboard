<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class SitesController extends Controller {
  /**
   * View all sites.
   *
   * @return Factory|View|string
   */
  public function index() {
    try {
      $userId = Auth::id();
      $user = User::find($userId);

      $sites = $user->sites->sortBy('domain');

      return view('account.sites.index', compact('sites'));
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }

  public function create() {
    try {
      return view('account.sites.create');
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }

  public function store() {
    try {
      $userId = Auth::id();
      $user = User::find($userId);

      request()->validate([
        'domain' => 'required'
      ]);

      $subscription = $user->subscription();
      if (!$subscription || !$subscription->valid()) {
        // Redirect with error
        die('TODO: No subscription');
      }

      $site = new Site([
        'active' => request('active') ? true : false,
        'domain' => request('domain'),
        'subscription_id' => $subscription
      ]);

      $site->save();

      return view('account.sites.index');
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }

  /**
   * Edit a site.
   *
   * @param $id
   * @return Factory|View|string
   */
  public function edit($id) {
    try {
      $userId = Auth::id();
      $user = User::find($userId);
      $site = Site::find($id);

      return view('account.sites.edit', compact('site'));
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }

  /**
   * Update a site.
   *
   * @param Request $request
   * @param $id
   * @return Factory|View|string
   */
  public function update(Request $request, $id) {
    try {
      $userId = Auth::id();
      $user = User::find($userId);
      $site = Site::find($id);

      $site->active = request('active') ? true : false;

      $site->domain = request('domain');
      $site->save();

      return redirect()->route('account.sites.index');
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }
}
