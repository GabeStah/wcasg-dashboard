@extends('layouts.app')

@section('content')
    <div class="container" id="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Add Your Websites</h2>
                        <p>Your selected plan includes x{{ $siteCountMaximum }} domains.  Please enter up to {{ $siteCountMaximum }} website domains or URLs below.</p>
                        <form method="POST" action="{{ route('checkout.sites.store') }}">
                            @csrf

                            @for($i = 0; $i < $siteCountMaximum; $i++)
                                <div class="form-group row{{ $errors->has('sites.' . $i) ? ' has-error' : '' }}">
                                    <label for="sites[{{ $i }}]" class="col-md-4 control-label">Site #{{ $i + 1 }}</label>

                                    <div class="col-md-6">
                                        <input id="sites[{{ $i }}]"
                                               type="text"
                                               class="form-control{{ $errors->has('sites.' . $i) ? ' is-invalid' : '' }}"
                                               name="sites[{{ $i }}]"
                                               value="{{ old('sites.' . $i) }}"
                                               placeholder="example.com">
                                        @if ($errors->has('sites.' . $i))
                                            <div class="invalid-feedback">
                                                <strong>{{ $errors->first('sites.' . $i) }}</strong>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            @endfor

                            <div class="form-group row{{ $errors->has('confirm_ownership') ? ' has-error' : '' }}">
                                <div class="col-md-6 offset-md-4">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" name="confirm_ownership"
                                               class="custom-control-input{{ $errors->has('confirm_ownership') ? ' is-invalid' : '' }}"
                                               id="confirm_ownership">
                                        <label class="custom-control-label" for="confirm_ownership">
                                            I certify that I am the legal owner of all domains entered above.
                                        </label>

                                        @if ($errors->has('confirm_ownership'))
                                            <div class="invalid-feedback">
                                                <strong>{{ $errors->first('confirm_ownership') }}</strong>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection