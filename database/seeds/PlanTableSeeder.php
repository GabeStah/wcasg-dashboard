<?php

use CreatyDev\App\JsonSchemaValidator\JsonSchemaValidatorService;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Seeder;
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

    for ($i = 0; $i <= 3; $i++) {
      $unit_count = ($i + 1) * 5;
      $data = [
        // $1.00 per site
        'amount' => 100 * $unit_count,
        'context' => $this->validatorService->createContext(
          'plan',
          (object) [
            'entity' => 'site',
            'comparator' => '<=',
            'value' => $unit_count
          ]
        ),
        'currency' => 'usd',
        'interval' => 'month',
        'nickname' => "$unit_count Sites per Month",
        'active' => true,
        'teams_enabled' => false,
        'teams_limit' => 0,
        'trial_period_days' => 28,
        'product_id' => $stripeProduct->id
      ];

      // Plan
      $plan = factory(Plan::class)->create($data);
    }
  }
}
