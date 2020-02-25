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

Route::group(
  [
    'namespace' => 'Api\Controllers\Audit',
    //    'middleware' => ['api.audit'],
    'as' => 'api.audit.'
  ],
  function () {
    Route::get('audit/{domain}', 'AuditController@get')->name('get');
    Route::get('audit/{id}/results', 'AuditController@results')->name(
      'results'
    );
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
    Route::get('widget', 'WidgetController@get')->name('get');
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
