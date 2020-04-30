@extends('emails.components.base')

@section('content')
  <mj-column width="100%" vertical-align="middle" padding="12px 0px">
    <mj-text align="center" font-size="18px" line-height="24px" padding-bottom="8px" color="#242b3d" font-weight="bold">You have been removed as a member of {{ $team->name }}.</mj-text>
    @component('emails.components.button', ['font_size' => '24px', 'url' => route('account.index')])
      {{ __('mail.subscription.view_account_button_text') }}
    @endcomponent
  </mj-column>
@endsection