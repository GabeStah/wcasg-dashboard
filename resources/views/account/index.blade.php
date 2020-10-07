@extends('account.layouts.default')

@section('content')
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Account Overview</h2>
            <div class="pl-md-4 pl-lg-6">

                <div class="row py-3">
                    <div class="col-md-4">Name</div>
                    <div class="col-md-8 text-sm text-gray">{{ auth()->user()->name }}</div>
                </div>

                <div class="row py-3">
                    <div class="col-md-4">Email Address</div>
                    <div class="col-md-8 text-sm text-gray">{{ auth()->user()->email }}</div>
                </div>

                @subscribed
                    @notpiggybacksubscription
                        <div class="row py-3">
                            <div class="col-md-4">Plan</div>
                            <div class="col-md-8 text-sm text-gray">{{ auth()->user()->plan->nickname }}</div>
                        </div>
                    @endnotpiggybacksubscription
                @endsubscribed

                <div class="row py-3">
                    <div class="col-md-4">Joined</div>
                    <div class="col-md-8 text-sm text-gray">{{ auth()->user()->created_at->diffForHumans() }}</div>
                </div>
            </div>
        </div>
    </div>
@endsection