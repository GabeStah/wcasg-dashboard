<?php

namespace CreatyDev\Domain\Ticket\Mail;

use CreatyDev\Domain\Ticket\Models\Ticket;
use CreatyDev\Solarix\Mail\Mailable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Mail\Mailer;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendTicket extends Mailable {
  use Queueable, SerializesModels;

  protected $mailer;
  public $to_address;
  public $subject;
  public $view;
  protected $data = [];

  /**
   * SendTicket constructor.
   * @param $mailer
   */
  public function __construct(Mailer $mailer) {
    parent::__construct();
    $this->mailer = $mailer;
  }

  public function sendTicketInformation($user, Ticket $ticket) {
    $this->to_address = $user->email;
    $this->subject = "[Ticket ID: $ticket->ticket_id] $ticket->title";
    $this->view = 'emails.ticket.ticket_info';
    $hero_title = 'Ticket Confirmation';
    $hero_text = "Your ticket [ID: $ticket->ticket_id] has been submitted";
    $this->data = compact('user', 'ticket', 'hero_title', 'hero_text');

    return $this->deliver();
  }

  public function sendTicketComments(
    $ticketOwner,
    $user,
    Ticket $ticket,
    $comment
  ) {
    $this->to_address = $ticketOwner->email;
    $this->subject = "RE: $ticket->title (Ticket ID: $ticket->ticket_id)";
    $this->view = 'emails.ticket.ticket_comments';
    $hero_title = 'New Ticket Comment';
    $hero_text = "$ticket->title (Ticket ID: $ticket->ticket_id)";
    $this->data = compact(
      'ticketOwner',
      'user',
      'ticket',
      'comment',
      'hero_title',
      'hero_text'
    );

    return $this->deliver();
  }

  public function sendTicketStatusNotification($ticketOwner, Ticket $ticket) {
    $this->to_address = $ticketOwner->email;
    $this->subject = "RE: $ticket->title (Ticket ID: $ticket->ticket_id)";
    $this->view = 'emails.ticket.ticket_status';
    $hero_title = 'Support Ticket Updated';
    $hero_text = 'Hello, ' . ucfirst($ticketOwner->name);
    $this->data = compact('ticketOwner', 'ticket', 'hero_title', 'hero_text');

    return $this->deliver();
  }

  public function deliver() {
    Mail::to($this->to_address)->send($this);
  }

  public function build() {
    return $this->mjml($this->view, $this->data);
  }
}
