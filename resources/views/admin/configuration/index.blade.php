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

            @foreach($configurations as $configuration)
              <div class="form-group row">
                <label class="col-md-3 col-form-label" for="configurations[{{ $configuration->name }}]">{{ ucwords($configuration->name) }}
                  <info-icon :text="$configuration->text"/>
                </label>
                <div class="col-md-6">
                <textarea
                    id="configurations[{{ $configuration->name }}]"
                    name="configurations[{{ $configuration->name }}]"
                    class="form-control custom-editor"
                    style="min-height: 600px;"
                    placeholder="Enter Content"
                    v-pre
                >{{ $configuration->data }}</textarea>

                  @if ($errors->has($configuration->name))
                    <span class="text-danger">{{ $errors->first($configuration->name) }}</span>
                  @endif
                </div>
              </div>
            @endforeach


            <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
@endsection