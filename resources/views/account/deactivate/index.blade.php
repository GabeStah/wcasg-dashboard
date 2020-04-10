@extends('account.layouts.default')

@section('content')
    <div class="card">
        <!-- Card header -->
        <div class="card-header">
                <!-- Title -->
                <h5 class="h3 mb-0"><i class="fas fa-exclamation-circle text-warning"></i> Deactivate Account</h5>
        </div>
        <div class="card-body pl-md-4 pl-lg-6">

            <form method="POST" action="{{ route('account.deactivate.store') }}">
                @csrf

                <div class="form-group{{ $errors->has('current_password') ? ' has-error' : '' }}">
                    <label for="current_password" class="control-label">Current password</label>

                    <input id="current_password" type="password"
                           class="form-control col-sm-8{{ $errors->has('current_password') ? ' is-invalid' : '' }}"
                           name="current_password"
                           required autofocus>

                    @if ($errors->has('current_password'))
                        <div class="invalid-feedback">
                            <strong>{{ $errors->first('current_password') }}</strong>
                        </div>
                    @endif
                </div>

                @subscriptionnotcancelled
                <div class="form-group">
                    <p class="form-text">
                        This will also cancel your active subscription.
                    </p>
                </div>
                @endsubscriptionnotcancelled

                <div class="form-group">
                    <button type="submit" class="btn btn-danger"
                        data-confirmation
                        data-confirmation-title="Deactivate Account"
                        data-confirmation-text="Are you sure you wish you deactivate your account?"
                        data-confirmation-icon="error"
                        data-confirmation-yes="Yes"
                        data-confirmation-no="No"
                    >
                        Deactivate account
                    </button>

                    <p class="form-text mt-4">
                        Read more on account deactivation in our
                        <a href="#">Privacy policy</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
@endsection
