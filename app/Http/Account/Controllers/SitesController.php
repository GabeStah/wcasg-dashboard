<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Sites\Rules\DomainIsNotDuplicated;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
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
    $userId = Auth::id();
    $user = User::find($userId);

    $isSubscribed = $user->isSubscribed();

    $sites = $user->sites->sortBy('domain');

    return view('account.sites.index', [
      'sites' => $sites,
      'isSubscribed' => $isSubscribed
    ]);
  }

  public function create() {
    return view('account.sites.create');
  }

  public function statementShow($id) {
    $site = Site::findOrFail($id);
    $statement = $site->statement;
    $content = $statement->render($site);

    return view('account.sites.statement.show', [
      'site' => $site,
      'statement' => $statement,
      'content' => $content
    ]);
  }

  public function statementDownload($id, $type = 'html') {
    $site = Site::findOrFail($id);
    $statement = $site->statement;
    $content = $statement->render($site);

    switch ($type) {
      case 'text':
        return response()->streamDownload(function () use ($content) {
          echo strip_tags($content);
        }, "{$site->domain}-accessibility-statement.txt");
      default:
        return response()->streamDownload(function () use ($content) {
          echo $content;
        }, "{$site->domain}-accessibility-statement.html");
    }
  }

  public function statementEdit($id) {
    $site = Site::findOrFail($id);
    $statement = $site->statement;
    $content = $statement->render($site);

    $templateInstances = StatementTemplate::all();

    $templates = [];

    foreach ($templateInstances as $template) {
      array_push($templates, [
        'id' => $template->id,
        'content' => $statement->render($site, $template),
        'name' => $template->name
      ]);
    }

    return view('account.sites.statement.edit', [
      'content' => $content,
      'site' => $site,
      'statement' => $statement,
      'templates' => $templates
    ]);
  }

  /**
   * Update a statement.
   *
   * @param Request $request
   * @param         $id
   *
   * @return Factory|View|string
   */
  public function statementUpdate(Request $request, $id) {
    $request->validate([
      'template' => 'required|numeric',
      'config' => 'json'
    ]);

    $site = Site::findOrFail($id);
    $statement = $site->statement;

    if (request('config') && request('config') !== '') {
      $statement->config = json_decode(request('config'));
    }

    $statement->statement_template_id = request('template');

    $statement->save();

    return redirect()
      ->route('account.sites.statement.show', $site->id)
      ->with('success', __('controller.account.Site.Statement.update.success'));
  }

  public function store(Request $request) {
    $userId = Auth::id();
    $user = User::find($userId);

    request()->validate([
      'domain' => ['required', new DomainIsNotDuplicated($user)]
    ]);

    $subscription = $user->validSubscription();
    if (!$subscription) {
      // Redirect with error
      die('TODO: No subscription');
    }

    $site = new Site([
      'active' => request('active') ? true : false,
      'domain' => request('domain'),
      'subscription_id' => $subscription->id
    ]);

    $contextValidated = false;
    // Validate context if user can't ignore site limit and site is active
    if (!$user->hasPermissionTo('ignore-site-limit') && $site->active) {
      $plans = $user->plans->whereNotNull('context');
      // Find plan with site context
      foreach ($plans as $plan) {
        if ($plan->isContextValidated('site', 1, $user)) {
          $contextValidated = true;
          break;
        }
      }

      // If contextual plans exists, route based on validation.
      if ($plans->count() > 0 && !$contextValidated) {
        return redirect()
          ->route('account.sites.index')
          ->with(
            'error',
            __('controller.account.Site.create.error.too_many_sites')
          );
      }
    }

    $site->save();

    return redirect()
      ->route('account.sites.index', [
        'sites' => $user->sites,
        'isSubscribed' => $user->isSubscribed()
      ])
      ->with('success', __('controller.account.Site.create.success'));
  }

  /**
   * Edit a site.
   *
   * @param $id
   * @return Factory|View|string
   */
  public function edit($id) {
    $userId = Auth::id();
    $user = User::find($userId);
    $site = Site::find($id);

    return view('account.sites.edit', compact('site'));
  }

  /**
   * Delete a site.
   *
   * @param $id
   * @return Factory|View|string
   */
  public function delete($id) {
    $userId = Auth::id();
    $user = User::find($userId);
    $site = $user->sites()->findOrFail($id);

    $site->delete();

    return redirect()
      ->route('account.sites.index', [
        'sites' => $user->sites,
        'isSubscribed' => $user->isSubscribed()
      ])
      ->with('success', __('controller.account.Site.destroy.success'));
  }

  /**
   * Update a site.
   *
   * @param Request $request
   * @param $id
   * @return Factory|View|string
   */
  public function update(Request $request, $id) {
    $userId = Auth::id();
    $user = User::find($userId);
    $site = Site::find($id);

    $active = request('active') ? true : false;

    $contextValidated = false;
    // Check if user can ignore site limit, or if site is active check context restriction
    if (
      !$user->hasPermissionTo('ignore-site-limit') &&
      $active &&
      $active !== $site->active
    ) {
      $plans = $user->plans->whereNotNull('context');
      // Find plan with site context
      foreach ($plans as $plan) {
        if ($plan->isContextValidated('site', 1, $user)) {
          $contextValidated = true;
          break;
        }
      }

      if ($plans->count() > 0 && !$contextValidated) {
        return redirect()
          ->route('account.sites.index')
          ->with(
            'error',
            __('controller.account.Site.create.error.too_many_sites')
          );
      }
    }

    $site->active = $active;
    $site->domain = request('domain');
    $site->save();

    return redirect()
      ->route('account.sites.index', [
        'sites' => $user->sites,
        'isSubscribed' => $user->isSubscribed()
      ])
      ->with('success', __('controller.account.Site.update.success'));
  }
}
