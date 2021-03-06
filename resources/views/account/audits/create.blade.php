@extends('account.layouts.default')
@section('title', 'Perform an Accessibility Audit')
@section('content')
  <div class="container-fluid">
    <div class="card">
      <!-- Card header -->
      <div class="card-header">
        <h2 class="mb-0"><i class="fas fa-ticket-alt"></i> Create a New Audit</h2>
      </div>
      <!-- Card body -->
      <div class="card-body">
        <audit-account pusher-key="{!! config('broadcasting.connections.pusher.key') !!}" :sites="{{ $sites }}"></audit-account>
      </div>
    </div>
  </div>
@endsection