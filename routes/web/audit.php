<?php

use CreatyDev\Http\Middleware\Audit\ValidateAuditResultsRequest;

/**
 * Audit Routes
 */
Route::group(
  [
    'prefix' => '/audit',
    'as' => 'audit.',
    'namespace' => 'Audit\Controllers'
  ],
  function () {
    Route::get('/thank-you', 'AuditController@thanks')->name('thanks');
    Route::get('/', 'AuditController@index')->name('index');
    Route::get('/{id}', 'AuditController@get')
      ->name('get')
      ->middleware(ValidateAuditResultsRequest::class);
  }
);
