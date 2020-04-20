@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Subscriptions</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="col-lg">
        <div class="card">
            <div class="card-header">
                <i class="fa fa-align-justify"></i> Subscriptions
            </div>
            <div class="card-body">
                <table class="table table-responsive-sm table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Company</th>
                            <th>Plan</th>
                            <th>Trial end</th>
                            {{-- <th>Trial Day</th> --}}
                            <th>Plan end</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($subscriptions as $subscription )
                        <tr>
                            <td>{{ $subscription->user_id }}</td>
                            <td>{{ $subscription->user->company_name }}</td>
                            <td>{{ $subscription->plan_id }}</td>
                            <td>{{ $subscription->trial_ends_at }}</td>
                            {{-- <td>{{ $plan->trial_period_days }}</td> --}}
                            <td>
                                {{ $subscription->ends_at }}
                            </td>
                            <td>{{ \Carbon\Carbon::parse($subscription->updated_at) }}</td>
                            <td>{{ \Carbon\Carbon::parse($subscription->created_at) }}</td>
                            <td>
                                 {{ $subscription->stripe_status }}
                            </td>
                            <td>
                            </td>
                        </tr>
                        @endforeach
                         </tbody>
                </table>
                {{ $subscriptions->links() }}
            </div>
        </div>
    </div>
</div>
@endsection