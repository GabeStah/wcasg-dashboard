@extends('account.layouts.default')

@section('content')
    <div class="card">
        <!-- Card header -->
        <div class="card-header">
            <!-- Title -->
            <h2 class="h3 mb-0">Update Credit Card</h2>
        </div>
        <div class="card-body pl-md-4 pl-lg-6">
            <h4 class="">Current Credit Card: <i class="{{ fa_icon_from_cc_brand(auth()->user()->card_brand ) }}"></i> **** {{ auth()->user()->card_last_four }}</h4>
            <form method="POST" action="{{ route('account.subscription.card.store') }}" id="card-form">
                {{ csrf_field() }}

                <div class="form-group">
                    <button type="submit" class="btn btn-primary" id="update">
                        Update Card
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="https://checkout.stripe.com/checkout.js"></script>
    <script>
        let handler = StripeCheckout.configure({
            key: '{{ config('services.stripe.key') }}',
            locale: 'auto',
            token: function (token) {
                let form = $('#card-form')

                $('#update').prop('disabled', true)

                $('<input>').attr({
                    type: 'hidden',
                    name: 'token',
                    value: token.id,
                }).appendTo(form)

                form.submit();
            }
        })

        $('#update').click(function (e) {
            handler.open({
                name: 'Laravel SaaS',
                currency: '{{ config('settings.cashier.currency') }}',
                key: '{{ config('services.stripe.key') }}',
                email: '{{ auth()->user()->email }}',
                panelLabel: 'Update card'
            })

            e.preventDefault();
        })
    </script>
@endsection
