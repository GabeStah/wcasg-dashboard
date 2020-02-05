<?php

use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Database\Seeder;

class PlanTableSeeder extends Seeder {
    public function run() {
        $planName = 'Basic Plan';

        $slug = str_replace(' ', '-', $planName);
        $gateway_id = str_replace(' ', '_', $planName);
        $team_enable = 0;
        $teams_limit = null;
        $price = (float) 5.0 * 100;
        $trialPeriod = 5;

        $stripePlan = \Stripe\Plan::retrieve($gateway_id);
        if (!$stripePlan) {
            // Create Stripe plan if doesn't exist
            \Stripe\Plan::create([
                'amount' => $price,
                'interval' => 'month',
                'product' => [
                    'name' => $planName
                ],
                'currency' => 'usd',
                'id' => $gateway_id,
                'trial_period_days' => $trialPeriod
            ]);
        }

        $plan = new Plan([
            'name' => $planName,
            'gateway_id' => $gateway_id,
            'price' => $price,
            'interval' => 'month',
            'teams_enabled' => $team_enable,
            'teams_limit' => $teams_limit,
            'active' => 1,
            'slug' => $slug,
            'trial_period_days' => $trialPeriod
        ]);

        $plan->save();
    }
}
