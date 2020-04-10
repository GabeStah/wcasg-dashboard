@extends('account.layouts.default')

@section('content')
    <div class="card">

        <div class="card-body">
            <h2 class="card-title">Change Subscription</h2>
            <p class="card-subtitle my-4 pl-md-4 pl-lg-6">
                You are currently on the <strong>{{ auth()->user()->plan->nickname }}</strong> plan, at a rate of:
                <strong>{{ config('settings.cashier.symbol') }}{{ cents_to_decimal(auth()->user()->plan->amount) }} per {{ auth()->user()->plan->interval }}</strong>
            </p>

            <form method="POST" action="{{ route('account.subscription.swap.store') }}" class="pl-md-4 pl-lg-6">
                @csrf

                <div class="form-group row{{ $errors->has('plan') ? ' has-error' : '' }}">
                    <label for="plan" class="col-md-4 control-label">Plan</label>

                    <div class="col-md-6">

                        <select name="plan" id="plan"
                                class="form-control custom-select{{ $errors->has('plan') ? ' is-invalid' : '' }}"
                                required>
                            @foreach($plans as $plan)
                                <option value="{{ $plan->id }}"
                                        {{ request('plan') === $plan->id ||
                                        old('plan') === $plan->id ? 'selected' : '' }}>
                                    {{ $plan->nickname }} (${{ cents_to_decimal($plan->amount) }} per {{ $plan->interval }})
                                </option>
                            @endforeach
                        </select>

                        @if ($errors->has('plan'))
                            <div class="invalid-feedback">
                                <strong>{{ $errors->first('plan') }}</strong>
                            </div>
                        @endif
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="btn btn-primary"
                            data-confirmation
                            data-confirmation-title="Change Subscription"
                            data-confirmation-text="Are you sure you wish you change your subscription?"
                            data-confirmation-icon="warning"
                            data-confirmation-yes="Yes"
                            data-confirmation-no="No"
                        >
                            Change Subscription
                        </button>
                    </div>
                </div>
            </form>

            <form method="POST" action="{{ route('account.subscription.cancel.store') }}" class="pl-md-4 pl-lg-6 mt--2">
                @csrf

                <div class="form-group row">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="btn btn-danger"
                            data-confirmation
                            data-confirmation-title="Cancel Subscription"
                            data-confirmation-text="Are you sure you wish you cancel your subscription?"
                            data-confirmation-icon="warning"
                            data-confirmation-yes="Yes"
                            data-confirmation-no="No"
                        >Cancel Subscription</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection