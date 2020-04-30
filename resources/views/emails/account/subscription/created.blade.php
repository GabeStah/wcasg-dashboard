@extends('emails.components.base')

@section('content')
  <mj-column width="100%" vertical-align="middle" padding="12px 0px">
    <mj-wrapper padding-top="0" padding-bottom="0" css-class="body-section">
      <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px" padding-top="0">
        <mj-column width="100%">
          <mj-text color="#212b35" font-size="14px" padding-top="0" padding-bottom="0">
            Hello {{ $user->first_name }}, <br />
            Here are the details for your recent purchase. You may login to the <a href="{{ route('account.index') }}">user dashboard</a> to begin the installation of your services. If you have any questions or concerns please reach out to us at <a href="mailto:{{ config('mail.support.address') }}">{{ config('mail.support.address') }}</a> or fill out a <a href="{{ route('ticket.index') }}">support ticket</a>.
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px">
        <mj-column width="100%">
          <mj-divider border-color="#DFE3E8" border-width="1px" />
          <mj-text color="#212b35" font-weight="bold" font-size="20px">
            Order Information
          </mj-text>
        </mj-column>

        <mj-column width="50%">
          <mj-text color="#212b35" font-size="14px" style="padding: 0 25px">
            Customer Information:<br />
            {{ $user->name }}<br />
            {{ $user->company_name }}<br />
            {{ $user->address1 }}<br />
            {{ $user->address2 }}<br />
            {{ $user->city }}, {{ $user->state }} {{ $user->postal_code }}
          </mj-text>

        </mj-column>
        <mj-column width="50%">
          <mj-text color="#212b35" font-size="14px" style="padding: 0 25px">
            Plan: {{ $plan->nickname }}<br />
            Order Number: {{ $subscription->id }}<br />
            Order Date: {{ \Carbon\Carbon::parse($subscription->created_at) }}<br />
            @if(isset($plan->coupon))
              Promo: {{ $plan->coupon->toString() }}<br />
              Code: {{ $plan->coupon->id }}<br />
              Discount: -${{ $plan->discount() }}<br />
            @endif
            Total: ${{ $plan->price() }}<br />
            Term: {{ $plan->interval }}
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section background-color="#ffffff" padding-left="15px" padding-right="15px">
        <mj-column width="100%">
          <mj-divider border-color="#DFE3E8" border-width="1px" />
          <mj-text color="#212b35" font-weight="bold" font-size="20px">
            Payment Information
          </mj-text>
        </mj-column>

        <mj-column width="100%">
          <mj-text color="#212b35" font-size="14px" style="padding: 0 25px">
            Payment Method: {{ $payment_method->type }}<br />
            @if($payment_method->type === 'card')
              Card Type: {{ $payment_method->card->brand }}<br />
              Card Ending {{ $payment_method->card->last4 }}<br />
            @endif
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section background-color="#ffffff" padding="0 15px 0 15px">
        <mj-column width="100%">
          <mj-button background-color="#167ff7" align="center" color="#ffffff" font-size="17px" font-weight="bold" href="{{ route('account.sites.index') }}" width="300px">
            Install Compliance Widget
          </mj-button>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  </mj-column>
@endsection