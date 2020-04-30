@extends('emails.components.base')

@section('content')
  <mj-column width="100%" vertical-align="middle" padding="12px 0px">
    @component('emails.components.button', ['font_size' => '24px', 'url' => route('account.index')])
      {{ __('mail.subscription.view_account_button_text') }}
    @endcomponent
  </mj-column>
@endsection