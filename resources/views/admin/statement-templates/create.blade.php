@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Statement Template</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="card">
      <div class="card-header">
        <strong>Update Statement Template</strong>
      </div>
      <div class="card-body">
        <form action="{{ route('admin.statement-templates.store') }}" method="POST"
              class="form-horizontal offset-sm-2">
          @csrf

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="name">Name
              <info-icon :text="__('info.views.admin.StatementTemplate.columns.name')"/>
            </label>
            <div class="col-md-6">
              <input type="text" id="name" name="name" class="form-control" placeholder="Enter Template Name">

              @if ($errors->has('name'))
                <span class="text-danger">{{ $errors->first('name') }}</span>
              @endif
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="default_config">Default Config
              <info-icon :text="__('info.views.admin.StatementTemplate.columns.default-config')"/>
            </label>
            <div class="col-md-6">
              <textarea type="text" id="default_config" name="default_config" class="form-control"
                        placeholder="Enter Default Config" v-pre></textarea>

              @if ($errors->has('default_config'))
                <span class="text-danger">{{ $errors->first('default_config') }}</span>
              @endif
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="content">Content</label>
            <div class="col-md-6">
              <textarea id="content" name="content" class="form-control custom-editor" style="min-height: 600px;"
                        placeholder="Enter Content" v-pre>{{ $initial_content }}</textarea>

              @if ($errors->has('content'))
                <span class="text-danger">{{ $errors->first('content') }}</span>
              @endif
            </div>
          </div>
          <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i>
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
@endsection