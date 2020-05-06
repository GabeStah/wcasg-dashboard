@extends('account.layouts.default')

@section('content')
    <div class="card">

        <div class="card-body">
            <h2 class="card-title">Profile</h2>

            <form method="POST" action="{{ route('account.profile.store') }}" enctype="multipart/form-data" class="pl-md-2 pl-lg-4">
                @csrf

                <div class="card p-5">
                    <h2>Personal Info</h2>

                    @component('components.form.row-list', ['data' => auth()->user(), 'rows' => $personal])
                    @endcomponent

                    <div class="form-group row {{ $errors->has('profile_image') ? ' has-error' : '' }}">
                        <label for="profile_image" class="col-md-4 control-label">Profile Image</label>
                        <div class="col-md-6 d-flex">
                            <input id="profile_image" type="file" class="form-control w-75" name="profile_image">
                            @if (auth()->user()->image)
                                <img src="{{ auth()->user()->image }}"
                                     class="avatar rounded-circle ml-md-5">
                            @endif
                            @if ($errors->has('profile_image'))
                                <div class="invalid-feedback">
                                    <strong>{{ $errors->first('profile_image') }}</strong>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>

                <div class="card p-5">
                    <h2>Business Info</h2>

                    @component('components.form.row-list', ['data' => auth()->user(), 'rows' => $business])
                    @endcomponent
                </div>

                <div class="form-group row pl-md-2 pl-lg-4">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
