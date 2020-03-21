@extends('account.layouts.default')

@section('content')
    <div class="card">

        <div class="card-body">
            <h4 class="card-title">Profile</h4>

            <form method="POST" action="{{ route('account.profile.store') }}" enctype="multipart/form-data">
                {{ csrf_field() }}

                @component('components.form.row-list', ['data' => auth()->user(), 'rows' => $rows])
                @endcomponent

                <div class="form-group row {{ $errors->has('profile_image') ? ' has-error' : '' }}">
                    <label for="profile_image" class="col-md-4 control-label">Profile Image</label>
                    <div class="col-md-6">
                        <input id="profile_image" type="file" class="form-control" name="profile_image">
                        @if (auth()->user()->image)
                            <img style="" src="{{ asset('storage/'. auth()->user()->image) }}"
                                 class="avatar rounded-circle mr-3">
                        @endif
                        @if ($errors->has('profile_image'))
                            <div class="invalid-feedback">
                                <strong>{{ $errors->first('profile_image') }}</strong>
                            </div>
                        @endif
                    </div>
                </div>


                {{--                <div class="form-group row{{ $errors->has('password') ? ' has-error' : '' }}">--}}
                {{--                    <label for="password" class="col-md-4 control-label">Password</label>--}}

                {{--                    <div class="col-md-6">--}}
                {{--                        <input id="password" type="password"--}}
                {{--                               class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password"--}}
                {{--                               required>--}}

                {{--                        @if ($errors->has('password'))--}}
                {{--                            <div class="invalid-feedback">--}}
                {{--                                <strong>{{ $errors->first('password') }}</strong>--}}
                {{--                            </div>--}}
                {{--                        @endif--}}
                {{--                    </div>--}}
                {{--                </div>--}}

                <div class="form-group row">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
