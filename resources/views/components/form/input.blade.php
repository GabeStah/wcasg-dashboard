<input id="{{ $field }}" type="{{ isset($type) ? $type : 'text' }}"
       class="form-control{{ $errors->has($field) ? ' is-invalid' : '' }} {{ isset($classes) ? $classes : '' }}"
       name="{{ $field }}"
       placeholder="{{ isset($placeholder) ? $placeholder : '' }}"
       value="{{ isset($data) ? old($field, $data[$field]) : old($field) }}" {{ isset($required) && $required ? 'required' : '' }} autofocus {{ isset($editable) && $editable ? '' : 'disabled' }}>