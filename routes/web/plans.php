<?php

/**
 * Plans Routes
 */
Route::group(['namespace' => 'Subscription\Controllers'], function () {
  /**
   * Plans Group Routes
   */
  Route::group(
    [
      'prefix' => '/plans',
      'middleware' => ['subscription.inactive'],
      'as' => 'plans.'
    ],
    function () {
      // teams index
      Route::get('/teams', 'PlanTeamController@index')->name('teams.index');
    }
  );

  /**
   * Plans Resource Routes
   */
  Route::resource('/plans', 'PlanController', [
    'only' => ['index', 'show']
  ])->middleware(['subscription.inactive']);

  /**
   * Subscription Resource Routes
   */
  Route::resource('/subscription', 'SubscriptionController', [
    'only' => ['index', 'store']
  ])->middleware(['auth.register', 'subscription.inactive']);
});
