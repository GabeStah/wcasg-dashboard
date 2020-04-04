<?php

namespace CreatyDev\Http\Ticket\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use CreatyDev\App\Controllers\Controller;
use CreatyDev\Domain\Ticket\Models\Ticket;
use CreatyDev\Domain\Ticket\Mail\SendTicket;
use CreatyDev\Domain\Ticket\Models\Category;
use Illuminate\Validation\ValidationException;

class TicketsController extends Controller {
  public function __construct() {
    $this->middleware('auth');
  }

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function index() {
    $tickets = Ticket::paginate(10);

    return view('admin.tickets.index', compact('tickets'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  public function create() {
    $categories = Category::all();

    return view('tickets.create', compact('categories'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param Request    $request
   * @param SendTicket $mailer
   *
   * @return Response
   * @throws ValidationException
   */
  public function store(Request $request, SendTicket $mailer) {
    $this->validate($request, [
      'title' => 'required',
      'category' => 'required',
      'priority' => 'required',
      'message' => 'required'
    ]);

    $ticket = new Ticket([
      'title' => $request->input('title'),
      'user_id' => Auth::user()->id,
      'ticket_id' => strtoupper(Str::random(10)),
      'category_id' => $request->input('category'),
      'priority' => $request->input('priority'),
      'message' => $request->input('message'),
      'status' => 'Open'
    ]);

    $ticket->save();

    $mailer->sendTicketInformation(Auth::user(), $ticket);

    return redirect()
      ->route('ticket.show', $ticket->ticket_id)
      ->with(
        'status',
        "A ticket with ID: #$ticket->ticket_id has been opened."
      );
  }

  public function userTickets() {
    $categories = Category::all();
    $tickets = Ticket::where('user_id', Auth::user()->id)->paginate(10);

    return view('tickets.user_tickets', compact('tickets', 'categories'));
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return Response
   */
  public function show($ticket_id) {
    $ticket = Ticket::where('ticket_id', $ticket_id)->firstOrFail();

    return view('tickets.show', compact('ticket'));
  }

  // Show single ticket on admin panel
  public function adminshow($ticket_id) {
    $ticket = Ticket::where('ticket_id', $ticket_id)->firstOrFail();
    $user = $ticket->user;

    return view('admin.tickets.show', ['ticket' => $ticket, 'user' => $user]);
  }

  public function close($ticket_id, SendTicket $mailer) {
    $ticket = Ticket::where('ticket_id', $ticket_id)->firstOrFail();

    $ticket->status = 'Closed';

    $ticket->save();

    $ticketOwner = $ticket->user;

    $mailer->sendTicketStatusNotification($ticketOwner, $ticket);

    return redirect()
      ->back()
      ->with('status', 'The ticket has been closed.');
  }
}
