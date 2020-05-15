<?php

namespace CreatyDev\Http\Admin\Controllers\Plan;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\JsonSchemaValidator\JsonSchemaValidatorService;
use CreatyDev\Domain\Coupon\Models\Coupon;
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
    'amount' => 'required|regex:/^\d+\.(\d{2})$/',
    'interval' => 'required',
    'teams_limit' => 'nullable|integer',
    'trial_period_days' => 'nullable|integer'
  ];

  const createValidationMessages = [
    'amount.regex' =>
      'The :attribute must be in decimal format with exactly two decimal places (e.g. 12.34, 10.00, etc).'
  ];

  const updateValidation = [
    'product_id' => 'required|starts_with:prod_',
    'nickname' => 'required|string',
    'teams_limit' => 'nullable|integer',
    'trial_period_days' => 'nullable|integer'
  ];

  private $validator;

  public function __construct(JsonSchemaValidatorService $validator) {
    $this->validator = $validator;
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

    $plans = Plan::paginate(config('app.pagination.quantity'));

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

    $restraintSchema = $this->validator->getRestraintSchema();

    // Get Coupon options
    $coupons = Coupon::all();
    $coupon_options = [['value' => false, 'text' => 'Select a Coupon']];
    foreach ($coupons->toArray() as $coupon) {
      array_push($coupon_options, [
        'value' => $coupon['id'],
        'text' => $coupon['id']
      ]);
    }

    // Get Product options
    $products = Stripe\Product::all(['limit' => 100]);
    $product_options = array_map(function ($product) {
      return ['value' => $product->id, 'text' => $product->name];
    }, $products->data);

    $rows = [
      [
        'field' => 'active',
        'title' => 'Active',
        'info_text' => __('admin.plan.active'),
        'type' => 'toggle'
      ],
      [
        'field' => 'visible',
        'title' => 'Visible',
        'info_text' => __('admin.plan.visible'),
        'type' => 'toggle'
      ],
      [
        'field' => 'product_id',
        'title' => 'Product*',
        'required' => true,
        'info_text' => __('admin.plan.product'),
        'type' => 'select',
        'options' => $product_options
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
        'placeholder' => 'Cost'
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
      ],
      [
        'field' => 'coupon_id',
        'title' => 'Coupon',
        'required' => false,
        'info_text' => __('admin.plan.coupon'),
        'type' => 'select',
        'options' => $coupon_options
      ]
    ];

    return view('admin.plans.create', [
      'rows' => $rows,
      'restraintSchema' => $restraintSchema
    ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param Request $request
   *
   * @return RedirectResponse|Response
   * @throws AuthorizationException
   * @throws ValidationException
   * @throws \Exception
   */
  public function store(Request $request) {
    $this->authorize('create', Plan::class);

    $this->validate(
      $request,
      self::createValidation,
      self::createValidationMessages
    );

    $plan = new Plan([
      'product_id' => $request->input('product_id'),
      'amount' => decimal_to_cents($request->input('amount')),
      'nickname' => $request->input('nickname'),
      'interval' => $request->input('interval'),
      'teams_enabled' => !empty($request->input('teams_enabled'))
        ? true
        : false,
      'teams_limit' => $request->input('teams_limit') ?? null,
      'active' => $request->input('active') ? true : false,
      'visible' => $request->input('visible') ? true : false,
      'trial_period_days' => $request->input('trial_period_days'),
      'coupon_id' => $request->input('coupon_id')
        ? $request->input('coupon_id')
        : null
    ]);

    if ($request->input('restraint_value')) {
      $context = $this->validator->createContext(
        'plan',
        (object) [
          'entity' => $request->input('restraint_entity'),
          'comparator' => $request->input('restraint_comparator'),
          'value' => $request->input('restraint_value')
        ]
      );

      if ($context) {
        $plan->context = $context;
      } else {
        return redirect()
          ->back()
          ->with('error', 'Invalid restraint settings.');
      }
    }

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

    $restraintSchema = $this->validator->getRestraintSchema();

    $plan = Plan::findOrFail($id);

    // Get Coupon options
    $coupons = Coupon::all();
    $coupon_options = [['value' => false, 'text' => 'Select a Coupon']];
    foreach ($coupons->toArray() as $coupon) {
      array_push($coupon_options, [
        'value' => $coupon['id'],
        'text' => $coupon['id']
      ]);
    }

    $products = Stripe\Product::all(['limit' => 100]);

    $rows = [
      [
        'field' => 'active',
        'title' => 'Active',
        'info_text' => __('admin.plan.active'),
        'type' => 'toggle'
      ],
      [
        'field' => 'visible',
        'title' => 'Visible',
        'info_text' => __('admin.plan.visible'),
        'type' => 'toggle'
      ],
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
      ],
      [
        'field' => 'coupon_id',
        'title' => 'Coupon',
        'required' => false,
        'info_text' => __('admin.plan.coupon'),
        'type' => 'select',
        'options' => $coupon_options
      ]
    ];

    $restraints = null;

    if (
      $plan->context &&
      $plan->context['plan'] &&
      $plan->context['plan']['restraints']
    ) {
      $restraints = $plan->context['plan']['restraints'];
    }

    return view('admin.plans.edit', [
      'plan' => $plan,
      'restraintSchema' => $restraintSchema,
      'restraints' => $restraints,
      'rows' => $rows
    ]);
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
      $context = null;
      if ($request->input('restraint_value')) {
        $context = $this->validator->createContext(
          'plan',
          (object) [
            'entity' => $request->input('restraint_entity'),
            'comparator' => $request->input('restraint_comparator'),
            'value' => $request->input('restraint_value')
          ]
        );

        if (!$context) {
          return redirect()
            ->back()
            ->with('error', 'Invalid restraint settings.');
        }
      }

      $plan->update([
        'nickname' => $request->input('nickname'),
        'teams_enabled' =>
          $request->input('teams_enabled') &&
          !empty($request->input('teams_limit')),
        'teams_limit' => $request->input('teams_limit') ?? null,
        'active' => $request->input('active') ? true : false,
        'visible' => $request->input('visible') ? true : false,
        'trial_period_days' => $request->input('trial_period_days'),
        'context' => $context,
        'coupon_id' => $request->input('coupon_id')
          ? $request->input('coupon_id')
          : null
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
