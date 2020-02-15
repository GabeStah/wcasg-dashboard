<?php

namespace CreatyDev\Domain\Account\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use CreatyDev\Domain\Auth\Rules\CurrentPassword;

class ProfileStoreRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize() {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules() {
    return [
      'first_name' => 'required|string|max:40',
      'last_name' => 'required|string|max:40',
      'profile_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
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
      'postal_code' => ['nullable', 'string', 'max:50']
      //      'password' => ['required', new CurrentPassword()],
    ];
  }
}
