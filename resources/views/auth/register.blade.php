@extends('layouts.app')

@section('content')
    <div class="container" id="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Sign Up</h4>
                        <div>@include('layouts.partials.alerts._alerts')</div>
                        <form method="POST" action="{{ route('register') }}">
                            {{ csrf_field() }}

                            @component('auth.text-field', ['field' => 'first_name', 'title' => 'First Name', 'required' => true])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'last_name', 'title' => 'Last Name', 'required' => true])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'username', 'title' => 'Username', 'required' => true])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'email', 'title' => 'Email', 'required' => true, 'type' => 'email'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'phone', 'title' => 'Phone'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'company_name', 'title' => 'Company Name'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'address1', 'title' => 'Address'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'address2', 'title' => 'Address 2'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'city', 'title' => 'City'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'state', 'title' => 'State'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'postal_code', 'title' => 'Postal Code'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'country', 'title' => 'Country', 'default' => 'United States'])
                            @endcomponent

                            @component('auth.text-field', ['field' => 'password', 'title' => 'Password', 'required' => true, 'type' => 'password'])
                            @endcomponent

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 control-label">Confirm Password *</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control"
                                           name="password_confirmation" required>
                                </div>
                            </div>

                            <div class="form-group row{{ $errors->has('terms') ? ' has-error' : '' }}">
                                <div class="col-md-6 offset-md-4">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" name="terms"
                                               class="custom-control-input{{ $errors->has('terms') ? ' is-invalid' : '' }}"
                                               id="terms">
                                        <label class="custom-control-label" for="terms">
                                            I accept the <a href="#" target="_blank">Terms of Service</a>
                                        </label>

                                        @if ($errors->has('terms'))
                                            <div class="invalid-feedback">
                                                <strong>{{ $errors->first('terms') }}</strong>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection