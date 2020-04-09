@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Plan</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="card">
        <div class="card-header">
            <strong>Update Plan</strong>
        </div>
        @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
        @endif
        <div class="card-body">
            <form action="{{ route('admin.plans.update', $plan->id) }}" method="POST" class="form-horizontal offset-sm-2">
                    {!! csrf_field() !!}
                    @method('PUT')

                @component('components.form.row-list', ['data' => $plan, 'rows' => $rows])
                @endcomponent

                @if($restraints)
                    @foreach($restraints as $restraint)
                        @component('components.form.schema.restraint.row', [
                          'data' => $restraint,
                          'field' => 'restraint',
                          'id' => $loop->index,
                          'info_text' => __('admin.restraint.description'),
                          'schema' => $restraintSchema
                        ])
                        @endcomponent
                    @endforeach
                @elseif($restraintSchema)
                    @component('components.form.schema.restraint.row', [
                      'field' => 'restraint',
                      'info_text' => __('admin.restraint.description'),
                      'schema' => $restraintSchema
                    ])
                    @endcomponent
                @endif

                <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="hf-nickname">Teams Plan</label>
                    <div class="col-md-6">
                        <div class="row">
                        <div class="col-md-3">
                            <label class="switch switch-text switch-pill switch-primary">
                                <input type="checkbox" name="teams_enabled" id="teams_enabled" class="switch-input" {{ $plan->teams_enabled ? 'checked' : '' }}>
                                <span class="switch-label" data-on="On" data-off="Off"></span>
                                <span class="switch-handle"></span>
                            </label>
                        </div>
                        <div class="col-md-9">
                            <input type="number" id="teams_limit" name="teams_limit" class="form-control"
                            placeholder="Number of member allow for this Plan"
                            value="{{ $plan->teams_limit }}">
                            @if ($errors->has('teams_limit'))
                                <span class="text-danger">{{ $errors->first('teams_limit') }}</span>
                            @endif
                        </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Update</button>
            </form>
        </div>
    </div>
</div>
@endsection