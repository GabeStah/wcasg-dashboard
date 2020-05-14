<?php

namespace CreatyDev\Http\Auth\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Auth\Events\UserSignedUp;
use CreatyDev\Domain\Leads\Models\Lead;
use CreatyDev\Domain\Subscriptions\Models\Plan;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\View\View;

class RegisterController extends Controller {
  /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

  use RegistersUsers;

  /**
   * Where to redirect users after registration.
   *
   * @var string
   */
  protected $redirectTo = '/account/dashboard';

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct() {
    $this->middleware('guest');
  }

  /**
   * Show the application registration form.
   *
   * @param Request $request
   * @return Application|Factory|Response|View
   */
  public function showRegistrationForm(Request $request) {
    $lead = null;
    if ($request->input('lead')) {
      $lead = Lead::find($request->input('lead'));
    }
    return view('auth.register', [
      'lead' => $lead,
      'plan' => $request->input('plan')
    ]);
  }

  /**
   * Get a validator for an incoming registration request.
   *
   * @param  array $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
  protected function validator(array $data) {
    $rules = [
      'first_name' => 'required|string|max:40',
      'last_name' => 'required|string|max:40',
      'username' => ['nullable', 'string', 'max:30'],
      'phone' => ['nullable', 'string'],
      'email' => [
        'required',
        'string',
        'email',
        'max:255',
        Rule::unique('users', 'email')->ignore(auth()->id())
      ],
      'company_name' => ['nullable', 'string', 'max:100'],
      'address1' => ['nullable', 'string', 'max:100', 'required_with:address2'],
      'address2' => ['nullable', 'string', 'max:100', 'different:address1'],
      'city' => ['nullable', 'string', 'max:100'],
      'state' => ['nullable', 'string', 'max:100'],
      'country' => ['nullable', 'string', 'max:100'],
      'postal_code' => ['nullable', 'string', 'max:50'],
      'terms' => 'required'
    ];

    return Validator::make($data, $rules);
  }

  /**
   * Create a new user instance after a valid registration.
   *
   * @param array $data
   * @return User
   */
  protected function create(array $data) {
    return User::create([
      'first_name' => $data['first_name'],
      'last_name' => $data['last_name'],
      'username' => $data['username'],
      'email' => $data['email'],
      'phone' => $data['phone'],
      'password' => bcrypt($data['password']),
      'activated' => false,
      'company_name' => $data['company_name'],
      'address1' => $data['address1'],
      'address2' => $data['address2'],
      'city' => $data['city'],
      'state' => $data['state'],
      'postal_code' => $data['postal_code'],
      'country' => $data['country']
    ]);
  }

  /**
   * Handle a registration request for the application.
   *
   * @param Request $request
   * @return Application|RedirectResponse|Response|Redirector
   */
  public function register(Request $request) {
    $this->validator($request->all())->validate();

    event(new Registered(($user = $this->create($request->all()))));

    // Get Lead
    $lead = Lead::find($request->input('lead_id'));
    // Get Plan
    $plan = Plan::find($request->input('plan_id'));

    if (!$plan && $lead->plan) {
      $plan = $lead->plan;
    }

    if ($lead && $plan) {
      // Create Stripe customer
      $user->createOrGetStripeCustomer();

      $subscription = $user
        ->newSubscription($plan->nickname, $plan->id)
        ->create(null);
    }

    // No lead, but plan passed via checkout flow.
    if (!$lead && $plan) {
      // Generate lead, with optional plan association from checkout flow
      Lead::create([
        'user_id' => $user->id,
        'plan_id' => $request->get('plan_id')
      ]);
    }

    $this->guard()->login($user);

    return $this->registered($request, $user);
  }

  /**
   * The user has been registered.
   *
   * @param Request $request
   * @param  mixed $user
   * @return mixed
   */
  protected function registered(Request $request, $user) {
    //log user out
    $this->guard()->logout();

    //send user an activation email
    event(new UserSignedUp($user));

    //redirect user
    return redirect(route('login'))->with([
      'success' => 'Please check your email for an activation link to proceed!'
    ]);
  }
}
