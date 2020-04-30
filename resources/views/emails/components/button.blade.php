<mj-button
    href="{{ isset($url) ? $url : '#' }}"
    font-family="Helvetica"
    background-color="#38c172"
    color="white"
    font-size="{{ isset($font_size) ? $font_size : '13px' }}"
>
  {{ $slot }}
</mj-button>