@extends('account.layouts.default')
@section('title', $ticket->title)
@section('content')
<div class="container-fluid">
        @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
        @endif
    <div class="card">
        <!-- Card header -->
        <div class="card-header">
            <h2 class="mb-0">{{ $ticket->title }} - #{{ $ticket->ticket_id }}</h2>
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
                                    Status: <span class="badge badge-info"> {{ $ticket->status }}</span>
                                    @else
                                    Status: <span class="badge badge-danger"> {{ $ticket->status }}</span>
                                    @endif
                                </span>  | 
                                <cite>Created : {{ $ticket->created_at->diffForHumans() }}</cite>
                            </footer>
                        </blockquote>
                    </div>
                    <hr>
                    @include('tickets.comments')
                    <hr>
                    @include('tickets.reply')
            </div>
        </div>
    </div>

@endsection