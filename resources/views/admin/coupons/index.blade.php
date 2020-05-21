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
                            <th>Coupon Code <info-icon :text="__('admin.coupon.code')"/></th>
                            <th>Path <info-icon :text="__('admin.coupon.path')"/></th>
                            <th>Discount % <info-icon :text="__('admin.coupon.percent_off')"/></th>
                            <th>Name <info-icon :text="__('admin.coupon.name')"/></th>
                            <th>Duration <info-icon :text="__('admin.coupon.duration')"/></th>
                            <th>Duration (in months) <info-icon :text="__('admin.coupon.duration_in_months')"/></th>
                            <th>Max Redemptions <info-icon :text="__('admin.coupon.max_redemptions')"/></th>
                            <th>Date</th>
                            <th>Redeem By <info-icon :text="__('admin.coupon.redeem_by')"/></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($coupons as $coupon )
                        <tr>
                            <td>
                                <a
                                    id="coupon-code"
                                    href="#"
                                    data-toggle="tooltip"
                                    data-delay='{"show": "100", "hide": "500"}'
                                    data-trigger="click"
                                    title="Copied!"
                                    data-placement="top"
                                    data-clipboard-text="{{ $coupon->code }}"
                                >
                                    <span class="badge badge-success font-lg">{{ $coupon->code }}<i class="fa fa-copy ml-1"></i></span>
                                </a>
                            </td>
                            <td>
                                @isset($coupon->path)
                                    <a
                                        id="coupon-path"
                                        href="#"
                                        data-toggle="tooltip"
                                        data-delay='{"show": "100", "hide": "500"}'
                                        data-trigger="click"
                                        title="Copied!"
                                        data-placement="top"
                                        data-clipboard-text="{{ $coupon->getPathRoute() }}"
                                    >
                                        <span class="badge badge-info font-lg">/{{ $coupon->path }}<i class="fa fa-copy ml-1"></i></span>
                                    </a>
                                @endisset
                            </td>
                            <td><span>{{ $coupon->percent_off }}%</span> </td>
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

@section('scripts')
    <script type="text/javascript" src="{{ asset('assets/js/vendor/clipboard.min.js') }}"></script>
    <script>
        const clipboard = new ClipboardJS(document.querySelectorAll('#coupon-code, #coupon-path'));
        // Hide tooltip when leaving after click
        clipboard.on('success', e => {
            $('[data-toggle="tooltip"]').on('mouseleave', function () {
                $(this).tooltip('hide');
            });
        })
    </script>
@endsection