@isset($statistics['error'])
  <div class="row">
    <div class="col-12">
      @component('layouts.partials.alerts._alerts_component', [
        'type' => 'danger',
        'link' => session('error_link')
        ])
        {{ $statistics['error'] }}
      @endcomponent
    </div>
  </div>
@else
  <!-- Sites & Averages -->
  <div class="row">
    <div class="col-4">
      @component('components.statistics.stat-card', [
        'value' => number_format($statistics['activeSites']),
        'title' => 'Active Sites'
      ])
      @endcomponent
    </div>
    <div class="col-4">
      @component('components.statistics.stat-card', [
        'value' => format_bytes($statistics['bytes']['averagePerSite']),
        'title' => 'Avg. Site Bandwidth'
      ])
      @endcomponent
    </div>
    <div class="col-4">
      @component('components.statistics.stat-card', [
        'value' => format_bytes($statistics['bytes']['tts']['averagePerSite']),
        'title' => 'Avg. Site TTS Bandwidth'
      ])
      @endcomponent
    </div>
  </div>
  <!-- Current Month -->
  <div class="row">
    <div class="col-4">
      @component('components.statistics.stat-card', [
        'value' => number_format($statistics['views']['month']['current']),
        'period' => (new DateTime())->format('F Y'),
        'title' => 'Views'
      ])
      @endcomponent
    </div>
    <div class="col-4">
      @component('components.statistics.stat-card', [
        'value' => format_bytes($statistics['bytes']['month']['current']),
        'period' => (new DateTime())->format('F Y'),
        'title' => 'Bandwidth'
      ])
      @endcomponent
    </div>
    <div class="col-4">
      @component('components.statistics.stat-card', [
        'value' => format_bytes($statistics['bytes']['tts']['month']['current']),
        'period' => (new DateTime())->format('F Y'),
        'title' => 'TTS Bandwidth'
      ])
      @endcomponent
    </div>
  </div>
  {{--            <!-- Previous Month -->--}}
  {{--            <div class="row">--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => number_format($statistics['views']['month']['previous']),--}}
  {{--                  'period' => (new DateTime())->modify('-1 month')->format('F Y'),--}}
  {{--                  'title' => 'Views'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => format_bytes($statistics['bytes']['month']['previous']),--}}
  {{--                  'period' => (new DateTime())->modify('-1 month')->format('F Y'),--}}
  {{--                  'title' => 'Bandwidth'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => format_bytes($statistics['bytes']['tts']['month']['previous']),--}}
  {{--                  'period' => (new DateTime())->modify('-1 month')->format('F Y'),--}}
  {{--                  'title' => 'TTS Bandwidth'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--            </div>--}}
  {{--            <!-- Year -->--}}
  {{--            <div class="row">--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => number_format($statistics['views']['year']),--}}
  {{--                  'period' => (new DateTime())->format('Y'),--}}
  {{--                  'title' => 'Views'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => format_bytes($statistics['bytes']['year']),--}}
  {{--                  'period' => (new DateTime())->format('Y'),--}}
  {{--                  'title' => 'Bandwidth'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => format_bytes($statistics['bytes']['tts']['year']),--}}
  {{--                  'period' => (new DateTime())->format('Y'),--}}
  {{--                  'title' => 'TTS Bandwidth'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--            </div>--}}
  {{--            <!-- Total -->--}}
  {{--            <div class="row">--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => number_format($statistics['views']['total']),--}}
  {{--                  'title' => 'Total Views'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => format_bytes($statistics['bytes']['total']),--}}
  {{--                  'title' => 'Total Bandwidth'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--              <div class="col-4">--}}
  {{--                @component('components.statistics.stat-card', [--}}
  {{--                  'value' => format_bytes($statistics['bytes']['tts']['total']),--}}
  {{--                  'title' => 'Total TTS Bandwidth'--}}
  {{--                ])--}}
  {{--                @endcomponent--}}
  {{--              </div>--}}
  {{--            </div>--}}
@endisset