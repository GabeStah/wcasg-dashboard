<div class="card bg-info border-0 centered">
  <div class="card-body">
    <h3 class="display-2 text-center text-white">{{ $value }}</h3>
    @isset($period)
      <p class="text-center mb-0">{{ $period }}</p>
    @endisset
    <p class="text-center">{{ $title }}</p>
  </div>
</div>