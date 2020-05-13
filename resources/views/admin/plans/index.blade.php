@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Plans</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="col-lg">
        <div class="card">
            <div class="card-header">
                <i class="fa fa-align-justify"></i> Plans
            </div>
            <div class="card-body">
                <table class="table table-responsive-sm table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Interval</th>
                            <th>Amount</th>
                            <th>Trial Period Days</th>
                            <th>Type</th>
                            <th>Coupon</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Webhook</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($plans as $plan )
                        <tr>
                            <td>{{ $plan->nickname }}</td>
                            <td><a href="{{ route('admin.products.edit', $plan->product_id) }}">{{ $products[$plan->product_id]->name }}</a></td>
                            <td>{{ $plan->interval }}</td>
                            <td>${{ cents_to_decimal($plan->amount) }}</td>
                             <td>{{ $plan->trial_period_days }}</td>
                            <td>
                                @if ($plan->teams_enabled)
                                <span class="badge badge-success"> Team Plan</span>
                                @else
                                <span class="badge badge-info"> Normal plan</span>
                                @endif
                            </td>
                            <td>
                                @if(isset($plan->coupon))
                                    <a href="{{ route('admin.coupons.edit', $plan->coupon->id) }}">
                                        <span>{{ $plan->coupon->id }}</span>
                                    </a>
                                @endif
                            </td>
                            <td>{{ $plan->created_at->diffForHumans() }}</td>
                            <td>
                                @if ($plan->active)
                                <span class="badge badge-success"> Active</span>
                                @else
                                <span class="badge badge-danger"> Inactive</span>
                                @endif
                            </td>
                            <td>
                                <a id="webhook-url" href="#" data-toggle="tooltip" data-delay='{"show": "100", "hide": "500"}' data-trigger="click" title="Copied!" data-placement="top" data-clipboard-text="{{ $plan->getWebhookRoute() }}" class="btn btn-secondary"><i class="fa fa-copy "></i></a>
                            </td>
                            <td>
                                <div class="btn-group" role="group" aria-label="User Actions">
                                    <a href="{{ route('admin.plans.edit', $plan->id) }}" data-toggle="tooltip" data-placement="top" title="" class="btn btn-primary" data-original-title="Edit"><i class="fa fa-edit "></i></a>
                                    <form action="{{ route('admin.plans.destroy', $plan->id)}}" method="post">
                                        @csrf
                                        @method('DELETE')
                                        <button class="btn btn-danger" type="submit"><i class="fa fa-trash-o "></i></button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $plans->links() }}
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script type="text/javascript" src="{{ asset('assets/js/vendor/clipboard.min.js') }}"></script>
<script>
    const clipboard = new ClipboardJS('#webhook-url');
    // Hide tooltip when leaving after click
    clipboard.on('success', e => {
        $('#webhook-url[data-toggle="tooltip"]').on('mouseleave', function () {
            $(this).tooltip('hide');
        });
    })
</script>
@endsection