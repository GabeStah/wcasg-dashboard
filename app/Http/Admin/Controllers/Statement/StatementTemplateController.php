<?php

namespace CreatyDev\Http\Admin\Controllers\Statement;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Statements\Models\StatementTemplate;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Stripe;

class StatementTemplateController extends Controller {
  public function __construct() {
    Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
  }

  /**
   * View all sites.
   *
   * @return Factory|View|string
   */
  public function index() {
    try {
      $templates = StatementTemplate::all()->sortBy('updated_at');

      return view('admin.statement-templates.index', compact('templates'));
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

  public function destroy($id) {
    try {
      $template = StatementTemplate::findOrFail($id);
      $template->delete();
      $templates = StatementTemplate::all()->sortBy('updated_at');
      return view(
        'admin.statement-templates.index',
        compact('templates')
      )->with('status', 'The Statement Template has been deleted.');
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
      ]);
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

      return redirect()->route('account.sites.index', [
        'sites' => $user->sites,
        'isSubscribed' => $user->isSubscribed()
      ]);
    } catch (\Exception $ex) {
      return $ex->getMessage();
    }
  }

  //  /**
  //   * Update the specified resource in storage.
  //   *
  //   * @param  \Illuminate\Http\Request $request
  //   * @param  \CreatyDev\Domain\Users\Models\Coupon $plan
  //   * @return Response
  //   */
  //  public function update(Request $request, $id) {
  //    // $this->authorize('update', Coupon::class);
  //
  //    // Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
  //
  //    $this->validate($request, [
  //      'name' => 'required',
  //      'price' => 'required',
  //      'interval' => 'required'
  //    ]);
  //
  //    return redirect()
  //      ->back()
  //      ->with('status', 'Your plan has been updated.');
  //  }
  //
  //  /**
  //   * Remove the specified resource from storage.
  //   *
  //   * @param  \CreatyDev\Domain\Users\Models\Coupon $plan
  //   * @return Response
  //   */
  //  public function destroy($id) {
  //    $this->authorize('delete', Coupon::class);
  //    $plan = Coupon::findOrFail($id);
  //
  //    $stripe_plan = \Stripe\Coupon::retrieve($plan->gateway_id);
  //    $stripe_plan->delete();
  //
  //    // Delete the plan on the database
  //    $plan->delete();
  //    return redirect()
  //      ->back()
  //      ->with('status', 'Your plan has been deleted.');
  //  }
}
