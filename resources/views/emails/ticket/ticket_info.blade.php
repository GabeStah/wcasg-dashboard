<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Support Ticket Information</title></head>
<body><p> Thank you {{ ucfirst($user->name) }} for contacting our support team. A support ticket has been opened for
  you. You will be notified by email when we've responded. The details of your ticket are shown below: </p>
<p>Title: {{ $ticket->title }}</p>
<p>Priority: {{ $ticket->priority }}</p>
<p>Status: {{ $ticket->status }}</p>
<p> You can view the ticket at any time at {{ url('account/tickets/'. $ticket->ticket_id) }} </p></body>
</html>