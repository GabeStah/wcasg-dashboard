<label class="switch switch-text switch-pill switch-primary">
    <input
        type="checkbox"
        id="{{ $field }}"
        name="{{ $field }}"
        class="switch-input"
        {{ isset($data) ? old($field, $data[$field]) : old($field) ? 'checked' : '' }}
        {{ isset($editable) && $editable ? '' : 'disabled' }}
    >
    <span class="switch-label" data-on="" data-off=""></span>
    <span class="switch-handle"></span>
</label>