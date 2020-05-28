<?php

/**
 * Home Routes
 */
Route::group(['namespace' => 'Home\Controllers'], function () {
  // index
  Route::get('/', 'HomeController@index')->name('home');
});
