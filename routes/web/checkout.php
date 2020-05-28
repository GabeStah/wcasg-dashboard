<?php

/**
 * Checkout Routes
 */
Route::group(
  [
    'prefix' => '/checkout',
    'as' => 'checkout.',
    'namespace' => 'Checkout\Controllers'
  ],
  function () {
    Route::get('/sites', 'CheckoutController@sitesIndex')->name('sites.index');
    Route::post('/sites', 'CheckoutController@sitesStore')->name('sites.store');
    Route::get('/payment', 'CheckoutController@paymentIndex')->name(
      'payment.index'
    );
    Route::post('/payment', 'CheckoutController@paymentStore')->name(
      'payment.store'
    );
  }
);
