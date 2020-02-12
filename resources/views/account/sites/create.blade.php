@extends('account.layouts.default')
@section('title', 'Add a Site')
@section('content')
    <div class="card card-default">
        <div class="card-header border-0">
            <h2 class="mb-0"> <i class="fas fa-sitemap"></i>Add a Site</h2>
        </div>
        <div class="card-body">
            <form method="POST" action="{{ route('account.sites.store') }}" enctype="multipart/form-data">
                {{ csrf_field() }}

                <div class="form-group row{{ $errors->has('domain') ? ' has-error' : '' }}">
                    <label for="first_name" class="col-md-4 control-label">Domain</label>

                    <div class="col-md-6">
                        <input id="domain" type="text"
                               class="form-control{{ $errors->has('domain') ? ' is-invalid' : '' }}"
                               name="domain"
                               placeholder="example.com"
                               value="" required autofocus>

                        @if ($errors->has('domain'))
                            <div class="invalid-feedback">
                                <strong>{{ $errors->first('domain') }}</strong>
                            </div>
                        @endif
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-4 control-label">Enabled</label>

                    <div class="col-md-6">
                        <div class="custom-control custom-switch">
                            <input name="active" type="checkbox" class="custom-control-input" id="active" aria-checked="true" checked value="true">
                            <label class="custom-control-label" for="active"></label>
                        </div>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="btn btn-primary">
                            Create Site
                        </button>
                    </div>
                </div>
            </form>

        </div>
@endsection