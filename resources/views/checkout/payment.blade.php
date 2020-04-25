@extends('layouts.app')

@section('styles')
<style>
    .payment {
        background-color: #fff;
    }

    .payment input,
    .payment label {
        font-family: Source Code Pro, Consolas, Menlo, monospace;
        font-size: 16px;
        font-weight: 500;
    }

    .payment .row {
        display: -ms-flexbox;
        display: flex;
        margin: 0 5px 10px;
    }

    .payment .field {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 0 10px;
    }

    .payment .field.half-width {
        width: calc(50% - 20px);
    }

    .payment .field.quarter-width {
        width: calc(25% - 20px);
    }

    .payment .baseline {
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background-color: #cfd7df;
        transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .payment label {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 8px;
        color: #cfd7df;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transform-origin: 0 50%;
        cursor: text;
        pointer-events: none;
        transition-property: color, transform;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .payment .input {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        padding-bottom: 7px;
        color: #32325d;
        background-color: transparent;
    }

    .payment .input::-webkit-input-placeholder {
        color: transparent;
        transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .payment .input::-moz-placeholder {
        color: transparent;
        transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .payment .input:-ms-input-placeholder {
        color: transparent;
        transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .payment .input.StripeElement {
        opacity: 0;
        transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        will-change: opacity;
    }

    .payment .input.focused,
    .payment .input:not(.empty) {
        opacity: 1;
    }

    .payment .input.focused::-webkit-input-placeholder,
    .payment .input:not(.empty)::-webkit-input-placeholder {
        color: #cfd7df;
    }

    .payment .input.focused::-moz-placeholder,
    .payment .input:not(.empty)::-moz-placeholder {
        color: #cfd7df;
    }

    .payment .input.focused:-ms-input-placeholder,
    .payment .input:not(.empty):-ms-input-placeholder {
        color: #cfd7df;
    }

    .payment .input.focused + label,
    .payment .input:not(.empty) + label {
        color: #aab7c4;
        transform: scale(0.85) translateY(-25px);
        cursor: default;
    }

    .payment .input.focused + label {
        color: #2295d7;
    }

    .payment .input.invalid + label {
        color: #ffa27b;
    }

    .payment .input.focused + label + .baseline {
        background-color: #2295d7;
    }

    .payment .input.focused.invalid + label + .baseline {
        background-color: #e25950;
    }

    .payment input, .payment button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        border-style: none;
    }

    .payment input:-webkit-autofill {
        -webkit-text-fill-color: #e39f48;
        transition: background-color 100000000s;
        -webkit-animation: 1ms void-animation-out;
    }

    .payment .StripeElement--webkit-autofill {
        background: transparent !important;
    }

    .payment input, .payment button {
        -webkit-animation: 1ms void-animation-out;
    }

    .payment button {
        display: block;
        width: calc(100% - 30px);
        height: 40px;
        margin: 40px 15px 0;
        background-color: #2295d7;
        border-radius: 4px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
    }

    .payment .error svg {
        margin-top: 0 !important;
    }

    .payment .error svg .base {
        fill: #e25950;
    }

    .payment .error svg .glyph {
        fill: #fff;
    }

    .payment .error .message {
        color: #e25950;
    }

    .payment .success .icon .border {
        stroke: #abe9d2;
    }

    .payment .success .icon .checkmark {
        stroke: #2295d7;
    }

    .payment .success .title {
        color: #32325d;
        font-size: 16px !important;
    }

    .payment .success .message {
        color: #8898aa;
        font-size: 13px !important;
    }

    .payment .success .reset path {
        fill: #2295d7;
    }
</style>
@endsection

@section('content')
    <div class="container" id="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title text-center">Payment Information</h2>
                        <div class="d-flex">
                            <div class="w-50 m-2">
                                <p>Please enter your credit card information below and confirm your billing address.</p>
                            </div>
                            <ul class="w-50 m-2 list-group">
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 class="my-0">{{ $plan->product()->name }}</h6>
                                        <small class="text-muted">{{ $plan->nickname }}</small>
                                    </div>
                                    <span class="text-muted">${{ $plan->basePrice() }}</span>
                                </li>
                                @if(isset($coupon) && $coupon->isValid())
                                    <li class="list-group-item d-flex justify-content-between bg-light">
                                        @if($coupon_used)
                                            <div class="text-danger">
                                                <h6 class="my-0" style="text-decoration: line-through;">{{ $coupon->toString() }}</h6>
                                                <h6 style="text-decoration: line-through;">{{ $coupon->id }}</h6>
                                                <small>This coupon has already been used by this account.  You may proceed at the normal price.</small>
                                            </div>
                                            <span class="text-danger">-$0.00</span>
                                        @else
                                            <div class="text-success">
                                                <h6 class="my-0">{{ $coupon->toString() }}</h6>
                                                <small>{{ $coupon->id }}</small>
                                            </div>
                                            <span class="text-success">-${{ $plan->discount() }}</span>
                                        @endif
                                    </li>
                                @endif
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Total ({{ isset($plan->currency) ? strtoupper($plan->currency) : 'USD' }})</span>
                                    @if($coupon_used)
                                        <strong>${{ $plan->basePrice() }}</strong>
                                    @else
                                        <strong>${{ $plan->price() }}</strong>
                                    @endif
                                </li>
                            </ul>
                        </div>
                        <div class="cell payment" id="payment">
                            <form method="POST" action="{{ route('checkout.payment.store') }}" id="payment-form">
                                @csrf

                                <input id="payment-method" name="payment-method" type="hidden"/>

                                <div class="row">
                                    <div class="field half-width">
                                        <div id="payment-card-number" class="input empty"></div>
                                        <label for="payment-card-number" data-tid="payment.form.card_number_label">Card number</label>
                                        <div class="baseline"></div>
                                    </div>
                                    <div class="field quarter-width">
                                        <div id="payment-card-expiry" class="input empty"></div>
                                        <label for="payment-card-expiry" data-tid="payment.form.card_expiry_label">Expiration</label>
                                        <div class="baseline"></div>
                                    </div>
                                    <div class="field quarter-width">
                                        <div id="payment-card-cvc" class="input empty"></div>
                                        <label for="payment-card-cvc" data-tid="payment.form.card_cvc_label">CVC</label>
                                        <div class="baseline"></div>
                                    </div>
                                </div>

                                <div data-locale-reversible>
                                    <div class="row">
                                        <div class="field">
                                            <input id="payment-name" data-tid="payment.form.name_placeholder" class="input" type="text" placeholder="John Doe" required="" autocomplete="name" value="{{ $user->name }}">
                                            <label for="payment-name" data-tid="payment.form.name_label">Name</label>
                                            <div class="baseline"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="field">
                                            <input id="payment-address" data-tid="payment.form.address_placeholder" class="input" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1" value="{{ $user->address1 }}">
                                            <label for="payment-address" data-tid="payment.form.address_label">Address</label>
                                            <div class="baseline"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="field">
                                            <input id="payment-address2" data-tid="payment.form.address2_placeholder" class="input" type="text" placeholder="#1234" required="" autocomplete="address-line2" value="{{ $user->address2 }}">
                                            <label for="payment-address2" data-tid="payment.form.address2_label">Address 2</label>
                                            <div class="baseline"></div>
                                        </div>
                                    </div>
                                    <div class="row" data-locale-reversible>
                                        <div class="field half-width">
                                            <input id="payment-city" data-tid="payment.form.city_placeholder" class="input" type="text" placeholder="San Francisco" required="" autocomplete="address-level2" value="{{ $user->city }}">
                                            <label for="payment-city" data-tid="payment.form.city_label">City</label>
                                            <div class="baseline"></div>
                                        </div>
                                        <div class="field quarter-width">
                                            <input id="payment-state" data-tid="payment.form.state_placeholder" class="input" type="text" placeholder="CA" required="" autocomplete="address-level1" value="{{ $user->state }}">
                                            <label for="payment-state" data-tid="payment.form.state_label">State</label>
                                            <div class="baseline"></div>
                                        </div>
                                        <div class="field quarter-width">
                                            <input id="payment-postal-code" data-tid="payment.form.postal_code_placeholder" class="input" type="text" placeholder="94107" required="" autocomplete="postal-code" value="{{ $user->postal_code }}">
                                            <label for="payment-postal-code" data-tid="payment.form.postal_code_label">Postal Code</label>
                                            <div class="baseline"></div>
                                        </div>
                                    </div>
                                </div>

                                <button id="card-button" class="btn btn-primary mt-3" data-secret="{{ $intent->client_secret }}">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="https://js.stripe.com/v3"></script>
    <script>
        const swal = window.swal;
        const stripe = Stripe('{{ config('services.stripe.key') }}');
        const elements = stripe.elements({
            fonts: [
                {
                    cssSrc: 'https://fonts.googleapis.com/css?family=Source+Code+Pro',
                },
            ],
            locale: 'auto'
        });

        // Floating labels
        const inputs = document.querySelectorAll('.cell.payment .input');
        Array.prototype.forEach.call(inputs, function(input) {
            input.addEventListener('focus', function() {
                input.classList.add('focused');
            });
            input.addEventListener('blur', function() {
                input.classList.remove('focused');
            });
            input.addEventListener('keyup', function() {
                if (input.value.length === 0) {
                    input.classList.add('empty');
                } else {
                    input.classList.remove('empty');
                }
            });
        });

        const elementStyles = {
            base: {
                color: '#32325D',
                fontWeight: 500,
                fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
                fontSize: '16px',
                fontSmoothing: 'antialiased',

                '::placeholder': {
                    color: '#CFD7DF',
                },
                ':-webkit-autofill': {
                    color: '#e39f48',
                },
            },
            invalid: {
                color: '#E25950',

                '::placeholder': {
                    color: '#FFCCA5',
                },
            },
        };

        const elementClasses = {
            focus: 'focused',
            empty: 'empty',
            invalid: 'invalid',
        };

        const cardNumber = elements.create('cardNumber', {
            style: elementStyles,
            classes: elementClasses,
        });
        cardNumber.mount('#payment-card-number');

        const cardExpiry = elements.create('cardExpiry', {
            style: elementStyles,
            classes: elementClasses,
        });
        cardExpiry.mount('#payment-card-expiry');

        const cardCvc = elements.create('cardCvc', {
            style: elementStyles,
            classes: elementClasses,
        });
        cardCvc.mount('#payment-card-cvc');

        // registerElements([cardNumber, cardExpiry, cardCvc], 'payment');

        const cardButton = document.getElementById('card-button');
        const clientSecret = cardButton.dataset.secret;

        cardButton.addEventListener('click', async (e) => {
            // Halt form submission.
            e.preventDefault();
            // Attempt to setup payment intent with provided details.
            const { setupIntent, error } = await stripe.confirmCardSetup(
                clientSecret, {
                    payment_method: {
                        card: cardNumber,
                        billing_details: {
                            name: document.getElementById('payment-name').value,
                            address: {
                                city: document.getElementById('payment-city').value,
                                line1: document.getElementById('payment-address').value,
                                line2: document.getElementById('payment-address2').value,
                                postal_code: document.getElementById('payment-postal-code').value,
                                state: document.getElementById('payment-state').value
                            }
                        }
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
                jQuery('#payment-method').val(setupIntent.payment_method);
                jQuery('#payment-form').submit();
            }
        });
    </script>
@endsection
