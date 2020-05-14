<?php

namespace CreatyDev\Http\Auth\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\ConfirmationToken;
use CreatyDev\Domain\Leads\Models\Lead;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ActivationController extends Controller {
  protected $redirectTo = '/account/sites';

  /**
   * ActivationController constructor.
   */
  public function __construct() {
    $this->middleware(['confirmation_token.expired:/']);
  }

  /**
   * @param Request $request
   * @param ConfirmationToken $token
   * @return RedirectResponse|Response
   * @throws Exception
   */
  public function activate(Request $request, ConfirmationToken $token) {
    if ($token->lead) {
      return $this->registerFromLead($request, $token);
    } elseif ($token->user) {
      return $this->activateUser($request, $token);
    }
  }

  protected function activateUser(Request $request, ConfirmationToken $token) {
    //activate user of given token
    $token->user->update([
      'activated' => true
    ]);

    //delete token
    $token->delete();

    // Create Stripe Customer
    $token->user->createOrGetStripeCustomer();

    //login user by id
    Auth::loginUsingId($token->user->id);

    // Get Lead's Plan, if applicable
    $lead = Lead::whereUserId($token->user->id)->first();
    if ($lead && $lead->plan_id) {
      //redirect user to intended route
      return redirect()->route('checkout.sites.index');
    } else {
      //redirect user to intended route
      return redirect()
        ->intended($this->redirectPath())
        ->withSuccess(
          'You are now signed in. Add or modify your sites to get started!'
        );
    }
  }

  protected function registerFromLead(
    Request $request,
    ConfirmationToken $token
  ) {
    return view('auth.register', [
      'lead' => $token->lead,
      'plan' => $token->lead->plan,
      'skip_checkout' => true,
      'alert' =>
        'Please complete the sign up form below to activate your account.'
    ]);
  }

  /**
   * Where redirect user on successful activation.
   *
   * @return string
   */
  protected function redirectPath() {
    return $this->redirectTo;
  }
}
