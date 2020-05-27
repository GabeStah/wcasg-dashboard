<?php

/**
 * Auth Routes
 */
Route::group(['namespace' => 'Auth\Controllers'], function () {
  // Authentication Routes...
  Route::get('login', 'LoginController@showLoginForm')->name('login');
  Route::post('login', 'LoginController@login');
  Route::post('logout', 'LoginController@logout')->name('logout');

  // Registration Routes...
  Route::get('register', 'RegisterController@showRegistrationForm')->name(
    'register'
  );
  Route::post('register', 'RegisterController@register');

  // Password Reset Routes...
  Route::get(
    'password/reset',
    'ForgotPasswordController@showLinkRequestForm'
  )->name('password.request');
  Route::post(
    'password/email',
    'ForgotPasswordController@sendResetLinkEmail'
  )->name('password.email');
  Route::get(
    'password/reset/{token}',
    'ResetPasswordController@showResetForm'
  )->name('password.reset');
  Route::post('password/reset', 'ResetPasswordController@reset');

  /**
   * Activation Group Routes
   */
  Route::group(
    [
      'prefix' => '/activation',
      'middleware' => ['guest'],
      'as' => 'activation.'
    ],
    function () {
      // resend index
      Route::get('/resend', 'ActivationResendController@index')->name('resend');

      // resend store
      Route::post('/resend', 'ActivationResendController@store')->name(
        'resend.store'
      );

      // activation
      Route::get(
        '/{confirmation_token}',
        'ActivationController@activate'
      )->name('activate');
    }
  );

  /**
   * Two Factor Login Group Routes
   */
  Route::group(
    [
      'prefix' => '/login/twofactor',
      'middleware' => ['guest'],
      'as' => 'login.twofactor.'
    ],
    function () {
      // index
      Route::get('/', 'TwoFactorLoginController@index')->name('index');

      // store
      Route::post('/', 'TwoFactorLoginController@verify')->name('verify');
    }
  );
});
