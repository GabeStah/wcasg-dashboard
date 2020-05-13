<?php

namespace CreatyDev\Http\Api\Controllers\Webhook;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\App\Exceptions\Api\WebhookException;
use CreatyDev\Domain\Leads\Models\Lead;
use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Stripe\Customer;

class WebhookController extends Controller {
  public function post(Request $request, Plan $plan) {
    $response = new Response();

    // type
    $type = $request->input('type');

    // Transaction
    $transactionData = $request->input('transaction');
    // TODO: Add middleware checks for gateway, status, txn_
    $status = $transactionData->status_at_gateway;

    // Find data from Stripe
    // TODO

    // Find Stripe Customer by email
    $customers = Customer::all(['email' => '']);
    if (empty($customers->data)) {
      throw new WebhookException();
    }

    $customer = $customers->data[0];

    // Create lead from customer
    $lead = new Lead([
      'first_name' => explode(' ', $customer->name)[0],
      'last_name' =>
        count(explode(' ', $customer->name)) > 1
          ? explode(' ', $customer->name)[1]
          : '',
      'address1' => $customer->address->line1,
      'address2' => $customer->address->line2,
      'city' => $customer->address->city,
      'state' => $customer->address->state,
      'postal_code' => $customer->address->postal_code,
      'country' => $customer->address->country,
      'email' => '',
      'phone' => $customer->phone,
      'plan_id' => $plan->id
    ]);

    $lead->save();

    // Continue to registration
    return redirect()->route('register', ['lead' => $lead]);

    $siteId = $request->input('site_id');
    $site = Site::findOrFail($siteId);

    $content = $site->statement->render($site);

    // All validation Middleware passed, allow response
    $response->withHeaders([
      'Access-Control-Allow-Origin' => $request->header('origin'),
      'Content-Type' => 'text/html;charset=UTF-8',
      'X-Content-Type-Options' => 'nosniff'
    ]);

    // Respond with content.
    return $response->setContent($content);
  }
}
