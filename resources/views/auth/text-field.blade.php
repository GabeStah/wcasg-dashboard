<div class="form-group row{{ $errors->has($field) ? ' has-error' : '' }}">
  <label for="{{ $field }}" class="col-md-4 control-label">{{ $title }}{{ isset($required) && $required ? ' *' : '' }}</label>

  <div class="col-md-6">
    <input id="{{ $field }}" type="{{ isset($type) ? $type : 'text' }}"
           class="form-control{{ $errors->has($field) ? ' is-invalid' : '' }}"
           name="{{ $field }}"
           value="{{ old($field, $default ?? '') }}" {{ isset($required) && $required ? 'required' : '' }} autofocus>

    @if ($errors->has($field))
      <div class="invalid-feedback">
        <strong>{{ $errors->first($field) }}</strong>
      </div>
    @endif
  </div>
</div>