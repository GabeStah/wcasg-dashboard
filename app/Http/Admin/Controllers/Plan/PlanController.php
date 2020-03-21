<?php

namespace CreatyDev\Http\Admin\Controllers\Plan;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;
use Stripe;

class PlanController extends Controller {
  const createValidation = [
    'product_id' => 'required|starts_with:prod_',
    'nickname' => 'required|string',
    'amount' => 'required|integer',
    'interval' => 'required',
    'teams_limit' => 'nullable|integer',
    'trial_period_days' => 'nullable|integer'
  ];

  const updateValidation = [
    'product_id' => 'required|starts_with:prod_',
    'nickname' => 'required|string',
    'teams_limit' => 'nullable|integer',
    'trial_period_days' => 'nullable|integer'
  ];

  public function __construct() {
    Stripe\Stripe::setApiKey(config('services.stripe.secret'));
  }

  /**
   * Display a listing of the resource.
   *
   * @param Request $request
   *
   * @return Factory|Response|View
   * @throws AuthorizationException
   * @throws Stripe\Error\Api
   */
  public function index(Request $request) {
    $this->authorize('create', Plan::class);

    $plans = Plan::all();

    $stripeProducts = Stripe\Product::all(['limit' => 100]);

    $products = [];

    foreach ($stripeProducts->data as $product) {
      $products[$product->id] = $product;
    }

    return view('admin.plans.index', [
      'plans' => $plans,
      'products' => $products
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Factory|Response|View
   * @throws AuthorizationException
   * @throws Stripe\Error\Api
   */
  public function create() {
    $this->authorize('create', Plan::class);

    $products = Stripe\Product::all();

    $rows = [
      [
        'field' => 'product_id',
        'title' => 'Product*',
        'required' => true,
        'info_text' => __('admin.plan.product'),
        'type' => 'select',
        'options' => array_map(function ($product) {
          return ['value' => $product->id, 'text' => $product->name];
        }, $products->data)
      ],
      [
        'field' => 'nickname',
        'title' => 'Name*',
        'required' => true
      ],
      [
        'field' => 'amount',
        'title' => 'Amount*',
        'required' => true,
        'info_text' => __('admin.plan.amount'),
        'placeholder' => 'Cost (in cents)'
      ],
      [
        'field' => 'trial_period_days',
        'title' => 'Trial Period',
        'required' => false,
        'info_text' => __('admin.plan.trial_period_days')
      ],
      [
        'field' => 'interval',
        'title' => 'Interval',
        'info_text' => __('admin.plan.interval'),
        'type' => 'select',
        'default' => 'month',
        'options' => [
          [
            'value' => 'day',
            'text' => 'Day'
          ],
          [
            'value' => 'week',
            'text' => 'Week'
          ],
          [
            'value' => 'month',
            'text' => 'Month'
          ],
          [
            'value' => 'year',
            'text' => 'Year'
          ]
        ]
      ]
    ];

    return view('admin.plans.create', compact('rows'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param Request $request
   *
   * @return RedirectResponse|Response
   * @throws AuthorizationException
   * @throws ValidationException
   */
  public function store(Request $request) {
    $this->authorize('create', Plan::class);

    $this->validate($request, self::createValidation);

    $plan = new Plan([
      'product_id' => $request->input('product_id'),
      'amount' => $request->input('amount'),
      'nickname' => $request->input('nickname'),
      'interval' => $request->input('interval'),
      'teams_enabled' => !empty($request->input('teams_enabled'))
        ? true
        : false,
      'teams_limit' => $request->input('teams_limit') ?? null,
      'active' => true,
      'trial_period_days' => $request->input('trial_period_days')
    ]);

    $plan->save();

    return redirect()
      ->back()
      ->with('status', 'Your plan has been created.');
  }

  /**
   * Display the specified resource.
   *
   * @param Plan $plan
   *
   * @return Factory|Response|View
   * @throws AuthorizationException
   */
  public function show(Plan $plan) {
    $this->authorize('view', $plan);

    return view('admin.plans.show');
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @see https://stripe.com/docs/api/plans/update
   *
   * @param $id
   *
   * @return Factory|Response|View
   * @throws Stripe\Error\Api
   * @throws AuthorizationException
   */
  public function edit($id) {
    $this->authorize('update', Plan::class);

    $plan = Plan::findOrFail($id);

    $products = Stripe\Product::all();

    $rows = [
      [
        'field' => 'product_id',
        'title' => 'Product*',
        'required' => true,
        'info_text' => __('admin.plan.product'),
        'type' => 'select',
        'options' => array_map(function ($product) use ($plan) {
          return [
            'value' => $product->id,
            'text' => $product->name
          ];
        }, $products->data)
      ],
      [
        'field' => 'nickname',
        'title' => 'Name*',
        'required' => true
      ],
      [
        'field' => 'trial_period_days',
        'title' => 'Trial Period',
        'required' => false,
        'info_text' => __('admin.plan.trial_period_days')
      ]
    ];

    return view('admin.plans.edit', ['plan' => $plan, 'rows' => $rows]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @see https://stripe.com/docs/api/plans/update
   *
   * @param Request $request
   * @param string $id
   *
   * @return RedirectResponse|Response
   * @throws AuthorizationException
   * @throws ValidationException
   */
  public function update(Request $request, string $id) {
    $this->authorize('update', Plan::class);

    $this->validate($request, self::updateValidation);

    $plan = Plan::findOrFail($id);

    // Stripe does not allow changing other attributes when updating the product_id.
    // Perform either product only or other attribute update.
    if ($request->input('product_id') !== $plan->product_id) {
      $plan->update([
        'product_id' => $request->input('product_id')
      ]);
      return redirect()
        ->back()
        ->with('success', 'The plan\'s product has been changed.');
    } else {
      $plan->update([
        'nickname' => $request->input('nickname'),
        'teams_enabled' =>
          $request->input('teams_enabled') &&
          !empty($request->input('teams_limit'))
            ? true
            : false,
        'teams_limit' => $request->input('teams_limit') ?? null,
        'active' => !empty($request->input('active'))
          ? $request->input('active')
          : true,
        'trial_period_days' => $request->input('trial_period_days')
      ]);
      return redirect()
        ->back()
        ->with('success', 'The plan settings have been updated.');
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param $id
   *
   * @return RedirectResponse|Response
   * @throws AuthorizationException
   */
  public function destroy($id) {
    $this->authorize('delete', Plan::class);
    $plan = Plan::findOrFail($id);

    // Delete the plan on the database
    $plan->delete();
    return redirect()
      ->back()
      ->with('status', 'Your plan has been deleted.');
  }
}
