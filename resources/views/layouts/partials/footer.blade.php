<!-- ======== Start Footer ======== -->
<footer class="footer">
    <div class="container text-center">
        <img src="{{ asset('img/wcasg_acronym_light-sm.png') }}" alt="WCASG Logo">
    </div>
</footer>
<!-- ======== End Footer ======== -->

<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-full" role="document">
            <div class="modal-content">
                <div class="modal-header">
                        <a class="navbar-brand" href="{{ route('home') }}"><img src="{{ asset('img/logo.png') }}" width="160" alt="logo"></a>
                        <div>@include('layouts.partials.alerts._alerts')</div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
                <div class="modal-body" id="result">
                        <div class="container register">
                                <div class="row">
                                    <div class="col-md-3 register-left">
                                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                                        <h3>Welcome</h3>
                                        <p></p>
                                        <input type="submit" name="" value="Get started"/><br/>
                                        {{-- <a href="/#price" class="btn btn-primary"></a> --}}
                                    </div>
                                    <div class="col-md-9 register-right">
                                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                                   role="tab" aria-controls="home" aria-selected="true">Login</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                                   role="tab" aria-controls="profile" aria-selected="false">Register</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel"
                                                 aria-labelledby="home-tab">
                                                <h3 class="register-heading">Welcome Back!</h3>
                                                <div class="row register-form">
                                                    <div class="col-md-6 offset-sm-3">
                                                        <form method="POST" action="{{ route('login') }}">
                                                            @csrf

                                                            <div
                                                                class="form-group {{ $errors->has('email') ? ' has-error' : '' }}">
                                                                <div class="input-group">

                                                                    <input id="email-1" placeholder="Email *"
                                                                           type="email"
                                                                           class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                                                           name="email"
                                                                           value="{{ old('email') }}"
                                                                           autofocus>
                                                                    @if ($errors->has('email'))
                                                                        <div class="invalid-feedback">
                                                                            <strong>{{ $errors->first('email') }}</strong>
                                                                        </div>
                                                                    @endif
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="form-group {{ $errors->has('password') ? ' has-error' : '' }}">
                                                                <div class="input-group">
                                                                    <input id="password-1" type="password"
                                                                           placeholder="Password *"
                                                                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                                                           name="password">
                                                                    @if ($errors->has('password'))
                                                                        <div class="invalid-feedback">
                                                                            <strong>{{ $errors->first('password') }}</strong>
                                                                        </div>
                                                                    @endif
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="custom-control custom-control-alternative custom-checkbox">
                                                                <input class="custom-control-input"
                                                                       id=" customCheckLogin" type="checkbox"
                                                                       name="remember" {{ old('remember') ? 'checked' : '' }}>
                                                                <label class="custom-control-label"
                                                                       for=" customCheckLogin">
                                                                    <span>Remember me</span>
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <button type="submit" class="btn btn-primary">
                                                                    Login
                                                                </button>
                                                                <a href="{{ route('password.request') }}">
                                                                    Reset Password
                                                                </a>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade show" id="profile" role="tabpanel"
                                                 aria-labelledby="profile-tab">
                                                <h3 class="register-heading">Let's Get You Signed Up</h3>

                                                @include('layouts.partials.signup.form')

                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                </div>
            </div>
        </div>
</div>