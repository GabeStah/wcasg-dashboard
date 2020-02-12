<?php

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Seeder;
use Faker\Generator;
use Laravel\Cashier\SubscriptionBuilder;

class SubscriptionTableSeeder extends Seeder {
  public function run() {
    $faker = Faker\Factory::create();
    $userA = User::first();
    $localPlanA = Plan::all()->get(0);
    $localPlanB = Plan::all()->get(1);

    $planA = \Stripe\Plan::retrieve($localPlanA->gateway_id);
    $planB = \Stripe\Plan::retrieve($localPlanB->gateway_id);

    $tokenA = \Stripe\Token::create([
      'card' => [
        'number' => '4242424242424242',
        'exp_month' => 2,
        'exp_year' => 2021,
        'cvc' => '314'
      ]
    ]);
    $tokenB = \Stripe\Token::create([
      'card' => [
        'number' => '4242424242424242',
        'exp_month' => 2,
        'exp_year' => 2021,
        'cvc' => '314'
      ]
    ]);

    $subscriptionC = new SubscriptionBuilder($userA, 'tertiary', $planA->id);

    $subscriptionA = $userA
      ->newSubscription('main', $planA->id)
      ->create($tokenA->id);
    $subscriptionB = $userA
      ->newSubscription('secondary', $planB->id)
      ->create($tokenB->id);

    //        $currentSub = $userA->subscription('main');
    //        dump($currentSub);

    //        $subscriptionA->cancel();

    $subscriptionA->update(['plan_id' => $localPlanA->id]);
    $subscriptionB->update(['plan_id' => $localPlanB->id]);
    // $user = User::find(1);

    // $subscription = $request->user()->newSubscription('main', 'premium')->create($paymentMethod);

    //        if($request->has('coupon')) {
    //            $subscription->withCoupon($request->coupon);
    //        }

    //        $subscription->create($request->token);

    factory(Site::class, 1)->create([
      'domain' => 'localhost:84',
      'active' => true,
      'subscription_id' => $subscriptionA
    ]);

    factory(Site::class, 1)->create([
      'domain' => '10.0.75.1:5000',
      'active' => true,
      'subscription_id' => $subscriptionB
    ]);

    factory(Site::class, 3)->create(['subscription_id' => $subscriptionA]);
    factory(Site::class, 3)->create(['subscription_id' => $subscriptionB]);

    //
    //        $planName = 'Basic Plan';
    //
    //        $slug = str_replace(' ', '-', $planName);
    //        $gateway_id = str_replace(' ', '_', $planName);
    //        $team_enable = 0;
    //        $teams_limit = null;
    //        $price = (float) 5.0 * 100;
    //        $trialPeriod = 5;
    //
    //        $stripePlan = \Stripe\Plan::retrieve($gateway_id);
    //        if (!$stripePlan) {
    //            // Create Stripe plan if doesn't exist
    //            \Stripe\Plan::create([
    //                'amount' => $price,
    //                'interval' => 'month',
    //                'product' => [
    //                    'name' => $planName
    //                ],
    //                'currency' => 'usd',
    //                'id' => $gateway_id,
    //                'trial_period_days' => $trialPeriod
    //            ]);
    //        }
    //
    //        $plan = new Plan([
    //            'name' => $planName,
    //            'gateway_id' => $gateway_id,
    //            'price' => $price,
    //            'interval' => 'month',
    //            'teams_enabled' => $team_enable,
    //            'teams_limit' => $teams_limit,
    //            'active' => 1,
    //            'slug' => $slug,
    //            'trial_period_days' => $trialPeriod
    //        ]);
    //
    //        $plan->save();
  }
}
