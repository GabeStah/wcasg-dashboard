@extends('layouts.app')

@section('content')
<div class="container" id="container">
    <div class="content">
        <div class="heading text-center">
            <h2>Accessibility Audits</h2>
            <div class="line"></div>
        </div>

        <audit-public pusher-key="{!! config('broadcasting.connections.pusher.key') !!}"></audit-public>
    </div>
</div>
@endsection
