<select id="{{ $field }}" name="{{ $field }}">
  @foreach ($options as $option)
    <option value="{{ $option['value'] }}"
            data-content="{{ $option['text'] }}"
            @if(isset($data))
                @if($data[$field] === $option['value'])selected
                @endif
            @elseif(isset($default))
                @if($default === $option['value'])selected
                @endif
            @endif
    >
      {{ $option['text'] }}
    </option>
  @endforeach
</select>