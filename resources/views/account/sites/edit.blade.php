@extends('account.layouts.default')
@section('title', 'Edit Site')
@section('content')
<div class="card card-default">
    <div class="card-header border-0">
        <h2 class="mb-0"> <i class="fas fa-sitemap"></i>Edit Site</h2>
    </div>
    <div class="card-body">
        <form method="POST" action="{{ route('account.sites.update', $site) }}" enctype="multipart/form-data">
            {{ csrf_field() }}
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
                        <input name="active" type="checkbox" class="custom-control-input" id="active" {{ $site->active === true ? 'checked' : '' }} value="true">
                        <label class="custom-control-label" for="active"></label>
                    </div>


{{--                    <div class="btn-group btn-group-toggle" data-toggle="buttons">--}}
{{--                                                <label class="btn btn-secondary {{ $site->active ? 'active' : '' }}">--}}
{{--                        <label class="btn btn-secondary ">--}}
{{--                            <input type="radio" name="active" id="enabled" autocomplete="off" checked="{{ $site->active === true }}" value="true"> Enabled--}}
{{--                            <input type="radio" name="options" id="enabled" autocomplete="off" > Enabled--}}
{{--                        </label>--}}
{{--                        <label class="btn btn-secondary {{ !$site->active ? 'active' : '' }}">--}}
{{--                        <label class="btn btn-secondary ">--}}
{{--                            <input type="radio" name="active" id="disabled" autocomplete="off" checked={{ $site->active === false }} value="false"> Disabled--}}
{{--                            <input type="radio" name="options" id="disabled" autocomplete="off" > Disabled--}}
{{--                        </label>--}}
{{--                    </div>--}}
{{--                    @if ($errors->has('active'))--}}
{{--                        <div class="invalid-feedback">--}}
{{--                            <strong>{{ $errors->first('active') }}</strong>--}}
{{--                        </div>--}}
{{--                    @endif--}}
    {{--                                <input id="active" type="text"--}}
    {{--                                       class="form-control{{ $errors->has('active') ? ' is-invalid' : '' }}"--}}
    {{--                                       name="active"--}}
    {{--                                       value="{{ old('active', $site->active) }}" required autofocus>--}}

    {{--                                @if ($errors->has('active'))--}}
    {{--                                    <div class="invalid-feedback">--}}
    {{--                                        <strong>{{ $errors->first('active') }}</strong>--}}
    {{--                                    </div>--}}
    {{--                                @endif--}}
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

</div>
@endsection