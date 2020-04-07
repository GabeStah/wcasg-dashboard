@extends('account.layouts.default')

@section('content')
    <div class="card">
        <!-- Card header -->
        <div class="card-header">
            <!-- Title -->
            <h2 class="h3 mb-0">Update Credit Card</h2>
        </div>
        <div class="card-body pl-md-4 pl-lg-6">
            <h4 class="mb-3">Current Credit Card: <i class="{{ fa_icon_from_cc_brand(auth()->user()->card_brand ) }}"></i> **** {{ auth()->user()->card_last_four }}</h4>

            <form method="POST" action="{{ route('account.subscription.card.store') }}" id="card-form">
                {{ csrf_field() }}

                <div class="form-group">
                    <input id="payment_method" name="payment_method" type="hidden"/>

                    <!-- Stripe Elements Placeholder -->
                    <div id="card-element" class="w-25"></div>

                    <button id="card-button" class="btn btn-primary mt-3" data-secret="{{ $intent->client_secret }}">
                        Update Card
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="https://js.stripe.com/v3"></script>
    <script>
        const swal = window.swal;
        const stripe = Stripe('{{ config('services.stripe.key') }}');
        const elements = stripe.elements();
        const cardElement = elements.create('card');

        cardElement.mount('#card-element');

        const cardHolderName = document.getElementById('card-holder-name');
        const cardButton = document.getElementById('card-button');
        const clientSecret = cardButton.dataset.secret;

        cardButton.addEventListener('click', async (e) => {
            // Halt form submission.
            e.preventDefault();
            // Attempt to setup payment intent with provided details.
            const { setupIntent, error } = await stripe.confirmCardSetup(
                clientSecret, {
                    payment_method: {
                        card: cardElement,
                        billing_details: { name: '{{ auth()->user()->name }}' }
                    }
                }
            );

            if (error) {
                // Show popup error to user.
                await swal({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                    button: 'OK',
                    dangerMode: true,
                });
            } else {
                // Pass payment method id to backend controller
                jQuery('#payment_method').val(setupIntent.payment_method);
                jQuery('#card-form').submit();
            }
        });
    </script>
@endsection
