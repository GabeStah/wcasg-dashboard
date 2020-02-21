<?php

namespace CreatyDev\Http\Admin\Controllers\Statement;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\Statement;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class StatementController extends Controller {
  public function index() {
    $statements = Statement::with(['statementTemplate', 'sites'])
      ->get()
      ->sortBy('updated_at');

    return view('admin.statements.index', compact('statements'));
  }

  public function create() {
    return view('admin.statements.create');
  }

  public function destroy($id) {
    $statement = Statement::findOrFail($id);
    $statement->delete();
    $statements = Statement::all()->sortBy('updated_at');
    return view('admin.statements.index', compact('statements'))->with(
      'status',
      __('controller.admin.Statement.destroy.success')
    );
  }

  public function edit($id) {
    $statement = Statement::findOrFail($id);
    $templates = StatementTemplate::all();

    return view('admin.statements.edit', [
      'statement' => $statement,
      'templates' => $templates
    ]);
  }

  public function show($id) {
    $statement = Statement::findOrFail($id);
    $content = $statement->content;

    return view('admin.statements.show', [
      'statement' => $statement,
      'content' => $content
    ]);
  }

  public function store() {
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
    ])->with('success', __('controller.admin.Statement.create.success'));
  }

  public function update(Request $request, $id) {
    $request->validate([
      'config' => 'json',
      'template' => 'required|numeric'
    ]);

    $statement = Statement::findOrFail($id);

    $statement->update([
      'config' => json_decode(request('config')),
      'statement_template_id' => request('template')
    ]);

    return redirect()
      ->route('admin.statements.show', $id)
      ->with('success', __('controller.admin.Statement.update.success'));
  }
}
