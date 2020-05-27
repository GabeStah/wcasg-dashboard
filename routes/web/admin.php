<?php

Route::get('/admin', function () {
  return redirect()->route('admin.dashboard');
});

/**
 * Admin Group Routes
 */
Route::group(
  ['prefix' => '/admin', 'namespace' => 'Admin\Controllers', 'as' => 'admin.'],
  function () {
    /**
     * Impersonate destroy
     */
    Route::delete(
      '/users/impersonate',
      'User\UserImpersonateController@destroy'
    )->name('users.impersonate.destroy');

    /**
     * Admin Role Middleware Routes
     */
    Route::group(['middleware' => ['auth', 'role:admin']], function () {
      // dashboard
      Route::get('/dashboard', 'AdminDashboardController@index')->name(
        'dashboard'
      );

      /**
       * User Namespace Routes
       */
      Route::group(['namespace' => 'User'], function () {
        /**
         * Users Group Routes
         */
        Route::group(['prefix' => '/users', 'as' => 'users.'], function () {
          /**
           * User Impersonate Routes
           */
          Route::group(
            ['prefix' => '/impersonate', 'as' => 'impersonate.'],
            function () {
              // index
              Route::get('/', 'UserImpersonateController@index')->name('index');

              // store
              Route::post('/', 'UserImpersonateController@store')->name(
                'store'
              );
            }
          );

          /**
           * User Group Routes
           */
          Route::group(['prefix' => '/{user}'], function () {
            Route::resource('/roles', 'UserRoleController', [
              'except' => ['show', 'edit']
            ]);
          });
        });

        /**
         * Permissions Group Routes
         */
        Route::group(
          ['prefix' => '/permissions', 'as' => 'permissions.'],
          function () {
            /**
             * Role Group Routes
             */
            Route::group(['prefix' => '/{permission}'], function () {
              // toggle status
              Route::put(
                '/status',
                'PermissionStatusController@toggleStatus'
              )->name('toggleStatus');
            });
          }
        );

        /**
         * Permissions Resource Routes
         */
        Route::resource('/permissions', 'PermissionController');

        /**
         * Roles Group Routes
         */
        Route::group(['prefix' => '/roles', 'as' => 'roles.'], function () {
          /**
           * Role Group Routes
           */
          Route::group(['prefix' => '/{role}'], function () {
            // toggle status
            Route::put('/status', 'RoleStatusController@toggleStatus')->name(
              'toggleStatus'
            );

            // revoke users access
            Route::put(
              '/revoke',
              'RoleUsersDisableController@revokeUsersAccess'
            )->name('revokeUsersAccess');

            /**
             * Permissions Resource Routes
             */
            Route::resource('/permissions', 'RolePermissionController', [
              'only' => ['index', 'store', 'destroy']
            ]);
          });
        });

        /**
         * Roles Resource Routes
         */
        Route::resource('/roles', 'RoleController');

        /**
         * Users Resource Routes
         */
        Route::resource('/users', 'UserController');
      });

      /**
       * Subscription Namespace Routes
       */
      Route::group(['namespace' => 'Extension'], function () {
        Route::get('/extensions', 'ExtensionController@index')->name(
          'extensions.index'
        );
      });
    });

    /**
     * Plan Namespace Routes
     */
    Route::group(['namespace' => 'Plan'], function () {
      /**
       * Plans Resource Routes
       */
      Route::resource('/plans', 'PlanController');
    });

    /**
     * Product Namespace Routes
     */
    Route::group(['namespace' => 'Product'], function () {
      /**
       * Plans Resource Routes
       */
      Route::resource('/products', 'ProductController');
    });

    /**
     * Configuration Routes
     */
    Route::group(
      [
        'middleware' => ['auth', 'role:admin'],
        'namespace' => 'Configuration'
      ],
      function () {
        Route::get('/configuration', 'ConfigurationController@index')->name(
          'configuration.index'
        );
        Route::post('/configuration', 'ConfigurationController@update')->name(
          'configuration.update'
        );
      }
    );

    /**
     * Coupon Namespace Routes
     */
    Route::group(['namespace' => 'Coupon'], function () {
      Route::resource('/coupons', 'CouponController');
    });

    /**
     * QuickBooks Routes
     */
    Route::group(
      [
        'prefix' => '/quickbooks',
        'middleware' => ['auth', 'role:admin'],
        'namespace' => 'Quickbooks',
        'as' => 'quickbooks.'
      ],
      function () {
        Route::get('/', 'QuickbooksController@index')->name('index');
      }
    );

    /**
     * Subscription Namespace Routes
     */
    Route::group(['namespace' => 'Subscription'], function () {
      Route::get('/subscriptions', 'SubscriptionController@index')->name(
        'subscriptions.index'
      );
    });
    /**
     * Announcement Namespace Routes
     */
    Route::group(['namespace' => 'Announcement'], function () {
      Route::resource('/announcement', 'AnnouncementController');
    });

    /**
     * Statistics Namespace Routes
     */
    Route::get('/get-statistics', 'AdminDashboardController@statistics');
    Route::get('/logvisit', 'AdminDashboardController@visitlog')->name(
      'visitlog'
    );

    /**
     * Statement Template Namespace Routes
     */
    Route::group(
      [
        'middleware' => ['auth', 'role:admin'],
        'namespace' => 'Statement'
      ],
      function () {
        Route::resource('/statement-templates', 'StatementTemplateController');
      }
    );

    /**
     * Statement Namespace Routes
     */
    Route::group(
      [
        'middleware' => ['auth', 'role:admin'],
        'namespace' => 'Statement'
      ],
      function () {
        Route::resource('/statements', 'StatementController');
      }
    );
  }
);
