<?php

namespace CreatyDev\Http\Middleware\Api\Webhook;

use Closure;
use CreatyDev\App\Exceptions\Api\Webhook\WebhookInvalidIdException;
use CreatyDev\App\Exceptions\Api\Webhook\WebhookInvalidTokenException;
use CreatyDev\App\Exceptions\Api\Webhook\WebhookInvalidTypeException;
use CreatyDev\App\Exceptions\Api\Webhook\WebhookMissingIdException;
use CreatyDev\App\Exceptions\Api\Webhook\WebhookMissingTokenException;
use CreatyDev\App\Exceptions\Api\Webhook\WebhookMissingTypeException;
use CreatyDev\App\Traits\Api\AllowWidgetAdminToken;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use Illuminate\Http\Request;

class CheckValidWebhookRequest {
  use AllowWidgetAdminToken;

  /**
   * Handle all Widget request validation.
   *
   * @param Request $request
   * @param Closure $next
   *
   * @return mixed
   * @throws WebhookInvalidIdException
   * @throws WebhookInvalidTokenException
   * @throws WebhookInvalidTypeException
   * @throws WebhookMissingIdException
   * @throws WebhookMissingTokenException
   * @throws WebhookMissingTypeException
   */
  public function handle($request, Closure $next) {
    $validReferrers = [
      [
        'referrer' => 'kickpages',
        'origin' => [
          'localhost',
          'kickpages.com',
          'kickpages-publisher-1cbc285d3a80ed2d.elb.us-east-1.amazonaws.com',
          'openforbusiness.wcasg.com'
        ]
      ]
    ];

    // Check for 'id'
    $id = $request->input('id');
    if (!$id) {
      throw new WebhookMissingIdException();
    }

    // Find plan
    $plan = Plan::find($id);
    if (!$plan) {
      throw new WebhookInvalidIdException();
    } else {
      app()->instance(Plan::class, $plan);
    }

    // Check for token
    $token = $request->input('token');
    if (!$token) {
      throw new WebhookMissingTokenException();
    }

    $plan = null;
    if ($this->hasAdminToken()) {
      // Bypass token check, get first matching.
      $plan = Plan::where('id', '=', $id)->firstOrFail();
    } else {
      // Find token and id match
      $plan = Plan::where('id', '=', $id)
        ->where('token', '=', $token)
        ->first();
    }

    // Check if no site found.
    if (!$plan) {
      throw new WebhookInvalidTokenException();
    }

    // Check for 'type'
    $type = $request->input('type');
    if (!$type) {
      throw new WebhookMissingTypeException();
    }

    // Check for valid type
    $validTypes = ['funnel'];
    if (array_search($type, $validTypes) === false) {
      throw new WebhookInvalidTypeException();
    }

    // All checks passed.
    return $next($request);
  }
}
