<div class="form-group row{{ $errors->has($field) ? ' has-error' : '' }}">
  <label for="{{ $field }}" class="col-md-4 control-label">{{ $title }} @component('components.info-icon', ['text' => $info_text ?? null])@endcomponent</label>

  <div class="col-md-6">
    @switch($type ?? null)
      @case('password')
          @component('components.form.input', [
            'label' => $label ?? null,
            'field' => $field ?? null,
            'data' => $data ?? null,
            'type' => 'password',
            'required' => $required ?? null,
            'errors' => $errors ?? null,
            'placeholder' => $placeholder ?? null,
            'editable' => $editable ?? true
          ])
          @endcomponent
          @break
      @case('input')
        @component('components.form.input', [
          'label' => $label ?? null,
          'field' => $field ?? null,
          'data' => $data ?? null,
          'required' => $required ?? null,
          'errors' => $errors ?? null,
          'placeholder' => $placeholder ?? null,
          'editable' => $editable ?? true
        ])
        @endcomponent
        @break
      @case('select')
        @component('components.form.select', [
          'data' => $data ?? null,
          'default' => $default ?? null,
          'field' => $field ?? null,
          'options' => $options ?? null,
          'editable' => $editable ?? true
        ])
        @endcomponent
        @break
      @case('toggle')
        @component('components.form.toggle', [
          'data' => $data ?? null,
          'default' => $default ?? null,
          'field' => $field ?? null,
          'options' => $options ?? null,
          'editable' => $editable ?? true
        ])
        @endcomponent
        @break
      @default
        @component('components.form.input', [
          'label' => $label ?? null,
          'field' => $field ?? null,
          'data' => $data ?? null,
          'required' => $required ?? null,
          'errors' => $errors ?? null,
          'placeholder' => $placeholder ?? null,
          'editable' => $editable ?? true
        ])
        @endcomponent
    @endswitch

    @if ($errors->has($field))
      <div class="invalid-feedback">
        <strong>{{ $errors->first($field) }}</strong>
      </div>
    @endif
  </div>
</div>