<?php

namespace CreatyDev\Http\Account\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
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
    try {
      $userId = Auth::id();
      $user = User::find($userId);

      $isSubscribed = $user->isSubscribed();

      $sites = $user->sites->sortBy('domain');

      return view('account.sites.index', [
        'sites' => $sites,
        'isSubscribed' => $isSubscribed
      ]);
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

  public function store() {
    try {
      $userId = Auth::id();
      $user = User::find($userId);

      request()->validate([
        'domain' => 'required'
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

      $site->save();

      return view('account.sites.index', [
        'sites' => $user->sites,
        'isSubscribed' => $user->isSubscribed()
      ])->with('success', __('controller.account.Site.create.success'));
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
   * Delete a site.
   *
   * @param $id
   * @return Factory|View|string
   */
  public function delete($id) {
    try {
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

      return redirect()
        ->route('account.sites.index', [
          'sites' => $user->sites,
          'isSubscribed' => $user->isSubscribed()
        ])
        ->with('success', __('controller.account.Site.update.success'));
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }
}
