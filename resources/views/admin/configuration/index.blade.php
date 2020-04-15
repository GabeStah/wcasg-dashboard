@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Configuration</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="col-lg">
      <div class="card">
        <div class="card-header">
          <i class="fa fa-align-justify"></i> Configuration
        </div>
        <div class="card-body">
          <form action="{{ route('admin.configuration.update') }}" method="POST"
                class="form-horizontal offset-sm-2">
            @csrf

            <div class="form-group row">
              <label class="col-md-3 col-form-label" for="disclaimer">Disclaimer
                <info-icon :text="__('info.views.admin.configuration.disclaimer')"/>
              </label>
              <div class="col-md-6">
                <textarea id="disclaimer" name="disclaimer" class="form-control custom-editor" style="min-height: 600px;"
                          placeholder="Enter Content" v-pre>{{ $disclaimer }}</textarea>

                @if ($errors->has('disclaimer'))
                  <span class="text-danger">{{ $errors->first('disclaimer') }}</span>
                @endif
              </div>
            </div>
            <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
@endsection