<?php

namespace Tests\Feature;

use CreatyDev\Domain\Sites\Models\Site;
use Tests\ResetDatabase;
use Tests\TestCase;

class ApiWidgetTest extends TestCase {
    use ResetDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testEndpoint() {
        $response = $this->get('/api/widget');

        $response->assertStatus(200);
        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );
    }

    public function testMissingOrigin() {
        $response = $this->get('/api/widget');

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringContainsStringIgnoringCase(
            __('error.api.widget.missing-origin'),
            $response->content()
        );
    }

    public function testNotMissingOrigin() {
        $response = $this->withHeaders([
            'origin' => 'localhost:5000'
        ])->get('/api/widget');

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringNotContainsStringIgnoringCase(
            __('error.api.widget.missing-origin'),
            $response->content()
        );
    }

    public function testMissingToken() {
        $response = $this->withHeaders([
            'origin' => 'localhost:5000'
        ])->get('/api/widget');

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringContainsStringIgnoringCase(
            __('error.api.widget.missing-token'),
            $response->content()
        );
    }

    public function testNotMissingToken() {
        $response = $this->withHeaders([
            'origin' => 'localhost:5000'
        ])->get('/api/widget?token=123456');

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringNotContainsStringIgnoringCase(
            __('error.api.widget.missing-token'),
            $response->content()
        );
    }

    public function testValidToken() {
        // Get valid token.
        $token = Site::first()->token;

        $response = $this->withHeaders([
            'origin' => 'localhost:5000'
        ])->get("/api/widget?token={$token}");

        self::assertStringStartsNotWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringNotContainsStringIgnoringCase(
            __('error.api.widget.invalid-token'),
            $response->content()
        );
    }

    public function testNotValidToken() {
        // Invalid token.
        $token = '12345678790';

        $response = $this->withHeaders([
            'origin' => 'localhost:5000'
        ])->get("/api/widget?token={$token}");

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringContainsStringIgnoringCase(
            __('error.api.widget.invalid-token'),
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
        ])->get("/api/widget?token={$token}");

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringContainsStringIgnoringCase(
            __('error.api.widget.invalid-subscription'),
            $response->content()
        );
    }

    public function testNotValidOrigin() {
        // Get valid token.
        $token = Site::first()->token;

        $response = $this->withHeaders([
            // Pass invalid (mismatched) origin
            'origin' => 'hocallost:5000'
        ])->get("/api/widget?token={$token}");

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringContainsStringIgnoringCase(
            __('error.api.widget.invalid-origin'),
            $response->content()
        );
    }

    public function testValidOrigin() {
        $response = $this->withHeaders([
            'Sec-Fetch-Site' => 'same-site',
            'Sec-Fetch-Mode' => 'cors'
        ])->get('/api/widget');

        self::assertStringStartsWith('console.error', $response->content());
        $response->assertHeader(
            'content-type',
            'text/javascript;charset=UTF-8'
        );

        self::assertStringNotContainsStringIgnoringCase(
            __('error.api.widget.invalid-origin'),
            $response->content()
        );
    }
}
