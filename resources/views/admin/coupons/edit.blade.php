@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Coupon</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="card">
        <div class="card-header">
            <strong>Update Coupon</strong>
        </div>
        <div class="card-body">
            <p>Stripe restricts updating any field on an existing Coupon except for the <span class="font-italic">Name</span>.  If you wish to drastically adjust an existing Coupon please delete it and add a new replacement.</p>
            <form action="{{ route('admin.coupons.update', $coupon->id) }}" method="POST" class="form-horizontal offset-sm-2">
                @csrf
                @method('PUT')

                @component('components.form.row-list', ['data' => $coupon, 'rows' => $rows])
                @endcomponent

                <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Save</button>
            </form>
        </div>
    </div>
</div>
@endsection