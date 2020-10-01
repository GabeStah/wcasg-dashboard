<?php

/**
 * Account Group Routes.
 *
 * Handles user's account routes.
 */
Route::group(
  [
    'prefix' => '/account',
    'middleware' => ['auth', 'subscription.active'],
    'namespace' => 'Account\Controllers',
    'as' => 'account.'
  ],
  function () {
    /**
     * Dashboard
     */
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
    /**
     * Notifications
     */
    Route::get('/my-notification', 'NotificationController@index')->name(
      'mynotification.index'
    );
    // Return collection to use with vue
    Route::get('/notification', 'NotificationController@notification')->name(
      'notification.index'
    );
    Route::delete(
      '/notification/delete/{id}',
      'NotificationController@notificationdelete'
    );
    Route::get(
      '/notification/allasread',
      'NotificationController@notificationread'
    );
    Route::get(
      '/notification/markasread/{id}',
      'NotificationController@notificationsingleread'
    );

    /**
     * Companies Resource Routes
     */
    Route::resource('/companies', 'Company\CompanyController', [
      'only' => ['index', 'create', 'store']
    ]);

    /**
     * Account
     */
    // account index
    Route::get('/', 'AccountController@index')->name('index');

    /**
     * Profile
     */
    // profile index
    Route::get('/profile', 'ProfileController@index')->name('profile.index');

    // profile update
    Route::post('/profile', 'ProfileController@store')->name('profile.store');

    /**
     * Password
     */
    // password index
    Route::get('/password', 'PasswordController@index')->name('password.index');

    // password store
    Route::post('/password', 'PasswordController@store')->name(
      'password.store'
    );

    /**
     * Deactivate
     */
    // deactivate account index
    Route::get('/deactivate', 'DeactivateController@index')->name(
      'deactivate.index'
    );

    // deactivate store
    Route::post('/deactivate', 'DeactivateController@store')->name(
      'deactivate.store'
    );

    /**
     * Two factor
     */
    Route::group(['prefix' => '/twofactor', 'as' => 'twofactor.'], function () {
      // two factor index
      Route::get('/', 'TwoFactorController@index')->name('index');

      // two factor store
      Route::post('/', 'TwoFactorController@store')->name('store');

      // two factor verify
      Route::post('/verify', 'TwoFactorController@verify')->name('verify');

      // two factor verify
      Route::delete('/', 'TwoFactorController@destroy')->name('destroy');
    });

    /**
     * Tokens
     */
    Route::group(['prefix' => '/tokens', 'as' => 'tokens.'], function () {
      // personal access token index
      Route::get('/', 'PersonalAccessTokenController@index')->name('index');
    });

    /**
     * Audit
     */
    Route::group(['prefix' => '/audits', 'as' => 'audits.'], function () {
      Route::get('/', 'AuditsController@index')->name('index');
      Route::post('/', 'AuditsController@store')->name('store');
      Route::get('/create', 'AuditsController@create')->name('create');
      Route::get('/{id}/edit', 'AuditsController@edit')->name('edit');
      Route::put('/{id}', 'AuditsController@update')->name('update');
    });

    /**
     * Sites
     */
    Route::group(['prefix' => '/sites', 'as' => 'sites.'], function () {
      Route::get('/', 'SitesController@index')->name('index');
      Route::post('/', 'SitesController@store')->name('store');
      Route::get('/create', 'SitesController@create')->name('create');
      Route::get('/{site}/edit', 'SitesController@edit')->name('edit');
      Route::put('/{site}', 'SitesController@update')->name('update');
      Route::delete('/{site}', 'SitesController@delete')->name('delete');

      Route::group(
        ['prefix' => '/{site}/extensions', 'as' => 'extensions.'],
        function () {
          Route::get('/', 'SiteExtensionsController@index')->name('index');
        }
      );

      Route::group(
        ['prefix' => '/{site}/statement', 'as' => 'statement.'],
        function () {
          Route::get('/', 'SitesController@statementShow')->name('show');
          Route::put('/', 'SitesController@statementUpdate')->name('update');
          Route::get('/edit', 'SitesController@statementEdit')->name('edit');
          Route::get(
            '/download/{type}',
            'SitesController@statementDownload'
          )->name('download');
        }
      );

      Route::group(
        ['prefix' => '/{site}/statistics', 'as' => 'statistics.'],
        function () {
          Route::get('/', 'SiteStatisticsController@index')->name('index');
        }
      );
    });

    /**
     * Tokens
     */
    Route::group(
      ['prefix' => '/team', 'namespace' => 'Subscription', 'as' => 'team.'],
      function () {
        // Show all team member
        Route::get(
          '/my-team',
          'SubscriptionTeamMemberController@getAllTeamMember'
        )->name('my-team');
      }
    );

    /**
     * Subscription
     */
    Route::group(
      [
        'prefix' => '/subscription',
        'namespace' => 'Subscription',
        'middleware' => ['subscription.owner'],
        'as' => 'subscription.'
      ],
      function () {
        /**
         * Cancel
         *
         * Accessed if there is an active subscription.
         */
        Route::group(
          [
            'prefix' => '/cancel',
            'middleware' => ['subscription.notcancelled'],
            'as' => 'cancel.'
          ],
          function () {
            // cancel subscription index
            Route::get('/', 'SubscriptionCancelController@index')->name(
              'index'
            );

            // cancel subscription
            Route::post('/', 'SubscriptionCancelController@store')->name(
              'store'
            );
          }
        );

        /**
         * Resume
         *
         * Accessed if subscription is cancelled but not expired.
         */
        Route::group(
          [
            'prefix' => '/resume',
            'middleware' => ['subscription.cancelled'],
            'as' => 'resume.'
          ],
          function () {
            // resume subscription index
            Route::get('/', 'SubscriptionResumeController@index')->name(
              'index'
            );

            // resume subscription
            Route::post('/', 'SubscriptionResumeController@store')->name(
              'store'
            );
          }
        );

        /**
         * Invoices
         *
         * Accessed if there is an active subscription.
         */
        Route::group(
          [
            'prefix' => '/invoice',
            'middleware' => ['subscription.notcancelled'],
            'as' => 'invoice.'
          ],
          function () {
            Route::get(
              '/invoices',
              'SubscriptionInvoiceController@invoices'
            )->name('index');
            Route::get(
              '/invoice/{invoice_id}',
              'SubscriptionInvoiceController@invoice'
            )->name('download');
          }
        );
        /**
         * Swap Subscription
         *
         * Accessed if there is an active subscription.
         */
        Route::group(
          [
            'prefix' => '/swap',
            'middleware' => ['subscription.notcancelled'],
            'as' => 'swap.'
          ],
          function () {
            // swap subscription index
            Route::get('/', 'SubscriptionSwapController@index')->name('index');

            // swap subscription store
            Route::post('/', 'SubscriptionSwapController@store')->name('store');
          }
        );

        /**
         * Card
         */
        Route::group(
          [
            'prefix' => '/card',
            'middleware' => ['subscription.customer'],
            'as' => 'card.'
          ],
          function () {
            // card index
            Route::get('/', 'SubscriptionCardController@index')->name('index');

            // card store
            Route::post('/', 'SubscriptionCardController@store')->name('store');
          }
        );

        /**
         * Team
         */
        Route::group(
          [
            'prefix' => '/team',
            'middleware' => ['subscription.team'],
            'as' => 'team.'
          ],
          function () {
            // team index
            Route::get('/', 'SubscriptionTeamController@index')->name('index');

            // team update
            Route::put('/', 'SubscriptionTeamController@update')->name(
              'update'
            );

            // store team member
            Route::post(
              '/member',
              'SubscriptionTeamMemberController@store'
            )->name('member.store');

            // destroy team member
            Route::delete(
              '/member/{user}',
              'SubscriptionTeamMemberController@destroy'
            )->name('member.destroy');
          }
        );
      }
    );

    /**
     * Sample pages Routes
     */
    Route::get('/calendar', function () {
      return view('pages.calendar');
    });
    Route::get('/charts', function () {
      return view('pages.charts');
    });
  }
);
