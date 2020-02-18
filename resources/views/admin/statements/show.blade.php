@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Accessibility Statement</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="col-lg">
      <div class="card">
        <div class="card-header">
          <i class="fa fa-align-justify"></i>Accessibility Statement
          <div class="float-right btn-group" role="group" aria-label="User Actions">
            <a href="{{ route('admin.statements.edit', $statement->id) }}"
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
          <div v-pre>{!! $content !!}</div>
        </div>
      </div>
    </div>
  </div>
@endsection