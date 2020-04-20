<?php

namespace CreatyDev\Http\Admin\Controllers\Statement;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Setting;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class StatementTemplateController extends Controller {
  public function index() {
    $templates = StatementTemplate::with('sites')->paginate(
      config('app.pagination.quantity')
    );

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
    try {
      $template = StatementTemplate::findOrFail($id);
      $template->delete();

      return redirect()
        ->back()
        ->with(
          'success',
          __('controller.admin.StatementTemplate.destroy.success')
        );
    } catch (QueryException $e) {
      if (strpos($e->getMessage(), '.`settings`') === false) {
        return redirect()
          ->back()
          ->with(
            'error',
            __('controller.admin.StatementTemplate.destroy.fail.in_use')
          );
      } else {
        return redirect()
          ->back()
          ->with(
            'error',
            __('controller.admin.StatementTemplate.destroy.fail.is_default')
          );
      }
    }
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
      ->with(
        'success',
        __('controller.admin.StatementTemplate.create.success')
      );
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
      ->with(
        'success',
        __('controller.admin.StatementTemplate.update.success')
      );
  }
}
