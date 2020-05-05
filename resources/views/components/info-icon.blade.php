@isset($text)
<i class="fa fa-question-circle"
   data-placement="{{ isset($placement) ? $placement : 'top' }}"
   data-original-title="{{ $text }}"
   data-toggle="tooltip"></i>
@endisset