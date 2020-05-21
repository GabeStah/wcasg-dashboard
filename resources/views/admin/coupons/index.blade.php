@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Coupons</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="col-lg">
        <div class="card">
            <div class="card-header">
                <i class="fa fa-align-justify"></i>Coupons
            </div>
            <div class="card-body">
                <table class="table table-responsive-sm table-striped">
                    <thead>
                        <tr>
                            <th>Coupon Code</th>
                            <th>Discount %</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Duration (in months)</th>
                            <th>Max Redemptions</th>
                            <th>Date</th>
                            <th>Redeem By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($coupons as $coupon )
                        <tr>
                            <td><span class="badge badge-success" style="font-size:14px">{{ $coupon->code }}</span> </td>
                            <td><span class="badge badge-info">{{ $coupon->percent_off }}%</span> </td>
                            <td>{{ $coupon->name }}</td>
                            <td>{{ $coupon->duration }}</td>
                            <td>{{ $coupon->duration_in_months }}</td>
                            <td>{{ $coupon->max_redemptions }}</td>
                            <td>{{ \Carbon\Carbon::parse($coupon->created_at) }}</td>
                            <td>{{ isset($coupon->redeem_by) ? \Carbon\Carbon::parse($coupon->redeem_by) : '' }}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="User Actions">
                                    <a href="{{ route('admin.coupons.edit', $coupon->id) }}" data-toggle="tooltip" data-placement="top" title="" class="btn btn-primary" data-original-title="Edit"><i class="fa fa-edit "></i></a>
                                    <form action="{{ route('admin.coupons.destroy', $coupon->id)}}" method="post">
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
            </div>
        </div>
    </div>
</div>
@endsection