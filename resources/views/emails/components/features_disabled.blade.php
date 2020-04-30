@extends('emails.components.base')

@section('content')
  <mj-column width="100%" vertical-align="middle" padding="12px 0px">
    <mj-text align="center" font-size="16px" line-height="24px" color="#424651">
      @component('emails.components.panel')
        {{ __('mail.subscription.features_disabled_text') }}
      @endcomponent
    </mj-text>
    @component('emails.components.button', ['font_size' => '24px', 'url' => route('account.index')])
      {{ __('mail.subscription.view_account_button_text') }}
    @endcomponent
  </mj-column>
@endsection