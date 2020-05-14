<?php

namespace CreatyDev\Http\Api\Controllers\Webhook;

use CreatyDev\App\Api\ApiResponse;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Api\Webhook\Events\WebhookLeadGenerated;
use CreatyDev\Domain\Leads\Models\Lead;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Stripe\Charge;

class WebhookController extends Controller {
  public function post(Request $request, Plan $plan, Charge $charge) {
    $response = new Response();

    // Create Lead record
    $lead = new Lead([
      'first_name' => explode(' ', $charge->billing_details->name)[0],
      'last_name' =>
        count(explode(' ', $charge->billing_details->name)) > 1
          ? explode(' ', $charge->billing_details->name)[1]
          : '',
      'address1' => $charge->billing_details->address->line1,
      'address2' => $charge->billing_details->address->line2,
      'city' => $charge->billing_details->address->city,
      'state' => $charge->billing_details->address->state,
      'postal_code' => $charge->billing_details->address->postal_code,
      'country' => $charge->billing_details->address->country,
      'email' => $charge->billing_details->email,
      'phone' => $charge->billing_details->phone,
      'plan_id' => $plan->id,
      'metadata' => [
        'source' => [
          'type' => 'stripe_charge',
          'data' => $charge
        ]
      ]
    ]);

    $lead->save();

    // Trigger webhook-generated lead event
    event(new WebhookLeadGenerated($lead, $plan));

    return new ApiResponse(
      [
        'message' => 'Lead generated.',
        'data' => [
          'lead' => [
            'id' => $lead->id,
            'plan_id' => $lead->plan->id
          ]
        ]
      ],
      200
    );
  }
}
