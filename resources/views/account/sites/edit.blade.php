@extends('account.layouts.default')
@section('title', 'Edit Site')
@section('content')
  <div class="card card-default">
    <div class="card-header border-0">
      <h2 class="mb-0"><i class="fas fa-sitemap"></i>Edit Site</h2>
    </div>
    <div class="card-body">
      <form method="POST" action="{{ route('account.sites.update', $site) }}" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="form-group row{{ $errors->has('domain') ? ' has-error' : '' }}">
          <label for="first_name" class="col-md-4 control-label">Domain</label>

          <div class="col-md-6">
            <input id="domain" type="text"
                   class="form-control{{ $errors->has('domain') ? ' is-invalid' : '' }}"
                   name="domain"
                   value="{{ old('domain', $site->domain) }}" required autofocus>

            @if ($errors->has('domain'))
              <div class="invalid-feedback">
                <strong>{{ $errors->first('domain') }}</strong>
              </div>
            @endif
          </div>
        </div>

        <div class="form-group row{{ $errors->has('active') ? ' has-error' : '' }}">
          <label class="col-md-4 control-label">Enabled</label>

          <div class="col-md-6">
            <!-- Default checked -->
            <div class="custom-control custom-switch">
              <input name="active" type="checkbox" class="custom-control-input" id="active"
                     {{ $site->active === true ? 'checked' : '' }} value="true">
              <label class="custom-control-label" for="active"></label>
            </div>

          </div>
        </div>

        <div class="form-group row">
          <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>

      <form method="POST" action="{{ route('account.sites.delete', $site) }}" class="mt--2">
        @csrf
        @method('DELETE')

        <div class="form-group row">
          <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-danger btn-sm"
                    data-confirmation
                    data-confirmation-title="Delete Site: {{ $site->domain }}"
                    data-confirmation-text="You are about to delete {{ $site->domain }}. This change is irreversible. Are you sure?"
                    data-confirmation-icon="error"
                    data-confirmation-yes="Yes"
                    data-confirmation-no="No"
            >Delete Site</button>
          </div>
        </div>
      </form>

    </div>
  </div>
@endsection