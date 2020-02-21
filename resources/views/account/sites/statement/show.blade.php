@extends('account.layouts.default')
@section('title', 'Accessibility Statement')
@section('content')
  <div class="container-fluid mt--6">
    <div class="row">
      <div class="col">
        <div class="card card-default">
          <div class="card-header border-0">
            <h2 class="mb-0 d-inline"><i class="fas fa-sitemap mx-1"></i>Accessibility Statement</h2>
            <div class="float-right btn-group" role="group" aria-label="User Actions">
              <a href="{{ route('account.sites.statement.edit', $site->id) }}"
                 data-placement="top"
                 data-original-title="Edit Accessibility Statement"
                 data-toggle="tooltip"
                 title=""
                 class="btn btn-outline-primary mx-1">
                <i class="fa fa-edit"></i> Edit
              </a>
              <a href="{{ route('account.sites.statement.download', ['site' => $site->id, 'type' => 'text']) }}"
                 data-toggle="tooltip"
                 data-placement="top"
                 title=""
                 class="btn btn-outline-primary mx-1"
                 data-original-title="Download as Text">
                <i class="fa fa-font"></i> Text
              </a>
              <a href="{{ route('account.sites.statement.download', ['site' => $site->id, 'type' => 'html']) }}"
                 data-toggle="tooltip"
                 data-placement="top"
                 title=""
                 class="btn btn-outline-primary mx-1"
                 data-original-title="Download as HTML">
                <i class="fa fa-file-code"></i> HTML
              </a>
            </div>
          </div>
          <div class="card-body">
            <div v-pre>{!! $content !!}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection