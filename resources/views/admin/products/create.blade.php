@extends('admin.layouts.default')

@section('admin.breadcrumb')
    <li class='breadcrumb-item active'>Product</li>
@endsection

@section('admin.content')
    <div class="clearfix">
        <div class="card">
            <div class="card-header">
                <strong>Create Product</strong>
            </div>
            @if (session('status'))
                <div class="alert alert-success">
                    {{ session('status') }}
                </div>
            @endif
            <div class="card-body">
                <form action="{{ route('admin.products.store') }}" method="POST" class="form-horizontal offset-sm-2">
                    {!! csrf_field() !!}

                    @component('components.form.row-list', ['rows' => $rows])
                    @endcomponent

                    <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Create</button>
                </form>
            </div>
        </div>
    </div>
@endsection