@extends('emails.components.base')

@section('content')
  <mj-column width="100%" vertical-align="middle" padding="12px 0px">
    <mj-text align="center" font-size="16px" line-height="24px" color="#424651">
      Your support ticket with ID #{{ $ticket->ticket_id }} has been marked as resolved and closed.
    </mj-text>
  </mj-column>
@endsection