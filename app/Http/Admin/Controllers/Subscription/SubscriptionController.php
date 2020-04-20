<?php

namespace CreatyDev\Http\Admin\Controllers\Subscription;

use CreatyDev\Solarix\Cashier\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use CreatyDev\App\Controllers\Controller;

class SubscriptionController extends Controller {
  /**
   * Display all Subscription view.
   *
   * @return \Illuminate\Http\Response
   */
  public function index() {
    $subscriptions = Subscription::paginate(config('app.pagination.quantity'));
    return view('admin.subscriptions.index', compact('subscriptions'));
  }
}
