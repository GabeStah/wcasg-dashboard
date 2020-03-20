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
        @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
        @endif
        <div class="card-body">
            <form action="{{ route('admin.products.update', $product->id) }}" method="POST" class="form-horizontal offset-sm-2">
                    {!! csrf_field() !!}
                    @method('PUT')

                @component('layouts.partials.forms.text-field', ['item' => $product, 'field' => 'name', 'title' => 'Name*', 'required' => true])
                @endcomponent

                @component('layouts.partials.forms.text-field', ['item' => $product, 'field' => 'unit_label', 'title' => 'Unit Label*', 'required' => true, 'info' => __('admin.product.unit_label')])
                @endcomponent

                @component('layouts.partials.forms.text-field', ['item' => $product, 'field' => 'description', 'title' => 'Description'])
                @endcomponent

                @component('layouts.partials.forms.text-field', ['item' => $product, 'field' => 'statement_descriptor', 'title' => 'Statement Descriptor', 'info' => __('admin.product.statement_descriptor')])
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