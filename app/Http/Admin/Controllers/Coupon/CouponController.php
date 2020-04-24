<?php

namespace CreatyDev\Http\Admin\Controllers\Coupon;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Coupon\Models\Coupon;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;
use Stripe;

class CouponController extends Controller {
  public function __construct() {
    Stripe\Stripe::setApiKey(config('services.stripe.secret'));
  }

  /**
   * Display a listing of the resource.
   *
   * @param Request $request
   * @return Response
   * @throws AuthorizationException
   */
  public function index(Request $request) {
    $coupons = Coupon::all();

    return view('admin.coupons.index', compact('coupons'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Application|Factory|View
   */
  public function create() {
    $rows = [
      [
        'field' => 'id',
        'title' => 'Id*',
        'required' => true,
        'info_text' => __('admin.coupon.id'),
        'placeholder' => '100_PERCENT_OFF_FIRST_MONTH'
      ],
      [
        'field' => 'name',
        'title' => 'Name*',
        'required' => true,
        'info_text' => __('admin.coupon.name'),
        'placeholder' => 'First Month Free'
      ],
      [
        'field' => 'percent_off',
        'title' => 'Percent Off*',
        'required' => true,
        'info_text' => __('admin.coupon.percent_off'),
        'placeholder' => '100'
      ],
      [
        'field' => 'duration',
        'title' => 'Duration*',
        'required' => true,
        'info_text' => __('admin.coupon.duration'),
        'type' => 'select',
        'default' => 'once',
        'options' => [
          [
            'value' => 'once',
            'text' => 'Once'
          ],
          [
            'value' => 'forever',
            'text' => 'Forever'
          ],
          [
            'value' => 'repeating',
            'text' => 'Repeating'
          ]
        ]
      ],
      [
        'field' => 'duration_in_months',
        'title' => 'Duration (in months)',
        'required' => false,
        'info_text' => __('admin.coupon.duration_in_months'),
        'default' => '1'
      ],
      [
        'field' => 'max_redemptions',
        'title' => 'Max Redemptions',
        'required' => false,
        'info_text' => __('admin.coupon.max_redemptions')
      ],
      [
        'field' => 'redeem_by',
        'title' => 'Redeem By',
        'required' => false,
        'info_text' => __('admin.coupon.redeem_by')
      ],
      [
        'field' => 'currency',
        'title' => 'Currency',
        'required' => false,
        'info_text' => __('admin.coupon.currency'),
        'type' => 'select',
        'default' => 'usd',
        'options' => [
          [
            'value' => 'usd',
            'text' => 'USD'
          ]
        ]
      ]
    ];

    return view('admin.coupons.create', compact('rows'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param Request $request
   * @return Response
   * @throws ValidationException
   */
  public function store(Request $request) {
    $this->validate($request, [
      'id' => 'required|string|max:50',
      'currency' => ['required', Rule::in(['usd'])],
      'duration' => ['required', Rule::in(['forever', 'once', 'repeating'])],
      'duration_in_months' => [
        'nullable',
        'integer',
        function ($attribute, $value, $fail) use ($request) {
          if ($request->input('duration') === 'once') {
            if (isset($value)) {
              $fail(
                "Duration (in months) cannot be set if Duration is set to 'once'."
              );
            }
          }
        }
      ],
      'max_redemptions' => 'nullable|integer',
      'name' => 'required|string',
      'percent_off' => 'required|integer|between:1,100',
      'redeem_by' => 'nullable|date|after:today'
    ]);

    // Create local
    $coupon = new Coupon($request->all());
    $coupon->save();

    return redirect(route('admin.coupons.index'))->with(
      'success',
      'The [' . $coupon->id . '] coupon has been created.'
    );
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param $id
   * @return Response
   */
  public function edit($id) {
    $coupon = Coupon::findOrFail($id);

    $rows = [
      [
        'field' => 'name',
        'title' => 'Name*',
        'required' => true,
        'info_text' => __('admin.coupon.name'),
        'placeholder' => 'First Month Free'
      ],
      [
        'field' => 'id',
        'title' => 'Id',
        'required' => true,
        'info_text' => __('admin.coupon.id'),
        'placeholder' => '100_PERCENT_OFF_FIRST_MONTH',
        'editable' => false
      ],
      [
        'field' => 'percent_off',
        'title' => 'Percent Off',
        'required' => true,
        'info_text' => __('admin.coupon.percent_off'),
        'placeholder' => '100',
        'editable' => false
      ],
      [
        'field' => 'duration',
        'title' => 'Duration',
        'required' => true,
        'info_text' => __('admin.coupon.duration'),
        'type' => 'select',
        'default' => 'once',
        'options' => [
          [
            'value' => 'once',
            'text' => 'Once'
          ],
          [
            'value' => 'forever',
            'text' => 'Forever'
          ],
          [
            'value' => 'repeating',
            'text' => 'Repeating'
          ]
        ],
        'editable' => false
      ],
      [
        'field' => 'duration_in_months',
        'title' => 'Duration (in months)',
        'required' => false,
        'info_text' => __('admin.coupon.duration_in_months'),
        'default' => '1',
        'editable' => false
      ],
      [
        'field' => 'max_redemptions',
        'title' => 'Max Redemptions',
        'required' => false,
        'info_text' => __('admin.coupon.max_redemptions'),
        'editable' => false
      ],
      [
        'field' => 'redeem_by',
        'title' => 'Redeem By',
        'required' => false,
        'info_text' => __('admin.coupon.redeem_by'),
        'editable' => false
      ],
      [
        'field' => 'currency',
        'title' => 'Currency',
        'required' => false,
        'info_text' => __('admin.coupon.currency'),
        'type' => 'select',
        'default' => 'usd',
        'options' => [
          [
            'value' => 'usd',
            'text' => 'USD'
          ]
        ],
        'editable' => false
      ]
    ];

    return view('admin.coupons.edit', ['coupon' => $coupon, 'rows' => $rows]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param Request $request
   * @param $id
   * @return Response
   * @throws ValidationException
   */
  public function update(Request $request, $id) {
    $coupon = Coupon::findOrFail($id);

    $this->validate($request, [
      'name' => 'required|string'
    ]);

    // Update local
    $coupon->name = $request->input('name');
    $coupon->save();

    return redirect(route('admin.coupons.index'))->with(
      'success',
      'The [' . $coupon->id . '] coupon has been updated.'
    );
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param $id
   * @return Response
   * @throws Exception
   */
  public function destroy($id) {
    $coupon = Coupon::findOrFail($id);

    // Delete local
    $coupon->delete();

    return redirect(route('admin.coupons.index'))->with(
      'success',
      'The [' . $coupon->id . '] coupon was deleted.'
    );
  }
}
