<?php

namespace CreatyDev\Http\Account\Controllers\Subscription;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Account\Mail\Subscription\CardUpdated;

class SubscriptionCardController extends Controller {
  /**
   * Show update card form.
   *
   * @param Request $request
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request) {
    return view('account.subscription.card.index', [
      'intent' => auth()
        ->user()
        ->createSetupIntent()
    ]);
  }

  public function store(Request $request) {
    $request->validate([
      'payment_method' => 'required|string'
    ]);

    $request->user()->updateDefaultPaymentMethod(request('payment_method'));

    // send email
    Mail::to($request->user())->send(new CardUpdated());

    return redirect()
      ->route('account.index')
      ->withSuccess('Your card has been updated.');
  }
}
