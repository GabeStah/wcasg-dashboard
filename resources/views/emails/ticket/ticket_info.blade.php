@extends('emails.components.base')

@section('content')
  <mj-section background-color="#fff">
    <mj-column width="100%" vertical-align="middle">
      <mj-text font-size="16px" line-height="24px" color="#424651">Thank you {{ ucfirst($user->name) }} for contacting our support team. A support ticket has been opened and you will be notified by email when we've responded.</mj-text>
    </mj-column>
  </mj-section>

  <mj-section background-color="#fff">
    <mj-column width="100%" vertical-align="middle">
      <mj-text font-size="18px" line-height="24px" padding-bottom="8px" color="#242b3d" font-weight="bold">Ticket Information</mj-text>
      <mj-text font-size="16px" line-height="24px" color="#424651">Title: {{ $ticket->title }}</mj-text>
      <mj-text font-size="16px" line-height="24px" color="#424651">Priority: {{ $ticket->priority }}</mj-text>
      <mj-text font-size="16px" line-height="24px" color="#424651">Status: {{ $ticket->status }}</mj-text>
    </mj-column>
  </mj-section>

  <mj-section background-color="#fff">
    <mj-column width="100%" vertical-align="middle">
      <mj-text font-size="16px" line-height="24px" color="#424651">You can view the ticket at any time at {{ url('account/tickets/'. $ticket->ticket_id) }}</mj-text>
    </mj-column>
  </mj-section>
@endsection