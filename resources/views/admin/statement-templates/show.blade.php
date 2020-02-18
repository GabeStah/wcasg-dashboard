@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Statement Template: {{ $template->name }}</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="col-lg">
      <div class="card">
        <div class="card-header">
          <i class="fa fa-align-justify"></i> Statement Template: {{ $template->name }}
          <div class="float-right btn-group" role="group" aria-label="User Actions">
            <a href="{{ route('admin.statement-templates.edit', $template->id) }}"
               data-toggle="tooltip"
               data-placement="top"
               title=""
               class="btn btn-outline-primary mx-1"
               data-original-title="Edit">
              <i class="fa fa-edit "></i> Edit
            </a>
          </div>
        </div>
        <div class="card-body">
          <div v-pre>{!! $template->content !!}</div>
        </div>
      </div>
    </div>
  </div>
@endsection