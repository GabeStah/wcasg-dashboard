<?php

namespace CreatyDev\Domain\Subscriptions\Observers;

use CreatyDev\Domain\Subscriptions\Models\Plan;

class PlanObserver {
  /**
   * Create Stripe Plan prior to model Plan creation.
   *
   * @param Plan $plan
   *
   * @return Plan
   */
  public function creating(Plan $plan) {
    return $this->createStripePlan($plan);
  }

  private function createStripePlan(Plan $plan) {
    // Create Stripe Plan
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

  /**
   * Delete Stripe Plan prior to model Plan deletion.
   *
   * @param Plan $plan
   */
  public function deleting(Plan $plan) {
    $stripePlan = \Stripe\Plan::retrieve($plan->id);

    if (!$stripePlan) {
      abort(403, 'Unable to delete matching Stripe Plan.');
    }

    $stripePlan->delete();
  }

  /**
   * Update Stripe Plan object prior to model Plan update.
   *
   * @see https://stripe.com/docs/api/plans/update
   *
   * @param Plan $plan
   */
  public function updating(Plan $plan) {
    if ($plan->isDirty()) {
      if ($plan->isDirty('product_id')) {
        // Update product
        $stripePlan = \Stripe\Plan::update($plan->id, [
          'product' => $plan->product_id
        ]);
      } else {
        // Update plan
        $stripePlan = \Stripe\Plan::update($plan->id, [
          'trial_period_days' => $plan->trial_period_days,
          'nickname' => $plan->nickname,
          'active' => $plan->active
        ]);
      }
      if (!$stripePlan) {
        abort(403, 'Unable to update matching Stripe Plan.');
      }
    }
  }
}
