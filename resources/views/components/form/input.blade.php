<input id="{{ $field }}" type="text"
       class="form-control{{ $errors->has($field) ? ' is-invalid' : '' }}"
       name="{{ $field }}"
       placeholder="{{ isset($placeholder) ? $placeholder : '' }}"
       value="{{ isset($data) ? old($field, $data[$field]) : old($field) }}" {{ isset($required) && $required ? 'required' : '' }} autofocus>