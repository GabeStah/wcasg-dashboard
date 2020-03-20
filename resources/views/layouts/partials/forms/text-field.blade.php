<div class="form-group row{{ $errors->has($field) ? ' has-error' : '' }}">
  <label for="{{ $field }}" class="col-md-4 control-label">{{ $title }}@isset($info) <i class="fa fa-question-circle"
                                                                                        data-placement="top"
                                                                                        data-original-title="{{ $info }}"
                                                                                        data-toggle="tooltip"></i>@endisset</label>

  <div class="col-md-6">
    <input id="{{ $field }}" type="text"
           class="form-control{{ $errors->has($field) ? ' is-invalid' : '' }}"
           name="{{ $field }}"
           placeholder="{{ isset($placeholder) ? $placeholder : '' }}"
           value="{{ isset($item) ? old($field, $item[$field]) : old($field) }}" {{ isset($required) && $required ? 'required' : '' }} autofocus>

    @if ($errors->has($field))
      <div class="invalid-feedback">
        <strong>{{ $errors->first($field) }}</strong>
      </div>
    @endif
  </div>
</div>