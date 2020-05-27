<?php

Route::get('mail', function () {
  $user = SAASBoilerplate\Domain\Users\Models\User::find(1);
  $invoice = $user->invoices();
  // dd($invoice);
  $user->notify(new SAASBoilerplate\Domain\Notifications\InvoicePaid($invoice));
  return (new SAASBoilerplate\Domain\Notifications\InvoicePaid(
    $invoice
  ))->toArray($user);
});
