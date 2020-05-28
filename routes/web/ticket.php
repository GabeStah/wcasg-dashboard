<?php

/**
 * Ticket: Account
 */
Route::group(
  [
    'prefix' => '/account',
    'middleware' => ['auth', 'subscription.active'],
    'namespace' => 'Ticket\Controllers',
    'as' => 'ticket.'
  ],
  function () {
    Route::get('new-ticket', 'TicketsController@create')->name('create');

    Route::post('new-ticket', 'TicketsController@store');

    Route::get('tickets', 'TicketsController@userTickets')->name('index');

    Route::get('tickets/{ticket_id}', 'TicketsController@show')->name('show');

    Route::post('comment', 'CommentsController@postComment')->name('comment');
  }
);

/**
 * Ticket: Admin
 */
Route::group(
  [
    'prefix' => '/admin',
    'namespace' => 'Ticket\Controllers',
    'middleware' => ['auth', 'role:admin']
  ],
  function () {
    // Admin Ticket system
    Route::get('tickets', 'TicketsController@index')->name('admin.tickets');

    Route::post('close_ticket/{ticket_id}', 'TicketsController@close');
    Route::get('tickets/{ticket_id}', 'TicketsController@adminshow');
  }
);
