<?php

namespace Tests\Feature;

use CreatyDev\Domain\Sites\Models\Site;
use CreatyDev\Solarix\Cashier\Subscription;
use Tests\ResetDatabase;
use Tests\TestCase;

class ApiWidgetTest extends TestCase {
  use ResetDatabase;

  public function testEndpoint() {
    $response = $this->get(route('api.widget.get'));

    $response->assertStatus(200);
    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');
  }

  public function testMissingOrigin() {
    $response = $this->get(route('api.widget.get'));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringContainsStringIgnoringCase(
      __('error.api.missing_origin'),
      $response->content()
    );
  }

  public function testNotMissingOrigin() {
    $response = $this->withHeaders([
      'origin' => 'localhost:5000'
    ])->get(route('api.widget.get'));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringNotContainsStringIgnoringCase(
      __('error.api.missing_origin'),
      $response->content()
    );
  }

  public function testMissingToken() {
    $response = $this->withHeaders([
      'origin' => 'localhost:5000'
    ])->get(route('api.widget.get'));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringContainsStringIgnoringCase(
      __('error.api.missing_token'),
      $response->content()
    );
  }

  public function testNotMissingToken() {
    $response = $this->withHeaders([
      'origin' => 'localhost:5000'
    ])->get(route('api.widget.get', ['token' => '123456']));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringNotContainsStringIgnoringCase(
      __('error.api.missing_token'),
      $response->content()
    );
  }

  public function testValidToken() {
    $site = Site::first();
    // Get valid token.
    $token = $site->token;

    // Verify sub is initially valid.
    self::assertTrue($site->subscription->valid());

    $response = $this->withHeaders([
      'origin' => 'localhost:5000'
    ])->get(route('api.widget.get', ['token' => $token]));

    self::assertStringStartsNotWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringNotContainsStringIgnoringCase(
      __('error.api.invalid_token'),
      $response->content()
    );
  }

  public function testNotValidToken() {
    // Invalid token.
    $token = '12345678790';

    $response = $this->withHeaders([
      'origin' => 'localhost:5000'
    ])->get(route('api.widget.get', ['token' => $token]));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringContainsStringIgnoringCase(
      __('error.api.invalid_token'),
      $response->content()
    );
  }

  /**
   * Test valid token associated with invalid sub.
   *
   * TODO: Implement proper Subscription.isValid query from complex Subscription model.
   */
  public function testValidTokenWithInvalidSubscription() {
    // Get valid token.
    //        $activeSubs = Subscription::all()->where('active', true);
    //        //        $token = Site::where($activeSubs);
    $site = Site::first();
    // Verify sub is initially valid.
    self::assertTrue($site->subscription->valid());
    // Cancel related sub
    $site->subscription->cancelNow();
    // Verify sub not valid
    self::assertFalse($site->subscription->valid());

    $token = $site->token;
    $response = $this->withHeaders([
      'origin' => 'localhost:5000'
    ])->get(route('api.widget.get', ['token' => $token]));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringContainsStringIgnoringCase(
      __('error.api.invalid_subscription'),
      $response->content()
    );
  }

  /**
   * Test valid token associated with invalid sub.
   *
   * TODO: Implement proper Subscription.isValid query from complex Subscription model.
   */
  public function testValidTokenWithInactiveSite() {
    $subscription = factory(Subscription::class, 'complete')->make();
    $site = factory(Site::class)->create([
      'active' => true,
      'subscription_id' => $subscription->id
    ]);
    //    $site = Site::first();
    // Verify sub is initially valid.
    self::assertTrue($site->subscription->valid());
    // Verify site is initially active.
    self::assertTrue($site->isActive());
    // Set inactive
    $site->deactivate();
    // Verify site is inactive.
    self::assertFalse($site->isActive());

    // Get valid token.
    $token = $site->token;
    $response = $this->withHeaders([
      'origin' => $site->domain
    ])->get(route('api.widget.get', ['token' => $token]));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringContainsStringIgnoringCase(
      __('error.api.inactive_site'),
      $response->content()
    );
  }

  public function testNotValidOrigin() {
    // Get valid token.
    $token = Site::first()->token;

    $response = $this->withHeaders([
      // Pass invalid (mismatched) origin
      'origin' => 'hocallost:5000'
    ])->get(route('api.widget.get', ['token' => $token]));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringContainsStringIgnoringCase(
      __('error.api.invalid_origin'),
      $response->content()
    );
  }

  public function testValidOrigin() {
    $response = $this->withHeaders([
      'Sec-Fetch-Site' => 'same-site',
      'Sec-Fetch-Mode' => 'cors'
    ])->get(route('api.widget.get'));

    self::assertStringStartsWith('console.error', $response->content());
    $response->assertHeader('content-type', 'text/javascript;charset=UTF-8');

    self::assertStringNotContainsStringIgnoringCase(
      __('error.api.invalid_origin'),
      $response->content()
    );
  }
}
