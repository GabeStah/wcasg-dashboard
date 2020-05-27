<?php

/**
 * Developer Routes.
 *
 * Handles developer routes.
 */
Route::group(
  [
    'prefix' => '/developers',
    'middleware' => ['auth'],
    'namespace' => 'Developer\Controllers',
    'as' => 'developer.'
  ],
  function () {
    // index
    Route::get('/', 'DeveloperController@index')->name('index');
  }
);
