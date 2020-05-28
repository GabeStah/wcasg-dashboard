<?php

/**
 * Webhooks Routes
 */
Route::group(['namespace' => 'Webhook\Controllers'], function () {
  // Stripe Webhook
  Route::post('/webhooks/stripe', 'StripeWebhookController@handleWebhook');
});
