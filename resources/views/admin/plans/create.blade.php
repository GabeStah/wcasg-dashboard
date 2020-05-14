@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Plan</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="card">
        <div class="card-header">
            <strong>Create a Plan</strong> 
            <span class="center"> {{ __('admin.plan.stripe_mention') }} </span>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.plans.store') }}" method="POST" class="form-horizontal offset-sm-2">
                    @csrf

                @component('components.form.row-list', ['rows' => $rows])
                @endcomponent

                @component('components.form.schema.restraint.row', [
                  'id' => 0,
                  'field' => 'restraint',
                  'info_text' => __('admin.restraint.description'),
                  'schema' => $restraintSchema
                ])
                @endcomponent

{{--                <div class="form-group row">--}}
{{--                    <label class="col-md-3 col-form-label" for="hf-nickname">Teams Plan</label>--}}
{{--                    <div class="col-md-6">--}}
{{--                        <div class="row">--}}
{{--                        <div class="col-md-3">--}}
{{--                            <label class="switch switch-text switch-pill switch-primary">--}}
{{--                                <input type="checkbox" name="checkbox" id="checkbox" class="switch-input">--}}
{{--                                <span class="switch-label" data-on="On" data-off="Off"></span>--}}
{{--                                <span class="switch-handle"></span>--}}
{{--                            </label>--}}
{{--                        </div>--}}
{{--                        <div class="col-md-9">--}}
{{--                            <input type="number" id="teams_limit" name="teams_limit" class="form-control"--}}
{{--                            placeholder="Number of member allow for this Plan"--}}
{{--                            value="{{ old('teams_limit') }}">--}}
{{--                            @if ($errors->has('teams_limit'))--}}
{{--                                <span class="text-danger">{{ $errors->first('teams_limit') }}</span>--}}
{{--                            @endif--}}
{{--                        </div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
                <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Create</button>
            </form>
        </div>
    </div>
</div>
@endsection