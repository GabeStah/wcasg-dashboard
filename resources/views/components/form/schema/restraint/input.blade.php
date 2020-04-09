<input id="restraint_{{ $field }}" type="text"
       class="form-control{{ $errors->has($field) ? ' is-invalid' : '' }} {{ isset($classes) ? $classes : '' }}"
       name="restraint_{{ $field }}"
       placeholder="{{ isset($placeholder) ? $placeholder : '' }}"
       value="{{ isset($data) ? old($field, $data[$field]) : old($field) }}" {{ isset($required) && $required ? 'required' : '' }} autofocus>