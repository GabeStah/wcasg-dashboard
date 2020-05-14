@extends('layouts.app')

@section('content')
    <div class="container" id="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                        @if(isset($alert))
                            @component('layouts.partials.alerts._alerts_component', [
                                'type' => 'success'
                                ])
                                {{ $alert }}
                            @endcomponent
                        @endif
                        <h2 class="card-title">Sign Up</h2>
                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            @if(isset($lead))
                                <input type="hidden" name="lead_id" value="{{ $lead->id }}">
                            @endif

                            @if(isset($plan))
                            <input type="hidden" name="plan_id" value="{{ $plan->id }}">
                            @endif

                            @if(isset($skip_checkout))
                                <input type="hidden" name="skip_checkout" value="{{ $skip_checkout }}">
                            @endif

                            <!-- Controller is provided through vendor lib, so row data must be defined here. -->
                            @component('components.form.row-list', ['rows' => [
                                ['field' => 'first_name', 'title' => 'First Name', 'required' => true],
                                ['field' => 'last_name', 'title' => 'Last Name', 'required' => true],
                                ['field' => 'username', 'title' => 'Username', 'required' => true],
                                ['field' => 'email', 'title' => 'Email', 'required' => true, 'type' => 'email'],
                                ['field' => 'phone', 'title' => 'Phone'],
                                ['field' => 'company_name', 'title' => 'Company Name'],
                                ['field' => 'address1', 'title' => 'Address'],
                                ['field' => 'address2', 'title' => 'Address 2'],
                                ['field' => 'city', 'title' => 'City'],
                                ['field' => 'state', 'title' => 'State'],
                                ['field' => 'postal_code', 'title' => 'Postal Code'],
                                ['field' => 'country', 'title' => 'Country', 'default' => 'United States'],
                                ['field' => 'password', 'title' => 'Password', 'required' => true, 'type' => 'password']
                            ], 'data' => isset($lead) ? $lead : null])
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