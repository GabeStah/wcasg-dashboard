<?php

use CreatyDev\App\JsonSchemaValidator\JsonSchemaValidatorService;
use CreatyDev\Domain\Coupon\Models\Coupon;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Stripe\Product as StripeProduct;

class PlanTableSeeder extends Seeder {
  protected $validatorService;
  public function __construct(
    JsonSchemaValidatorService $jsonSchemaValidatorService
  ) {
    $this->validatorService = app(JsonSchemaValidatorService::class);
  }

  public function run() {
    // Create Product
    $stripeProduct = StripeProduct::create([
      'name' => 'Widget Service',
      'description' =>
        'WCASG Widget service provides state of the art accessibility support, government compliance, and user-defined customization for your site.',
      'statement_descriptor' => 'Widget Service',
      'unit_label' => 'site'
    ]);

    $plans = [
      [
        'unit_count' => 1,
        'interval' => 'month',
        'amount' => 10 * 100,
        'active' => true,
        'coupon_id' => Coupon::create([
          'id' => 'ALPHA_100_OFF_3_MONTH',
          'currency' => 'usd',
          'duration' => 'repeating',
          'duration_in_months' => 3,
          'name' => 'First 3 Months Free',
          'percent_off' => 100.0,
          'valid' => true
        ])->id
      ],
      [
        'unit_count' => 5,
        'active' => false,
        'interval' => 'month',
        'amount' => 10 * 100 * 5
      ],
      [
        'unit_count' => 15,
        'interval' => 'month',
        'active' => false,
        'amount' => 10 * 100 * 15,
        'coupon_id' => Coupon::create([
          'id' => 'EARLY_ADOPTER_20_OFF_FOREVER',
          'currency' => 'usd',
          'duration' => 'forever',
          'name' => 'Early Bird, 20% Off Forever',
          'percent_off' => 20.0,
          'valid' => true
        ])->id
      ],
      [
        'unit_count' => 25,
        'active' => false,
        'interval' => 'month',
        'amount' => 10 * 100 * 25
      ]
    ];

    foreach ($plans as $plan) {
      $data = [
        'amount' => $plan['amount'],
        'context' => $this->validatorService->createContext(
          'plan',
          (object) [
            'entity' => 'site',
            'comparator' => '<=',
            'value' => $plan['unit_count']
          ]
        ),
        'currency' => 'usd',
        'interval' => $plan['interval'],
        'nickname' =>
          $plan['unit_count'] . ' Sites per ' . Str::camel($plan['interval']),
        'active' => $plan['active'],
        'teams_enabled' => false,
        'teams_limit' => 0,
        'trial_period_days' => 0,
        'product_id' => $stripeProduct->id,
        'coupon_id' => $plan['coupon_id'] ?? null
      ];

      // Apply coupon to first
      //      if ($i === 0) {
      //        $coupon = Coupon::first();
      //        $data['coupon_id'] = $coupon->id;
      //      } elseif ($i === 2) {
      //        $coupon = Coupon::all()->random();
      //        $data['coupon_id'] = $coupon->id;
      //      }

      // Plan
      factory(Plan::class)->create($data);
    }
    //
    //    for ($i = 0; $i <= 2; $i++) {
    //      $unit_count = ($i + 1) * 5;
    //      $data = [
    //        // $1.00 per site
    //        'amount' => 100 * $unit_count,
    //        'context' => $this->validatorService->createContext(
    //          'plan',
    //          (object) [
    //            'entity' => 'site',
    //            'comparator' => '<=',
    //            'value' => $unit_count
    //          ]
    //        ),
    //        'currency' => 'usd',
    //        'interval' => 'month',
    //        'nickname' => "$unit_count Sites per Month",
    //        'active' => true,
    //        'teams_enabled' => false,
    //        'teams_limit' => 0,
    //        'trial_period_days' => 28,
    //        'product_id' => $stripeProduct->id
    //      ];
    //
    //      // Apply coupon to first
    //      if ($i === 0) {
    //        $coupon = Coupon::first();
    //        $data['coupon_id'] = $coupon->id;
    //      } elseif ($i === 2) {
    //        $coupon = Coupon::all()->random();
    //        $data['coupon_id'] = $coupon->id;
    //      }
    //
    //      // Plan
    //      $plan = factory(Plan::class)->create($data);
    //    }
  }
}
