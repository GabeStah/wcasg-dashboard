<div class="form-group row{{ $errors->has('restraint') ? ' has-error' : '' }}">
  <label for="{{ $field }}" class="col-md-4 control-label">Contextual Restraint @component('components.info-icon', ['text' => $info_text ?? null])@endcomponent</label>
  <div class="col-md-6">
    @component('components.form.schema.restraint.select', [
      'data' => $data ?? null,
      'default' => $default ?? null,
      'field' => 'entity' ?? null,
      'id' => $id ?? null,
      'options' => $schema['entities'] ?? null
    ])
    @endcomponent

    @component('components.form.schema.restraint.select', [
      'data' => $data ?? null,
      'default' => $default ?? null,
      'field' => 'comparator' ?? null,
      'id' => $id ?? null,
      'options' => $schema['comparators'] ?? null
    ])
    @endcomponent

    @component('components.form.schema.restraint.input', [
      'classes' => 'w-50 d-inline-flex',
      'data' => $data ?? null,
      'label' => 'Value' ?? null,
      'field' => 'value' ?? null,
      'id' => $id ?? null,
      'required' => false ?? null,
      'errors' => $errors ?? null,
      'placeholder' => $placeholder ?? null
    ])
    @endcomponent

    @if ($errors->has($field))
      <div class="invalid-feedback">
        <strong>{{ $errors->first($field) }}</strong>
      </div>
    @endif
  </div>
</div>