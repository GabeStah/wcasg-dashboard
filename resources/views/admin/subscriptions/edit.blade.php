@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Tickets</li>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="card">
        <div class="card-header">
            <strong>Update Plan</strong>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.plans.update', $plan->id) }}" method="POST" class="form-horizontal offset-sm-2">
                    @csrf
                    @method('PUT')
                <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="hf-name">Plan name</label>
                    <div class="col-md-6">
                        <input type="text" id="nickname" name="nickname" class="form-control" value="{{ $plan->nickname }}"
                            placeholder="Enter Plan name..">

                            @if ($errors->has('nickname'))
                                <span class="text-danger">{{ $errors->first('nickname') }}</span>
                            @endif
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="hf-name">Plan Price</label>
                    <div class="col-md-6">
                        <input type="text" id="amount" name="amount" class="form-control"
                            value="{{ $plan->amount }}">

                            @if ($errors->has('amount'))
                                <span class="text-danger">{{ $errors->first('amount') }}</span>
                            @endif
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="hf-name">Plan Trial</label>
                    <div class="col-md-6">
                        <input type="text" id="trial" name="trial" class="form-control"
                            value="{{ $plan->trial_period_days }}">

                            @if ($errors->has('trial'))
                                <span class="text-danger">{{ $errors->first('trial') }}</span>
                            @endif
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="hf-name">Plan interval</label>
                    <div class="col-md-6">
                        <select id="interval" type="" class="form-control" name="interval">
                            <option value="">Select plan</option>
                            <option value="day" {{ $plan->interval == 'day' ? 'selected' : '' }}>Daily</option>
                            <option value="week" {{ $plan->interval == 'week' ? 'selected' : '' }}>Weekly</option>
                            <option value="month" {{ $plan->interval == 'month' ? 'selected' : '' }}>Monthly</option>
                            <option value="year" {{ $plan->interval == 'year' ? 'selected' : '' }}>Yearly</option>
                        </select>

                        @if ($errors->has('interval'))
                            <span class="text-danger">{{ $errors->first('interval') }}</span>
                        @endif
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 col-form-label" for="hf-name">Teams Plan</label>
                    <div class="col-md-6">
                        <div class="row">
                        <div class="col-md-3">
                            <label class="switch switch-text switch-pill switch-primary">
                                <input type="checkbox" name="checkbox" id="checkbox" class="switch-input" {{ $plan->teams_enabled == 1 ? 'checked' : '' }}>
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
                <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Create</button>
            </form>
        </div>
    </div>
</div>
@endsection