<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use CreatyDev\Http\Middleware\Audit\ValidateAuditResultsRequest;

Route::group(
  [
    'namespace' => 'Api\Controllers\Audit',
    'middleware' => ['api.audit'],
    'as' => 'api.audit.'
  ],
  function () {
    Route::post('audit/create', 'AuditController@create')->name('create');
    Route::get('audit/{id}', 'AuditController@get')
      ->name('get')
      ->middleware([ValidateAuditResultsRequest::class]);
  }
);

Route::group(
  [
    'namespace' => 'Api\Controllers\Extension',
    'middleware' => ['auth:api', 'api.extension'],
    'as' => 'api.extension.'
  ],
  function () {
    Route::post('extension/create', 'ExtensionController@create')->name(
      'create'
    );
    Route::get('extension', 'ExtensionController@get')->name('get');
    Route::post('extension', 'ExtensionController@update')->name('update');
  }
);

Route::group(
  [
    'namespace' => 'Api\Controllers\Statement',
    'middleware' => ['api.statement'],
    'as' => 'api.statement.'
  ],
  function () {
    Route::get('statement', 'StatementController@get')->name('get');
  }
);

Route::group(
  [
    'namespace' => 'Api\Controllers\Widget',
    'middleware' => ['api.widget'],
    'as' => 'api.widget.'
  ],
  function () {
    Route::get('widget/{token}', 'WidgetController@get')->name('get');
  }
);

/**
 * API Routes
 */
Route::group(['namespace' => 'Api\Controllers', 'as' => 'api.'], function () {
  /**
   * Account Routes
   */
  Route::group(
    ['prefix' => '/account', 'namespace' => 'Account', 'as' => 'account.'],
    function () {
      // profile index
      Route::get('/profile', 'ProfileController@index')->name('profile.index');
    }
  );

  /**
   * Auth Routes
   */
  Route::group(['namespace' => 'Auth'], function () {
    // Registration Routes...
    Route::post('register', 'RegisterController@register')->name('register');

    /**
     * Activation
     */
    Route::group(
      ['prefix' => '/activation', 'as' => 'activation.'],
      function () {
        // resend store
        Route::post('/resend', 'ActivationResendController@store')->name(
          'resend.store'
        );
      }
    );
  });

  /**
   * Auth:api Routes
   *
   * Routes that require user to be authenticated
   */
  Route::group(['middleware' => ['auth:api']], function () {
    /**
     * Account Routes
     */
    Route::group(
      [
        'prefix' => '/account',
        'namespace' => 'Account',
        'as' => 'account.'
      ],
      function () {
        /**
         * Profile
         */
        // profile index
        Route::get('/profile', 'ProfileController@index')->name(
          'profile.index'
        );

        // profile update
        Route::post('/profile', 'ProfileController@store')->name(
          'profile.store'
        );

        /**
         * Password
         */
        // password store
        Route::post('/password', 'PasswordController@store')->name(
          'password.store'
        );

        /**
         * Deactivate
         */
        // deactivate store
        Route::post('/deactivate', 'DeactivateController@store')->name(
          'deactivate.store'
        );
      }
    );

    /**
     * Subscription: active Routes
     */
    Route::group(['middleware' => ['subscription.active:api']], function () {});
  });
});
