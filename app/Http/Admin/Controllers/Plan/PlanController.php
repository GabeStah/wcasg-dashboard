<?php

namespace CreatyDev\Http\Admin\Controllers\Plan;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Http\Request;

use Stripe;
use Doctrine\DBAL\Schema\View;

class PlanController extends Controller {
  public function __construct() {
    Stripe\Stripe::setApiKey(config('services.stripe.secret'));
  }

  /**
   * Display a listing of the resource.
   *
   * @param Request $request
   * @return \Illuminate\Http\Response
   * @throws \Illuminate\Auth\Access\AuthorizationException
   */
  public function index(Request $request) {
    $this->authorize('create', Plan::class);

    $plans = Plan::all();

    return view('admin.plans.index', compact('plans'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create() {
    $this->authorize('create', Plan::class);

    $products = Stripe\Product::all();

    return view('admin.plans.create', compact('products'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request) {
    $this->authorize('create', Plan::class);

    $this->validate($request, [
      'nickname' => 'required',
      'amount' => 'required',
      'interval' => 'required'
    ]);
    $team_enable = !empty($request->input('teams_limit')) ? 1 : 0;
    $teams_limit = !empty($request->input('teams_limit'))
      ? $request->input('teams_limit')
      : null;
    $amount = (float) $request->input('amount') * 100;

    //    $stripePlan = \Stripe\Plan::create([
    //      'amount' => $price,
    //      'interval' => $request->input('interval'),
    //      'product' => $request->get('stripe_product_id'),
    //      'currency' => 'usd',
    //      'trial_period_days' => $request->input('trial'),
    //      'nickname' => $request->input('name')
    //    ]);

    $plan = new Plan([
      'product_id' => $request->input('product_id'),
      'amount' => $amount,
      'nickname' => $request->input('nickname'),
      'interval' => $request->input('interval'),
      'teams_enabled' => $team_enable,
      'teams_limit' => $teams_limit,
      'active' => 1,
      'trial_period_days' => $request->input('trial')
    ]);

    $plan->save();

    return redirect()
      ->back()
      ->with('status', 'Your plan has been created.');
  }

  /**
   * Display the specified resource.
   *
   * @param  \CreatyDev\Domain\Users\Models\Plan $plan
   * @return \Illuminate\Http\Response
   */
  public function show(Plan $plan) {
    $this->authorize('view', $plan);

    return view('admin.plans.show');
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \CreatyDev\Domain\Users\Models\Plan $plan
   * @return \Illuminate\Http\Response
   */
  public function edit($id) {
    $this->authorize('update', Plan::class);

    $plan = Plan::findOrFail($id);

    return view('admin.plans.edit', compact('plan', $plan));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \CreatyDev\Domain\Users\Models\Plan $plan
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id) {
    $this->authorize('update', Plan::class);

    $this->validate($request, [
      'name' => 'required',
      'amount' => 'required',
      'interval' => 'required'
    ]);

    $plan = Plan::findOrFail($id);

    $team_enable = !empty($request->input('teams_limit')) ? 1 : 0;
    $teams_limit = !empty($request->input('teams_limit'))
      ? $request->input('teams_limit')
      : null;
    $amount = (float) $request->input('amount') * 100;
    // Delete the plan on stripe
    $stripe_plan = \Stripe\Plan::retrieve($plan->stripe_plan_id);
    $stripe_plan->delete();
    // Recrete a new plan on stripe
    //    \Stripe\Plan::create([
    //      'amount' => $price,
    //      'interval' => $request->input('interval'),
    //      'product' => [
    //        'name' => $request->input('name')
    //      ],
    //      'currency' => 'usd',
    //      'id' => $stripe_plan_id,
    //      'trial_period_days' => $request->input('trial')
    //    ]);

    $plan->product_id = $request->input('product_id');
    $plan->nickname = $request->input('name');
    $plan->amount = $amount;
    $plan->interval = $request->input('interval');
    $plan->teams_enabled = $team_enable;
    $plan->teams_limit = $teams_limit;
    $plan->active = 1;
    $plan->trial_period_days = $request->input('trial');
    $plan->save();

    return redirect()
      ->back()
      ->with('status', 'Your plan has been updated.');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \CreatyDev\Domain\Users\Models\Plan $plan
   * @return \Illuminate\Http\Response
   */
  public function destroy($id) {
    $this->authorize('delete', Plan::class);
    $plan = Plan::findOrFail($id);

    $stripe_plan = \Stripe\Plan::retrieve($plan->id);
    $stripe_plan->delete();

    // Delete the plan on the database
    $plan->delete();
    return redirect()
      ->back()
      ->with('status', 'Your plan has been deleted.');
  }
}
