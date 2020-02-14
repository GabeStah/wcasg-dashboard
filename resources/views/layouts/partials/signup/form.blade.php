<form method="POST" action="{{ route('register') }}">
  {{ csrf_field() }}
  <div class="row register-form">
    <div class="col-md-6">
      <div class="form-group">
        <input id="first_name" type="text"
               placeholder="First name *"
               class="form-control{{ $errors->has('first_name') ? ' is-invalid' : '' }}"
               name="first_name" value="{{ old('first_name') }}"
               required autofocus>
        @if ($errors->has('first_name'))
          <div class="invalid-feedback">
            <strong>{{ $errors->first('first_name') }}</strong>
          </div>
        @endif
      </div>
      <div class="form-group">
        <input id="last_name" type="text"
               placeholder="Last name *"
               class="form-control{{ $errors->has('last_name') ? ' is-invalid' : '' }}"
               name="last_name" value="{{ old('last_name') }}"
               required autofocus>

        @if ($errors->has('last_name'))
          <div class="invalid-feedback">
            <strong>{{ $errors->first('last_name') }}</strong>
          </div>
        @endif
      </div>
      <div class="form-group">
        <input id="username" type="text"
               placeholder="Username *"
               class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}"
               name="username" value="{{ old('username') }}"
               required autofocus>

        @if ($errors->has('username'))
          <div class="invalid-feedback">
            <strong>{{ $errors->first('username') }}</strong>
          </div>
        @endif
      </div>

    </div>
    <div class="col-md-6">
      <div class="form-group">
        <input id="email" type="email" placeholder="Email"
               class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
               name="email" value="{{ old('email') }}" required>

        @if ($errors->has('email'))
          <div class="invalid-feedback">
            <strong>{{ $errors->first('email') }}</strong>
          </div>
        @endif
      </div>
      <div class="form-group">
        <input id="password" type="password"
               placeholder="Password *"
               class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
               name="password" required>

        @if ($errors->has('password'))
          <div class="invalid-feedback">
            <strong>{{ $errors->first('password') }}</strong>
          </div>
        @endif
      </div>
      <div class="form-group">
        <input id="password-confirm" type="password"
               placeholder="Confirm Password *"
               class="form-control" name="password_confirmation"
               required>
      </div>
      <div class="form-group">
        <input
            class="custom-control-input {{ $errors->has('terms') ? ' is-invalid' : '' }}"
            id="customCheckRegister" name="terms"
            type="checkbox">
        <label class="custom-control-label"
               for="customCheckRegister">
          @if ($errors->has('terms'))
            <div class="invalid-feedback">
              <strong>{{ $errors->first('terms') }}</strong>
            </div>
          @endif
          <span>I accept the <a href="#" target="_blank">terms of service</a>
                                                                </span>
        </label>
      </div>
      <input type="submit" class="btnRegister"
             value="Create account"/>
    </div>
  </div>
</form>