<?php

namespace CreatyDev\Http\Admin\Controllers\Statement;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Setting;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class StatementTemplateController extends Controller {
  public function index() {
    $templates = StatementTemplate::with('sites')
      ->get()
      ->sortByDesc('updated_at');

    $settings = Setting::first();

    return view('admin.statement-templates.index', [
      'templates' => $templates,
      'settings' => $settings
    ]);
  }

  public function create() {
    $initial_content = app('files')->get(
      resource_path('assets/templates/default.html')
    );
    return view('admin.statement-templates.create', [
      'initial_content' => $initial_content
    ]);
  }

  public function destroy($id) {
    $template = StatementTemplate::findOrFail($id);
    $template->delete();
    $templates = StatementTemplate::all()->sortByDesc('updated_at');
    return redirect(
      'admin.statement-templates.index',
      compact('templates')
    )->with('status', 'The template has been deleted.');
  }

  public function edit($id) {
    $template = StatementTemplate::findOrFail($id);

    $settings = Setting::first();

    return view('admin.statement-templates.edit', [
      'template' => $template,
      'settings' => $settings
    ]);
  }

  public function show($id) {
    $template = StatementTemplate::findOrFail($id);

    return view('admin.statement-templates.show', compact('template'));
  }

  public function store(Request $request) {
    $request->validate([
      'content' => 'required',
      'default_config' => 'required|json',
      'name' => 'required'
    ]);

    $template = StatementTemplate::create([
      'content' => request('content'),
      'default_config' => json_decode(request('default_config')),
      'name' => request('name')
    ]);

    // Update default setting.
    if (request('is_default')) {
      Setting::first()->update([
        'default_statement_template' => $template->id
      ]);
    }

    return redirect()
      ->route('admin.statement-templates.show', $template->id)
      ->with('status', 'Template created.');
  }

  public function update(Request $request, $id) {
    $request->validate([
      'content' => 'required',
      'default_config' => 'required|json'
    ]);

    $template = StatementTemplate::findOrFail($id);

    $template->update([
      'content' => request('content'),
      'default_config' => json_decode(request('default_config')),
      'name' => request('name')
    ]);

    // Update default setting.
    if (request('is_default')) {
      Setting::first()->update([
        'default_statement_template' => $id
      ]);
    }

    return redirect()
      ->route('admin.statement-templates.show', $id)
      ->with('status', 'Template updated.');
  }
}
