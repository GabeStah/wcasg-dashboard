<?php

namespace CreatyDev\Domain\Subscriptions\Observers;

use CreatyDev\Domain\Subscriptions\Models\Plan;

class PlanObserver {
  public function creating(Plan $plan) {
    // Create Stripe Plan
    logger('PlanObserver->creating');

    $stripePlan = \Stripe\Plan::create([
      'amount' => $plan->amount,
      'currency' => $plan->currency,
      'interval' => $plan->interval,
      'product' => $plan->product_id,
      'trial_period_days' => $plan->trial_period_days,
      'nickname' => $plan->nickname,
      'active' => $plan->active
    ]);

    if (!$stripePlan) {
      abort(403, 'Unable to create matching Stripe Plan.');
    }

    // Assign Stripe id
    $plan->id = $stripePlan->id;

    return $plan;
  }

  public function updating(Plan $plan) {
    //
    logger('PlanObserver->updating');

    abort(403, 'Unable to create matching Stripe Plan.');
  }
}
