<?php

namespace CreatyDev\Http\Auth\Controllers;

use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Auth\Events\UserSignedUp;
use CreatyDev\Domain\Users\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Validation\Rule;

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
   * Get a validator for an incoming registration request.
   *
   * @param  array $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
  protected function validator(array $data) {
    $rules = [
      'first_name' => 'required|string|max:40',
      'last_name' => 'required|string|max:40',
      //      'profile_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
      'username' => [
        'nullable',
        'string',
        'max:30',
        Rule::unique('users', 'username')->ignore(auth()->id())
      ],
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
      //      'password' => ['required', new CurrentPassword()],
    ];

    return Validator::make($data, $rules);

    //    return Validator::make($data, [
    //      'first_name' => 'required|string|max:30',
    //      'last_name' => 'required|string|max:30',
    //      'username' => 'nullable|string|max:30|unique:users',
    //      'email' => 'required|string|email|max:255|unique:users',
    //      'password' => 'required|string|min:6|confirmed',
    //      'terms' => 'required'
    //    ]);
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
      'address1' => $data['company_name'],
      'address2' => $data['company_name'],
      'city' => $data['company_name'],
      'state' => $data['company_name'],
      'postal_code' => $data['company_name'],
      'country' => $data['company_name']
    ]);
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
    return redirect($this->redirectPath())->withSuccess(
      'Please check your email for an activation link'
    );
  }
}
