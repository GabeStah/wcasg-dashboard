<?php

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Database\Seeder;
use Faker\Generator;

class SubscriptionTableSeeder extends Seeder {
    public function run() {
        $faker = Faker\Factory::create();
        $user = User::first();
        $localPlan = Plan::first();
        $plan = \Stripe\Plan::retrieve($localPlan->gateway_id);

        $token = \Stripe\Token::create([
            'card' => [
                'number' => '4242424242424242',
                'exp_month' => 2,
                'exp_year' => 2021,
                'cvc' => '314'
            ]
        ]);

        $subscription = $user
            ->newSubscription('main', $plan->id)
            ->create($token->id);

        $subscription->update(['plan_id' => $localPlan->id]);
        // $user = User::find(1);

        // $subscription = $request->user()->newSubscription('main', 'premium')->create($paymentMethod);

        //        if($request->has('coupon')) {
        //            $subscription->withCoupon($request->coupon);
        //        }

        //        $subscription->create($request->token);

        factory(Site::class, 1)->create(['subscription_id' => $subscription]);

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
