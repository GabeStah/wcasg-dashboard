@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Coupons</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="card">
        <div class="card-header">
            <strong>Create a Coupon</strong>
            <span>Coupon will be automatically added to Stripe.</span>
        </div>
        <div class="card-body">
            <p>Creating a Coupon has no effect on its own.  A Coupon <strong>must</strong> be applied to one or more Plans to have any effect (a Coupon can be assigned on the edit Plan page).</p>
            <p>A new Subscription using a Plan with an active Coupon will receive a discount based on the Coupon's configuration.</p>
            <p>For example, a Coupon with a <span class="font-italic">Percent Off</span> of <code>100</code> and a <span class="font-italic">Duration</span> of <code>once</code> will apply a one-time discount of 100% off the Plan's Subscription price.</p>
            <form action="{{ route('admin.coupons.store') }}" method="POST" class="form-horizontal offset-sm-2">
                @csrf

                @component('components.form.row-list', ['rows' => $rows])
                @endcomponent

                <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i>Create</button>
            </form>
        </div>
    </div>
</div>
@endsection