@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Product</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="card">
        <div class="card-header">
            <strong>Update Product</strong>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.products.update', $product->id) }}" method="POST" class="form-horizontal offset-sm-2">
                    @csrf
                    @method('PUT')

                @component('components.form.row-list', ['data' => $product, 'rows' => $rows])
                @endcomponent

                <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Update</button>
            </form>
        </div>
        <div class="card-footer">
            <button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
        </div>
    </div>
</div>
@endsection