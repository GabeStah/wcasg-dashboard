@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Extensions</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="col-lg">
      <div class="card">
        <div class="container-fluid py-3">
          <h2>Default Extensions</h2>
          <div class="flex-fill">
            {{ __('admin.extension.description') }}
          </div>
        </div>
        <div class="container-fluid">
          <extension-admin :initial-extensions="{{ $extensions }}" :i8n="{{ $i8n }}"></extension-admin>
        </div>
      </div>
    </div>
  </div>
@endsection