<?php

namespace CreatyDev\Http\Subscription\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Subscriptions\Requests\SubscriptionStoreRequest;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Response;
use Illuminate\View\View;

class SubscriptionController extends Controller {
  /**
   * Display a listing of the resource.
   *
   * @return Factory|Response|View
   */
  public function index() {
    return view('subscriptions.index');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param SubscriptionStoreRequest $request
   * @return Response
   */
  public function store(SubscriptionStoreRequest $request) {
    $subscription = $request
      ->user()
      ->newSubscription($request->plan->nickname, $request->plan->id);

    if ($request->has('coupon')) {
      $subscription->withCoupon($request->coupon);
    }

    $subscription->create($request->token);

    return redirect()
      ->route('account.dashboard')
      ->withSuccess('Thanks for becoming a subscriber.');
  }
}
