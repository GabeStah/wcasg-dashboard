@extends('admin.layouts.default')

@section('admin.breadcrumb')
    <li class='breadcrumb-item active'>Tickets</li>
@endsection

@section('admin.content')
<div class="container-fluid">
    <div class="card">
        <!-- Card header -->
        <div class="card-header">
            <h2 class="mb-0">#{{ $ticket->ticket_id }} - {{ $ticket->title }}</h2>
        </div>
        <!-- Card body -->
        <div class="card-body">
                    <div class="ticket-info">
                        <blockquote class="blockquote">
                          <h4>{{ $ticket->message }}</h4>
                          <footer class="blockquote-footer" style="font-size:14px;">
                              Category: {{ $ticket->category->name }} |
                              <span>
                                  @if($ticket->status == "Open")
                                  Status: <i class="bg-success" style="width: 0.5rem; height: 0.5rem;"></i> <span class="status"> {{ $ticket->status }}</span>
                                  @else
                                  Status: <i class="bg-danger" style="height: 0.5rem; width: 0.5rem"></i> <span class="status">{{ $ticket->status }}</span>
                                  @endif
                              </span>  |
                              <cite>Created : {{ $ticket->created_at->diffForHumans() }}</cite>
                          </footer>
                        </blockquote>
                        <div class="d-flex">
                          <table class="table table-sm table-striped table-borderless mr-3">
                            <tr>
                              <td>First Name</td>
                              <td>{{ $user->first_name }}</td>
                            </tr>
                            <tr>
                              <td>Last Name</td>
                              <td>{{ $user->last_name }}</td>
                            </tr>
                            <tr>
                              <td>Company Name</td>
                              <td>{{ $user->company_name }}</td>
                            </tr>
                            <tr>
                              <td>Username</td>
                              <td>{{ $user->username }}</td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>{{ $user->email }}</td>
                            </tr>
                            <tr>
                              <td>Stripe Id</td>
                              <td>{{ $user->stripe_id }}</td>
                            </tr>
                          </table>
                          <table class="table table-sm table-striped table-borderless ml-3">
                            <tr>
                              <td>Address</td>
                              <td>{{ $user->address1 }}</td>
                            </tr>
                            <tr>
                              <td>Address2</td>
                              <td>{{ $user->address2 }}</td>
                            </tr>
                            <tr>
                              <td>City</td>
                              <td>{{ $user->city }}</td>
                            </tr>
                            <tr>
                              <td>State</td>
                              <td>{{ $user->state }}</td>
                            </tr>
                            <tr>
                              <td>Postal Code</td>
                              <td>{{ $user->postal_code }}</td>
                            </tr>
                            <tr>
                              <td>Country</td>
                              <td>{{ $user->country }}</td>
                            </tr>
                          </table>
                        </div>
                    </div>
                    <hr>
                    @include('tickets.comments')
                    <hr>
                    @include('tickets.reply')
            </div>
        </div>
    </div>

@endsection