@extends('account.layouts.default')

@section('content')
  <div class="row">
      <div class="col-12">
          <h1>MY DASHBOARD</h1>
          <h3 class="text-muted font-weight-light">Welcome to the WCASG client area</h3>
      </div>
  </div>

  <div class="row mt-3 ">
      <div class="col-12 col-lg-6 d-flex align-items-stretch w-100">
          <div class="card w-100">
              <div class="card-header bg-transparent">
                  <div class="row align-items-center">
                      <div class="col">
                          <h6 class="text-uppercase text-muted ls-1 mb-1">Add Your Website</h6>
                          <h5 class="h3 mb-0">Getting Started</h5>
                      </div>
                  </div>
              </div>
              <div class="card-body">
                      <!-- If a user has no Site (enabled or disabled) -->
                      <h4>Setting up your first site</h4>
                      <ul class="fa-ul">
                          <li><span class="fa-li"><i class="far fa-circle"></i></span>Add your website to the <a
                                  href="/account/sites">Sites Page.</a></li>
                          <li><span class="fa-li"><i class="far fa-circle"></i></span>Paste the code snippet into your
                              website just before <code><\head></code>. </li>
                          <li><span class="fa-li"><i class="far fa-circle"></i></span>You're done! The widget will start
                              working instantly.</li>
                      </ul>

                      <!-- If a user has never ran an Audit Scan before -->
                      <h4 class="pt-4">Perform a website accessibility audit</h4>
                      <ul class="fa-ul">
                          <li><span class="fa-li"><i class="far fa-circle"></i></span>Enter a new or existing site via the  <a
                                  href="/account/audits/create">Audit Creation Page</a>.</li>
                          <li><span class="fa-li"><i class="far fa-circle"></i></span>Allow the scan to finish.</li>
                          <li><span class="fa-li"><i class="far fa-circle"></i></span>Scan results will be presented automatically.</li>
                      </ul>
              </div>
          </div>
      </div>

      <div class="col-12 col-lg-6 align-items-stretch text-white">
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
            <!-- Previous Month -->
            <div class="row">
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => number_format($statistics['views']['month']['previous']),
                  'period' => (new DateTime())->modify('-1 month')->format('F Y'),
                  'title' => 'Views'
                ])
                @endcomponent
              </div>
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => format_bytes($statistics['bytes']['month']['previous']),
                  'period' => (new DateTime())->modify('-1 month')->format('F Y'),
                  'title' => 'Bandwidth'
                ])
                @endcomponent
              </div>
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => format_bytes($statistics['bytes']['tts']['month']['previous']),
                  'period' => (new DateTime())->modify('-1 month')->format('F Y'),
                  'title' => 'TTS Bandwidth'
                ])
                @endcomponent
              </div>
            </div>
            <!-- Year -->
            <div class="row">
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => number_format($statistics['views']['year']),
                  'period' => (new DateTime())->format('Y'),
                  'title' => 'Views'
                ])
                @endcomponent
              </div>
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => format_bytes($statistics['bytes']['year']),
                  'period' => (new DateTime())->format('Y'),
                  'title' => 'Bandwidth'
                ])
                @endcomponent
              </div>
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => format_bytes($statistics['bytes']['tts']['year']),
                  'period' => (new DateTime())->format('Y'),
                  'title' => 'TTS Bandwidth'
                ])
                @endcomponent
              </div>
            </div>
            <!-- Total -->
            <div class="row">
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => number_format($statistics['views']['total']),
                  'title' => 'Total Views'
                ])
                @endcomponent
              </div>
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => format_bytes($statistics['bytes']['total']),
                  'title' => 'Total Bandwidth'
                ])
                @endcomponent
              </div>
              <div class="col-4">
                @component('components.statistics.stat-card', [
                  'value' => format_bytes($statistics['bytes']['tts']['total']),
                  'title' => 'Total TTS Bandwidth'
                ])
                @endcomponent
              </div>
            </div>
          @endisset
      </div>
  </div>
      
  <div class="row mt-3">
    <div class="col-6">
      <div class="card">
          <div class="card-header bg-transparent">
              <div class="row align-items-center">
                  <div class="col">
                      <h6 class="text-uppercase text-muted ls-1 mb-1">Coming Soon</h6>
                      <h5 class="h3 mb-0 text-muted">News & Information</h5>
                  </div>
              </div>
          </div>
          <div class="card-body">
          </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card">
          <div class="card-header bg-transparent">
              <div class="row align-items-center">
                  <div class="col">
                      <h6 class="text-uppercase text-muted ls-1 mb-1">Coming Soon</h6>
                      <h5 class="h3 mb-0 text-muted">Additional Accessibility Services</h5>
                  </div>
              </div>
          </div>
          <div class="card-body">
          </div>
      </div>
    </div>
  </div>

  <div class="row mt-3 ">
    <div class="col-12">
      <div class="card">
          <div class="card-header bg-transparent">
              <div class="row align-items-center">
                  <div class="col">
                      <h6 class="text-uppercase text-muted ls-1 mb-1">Coming Soon</h6>
                      <h5 class="h3 mb-0 text-muted">Website Visitors & Associated Info</h5>
                  </div>
              </div>
          </div>
          <div class="card-body">
              <div class="chart">
                  <div class="chartjs-size-monitor">
                      <div class="chartjs-size-monitor-expand">
                          <div class=""></div>
                      </div>
                      <div class="chartjs-size-monitor-shrink">
                          <div class=""></div>
                      </div>
                  </div>
                  <div class="chartjs-size-monitor">
                      <div class="chartjs-size-monitor-expand">
                          <div></div>
                      </div>
                      <div class="chartjs-size-monitor-shrink">
                          <div></div>
                      </div>
                  </div>
                  <canvas id="chart-bars1" width="3303" height="525" class="chart-canvas chartjs-render-monitor"
                      style="display: block; width: 2202px; height: 350px;"></canvas>
              </div>
          </div>
      </div>
    </div>
  </div>

{{--    <div class="col-xl-3 col-md-6">--}}
{{--        <div class="card bg-gradient-primary border-0">--}}
{{--            <!-- Card body -->--}}
{{--            <div class="card-body">--}}
{{--                <div class="row">--}}
{{--                    <div class="col">--}}
{{--                        <h5 class="card-title text-uppercase text-muted mb-0 text-white">Tickets</h5>--}}
{{--                        <span class="h2 font-weight-bold mb-0 text-white">0</span>--}}
{{--                        <div class="progress progress-xs mt-3 mb-0">--}}
{{--                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="30" aria-valuemin="0"--}}
{{--                                aria-valuemax="100" style="width: 30%;"></div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-auto">--}}
{{--                        <button type="button" class="btn btn-sm btn-neutral mr-0" data-toggle="dropdown"--}}
{{--                            aria-haspopup="true" aria-expanded="false">--}}
{{--                            <i class="fas fa-ellipsis-h"></i>--}}
{{--                        </button>--}}
{{--                        <div class="dropdown-menu dropdown-menu-right">--}}
{{--                            <a class="dropdown-item" href="#">Action</a>--}}
{{--                            <a class="dropdown-item" href="#">Another action</a>--}}
{{--                            <a class="dropdown-item" href="#">Something else here</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <p class="mt-3 mb-0 text-sm">--}}
{{--                    <a href="{{ route('ticket.index') }}" class="text-nowrap text-white font-weight-600">Go to tickets</a>--}}
{{--                </p>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--    <div class="col-xl-3 col-md-6">--}}
{{--        <div class="card bg-gradient-info border-0">--}}
{{--            <!-- Card body -->--}}
{{--            <div class="card-body">--}}
{{--                <div class="row">--}}
{{--                    <div class="col">--}}
{{--                        <h5 class="card-title text-uppercase text-muted mb-0 text-white">Projects</h5>--}}
{{--                        <span class="h2 font-weight-bold mb-0 text-white">20</span>--}}
{{--                        <div class="progress progress-xs mt-3 mb-0">--}}
{{--                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0"--}}
{{--                                aria-valuemax="100" style="width: 50%;"></div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-auto">--}}
{{--                        <button type="button" class="btn btn-sm btn-neutral mr-0" data-toggle="dropdown"--}}
{{--                            aria-haspopup="true" aria-expanded="false">--}}
{{--                            <i class="fas fa-ellipsis-h"></i>--}}
{{--                        </button>--}}
{{--                        <div class="dropdown-menu dropdown-menu-right">--}}
{{--                            <a class="dropdown-item" href="#">Action</a>--}}
{{--                            <a class="dropdown-item" href="#">Another action</a>--}}
{{--                            <a class="dropdown-item" href="#">Something else here</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <p class="mt-3 mb-0 text-sm">--}}
{{--                    <a href="#!" class="text-nowrap text-white font-weight-600">See details</a>--}}
{{--                </p>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--    <div class="col-xl-3 col-md-6">--}}
{{--        <div class="card bg-gradient-danger border-0">--}}
{{--            <!-- Card body -->--}}
{{--            <div class="card-body">--}}
{{--                <div class="row">--}}
{{--                    <div class="col">--}}
{{--                        <h5 class="card-title text-uppercase text-muted mb-0 text-white">Items sold</h5>--}}
{{--                        <span class="h2 font-weight-bold mb-0 text-white">5622</span>--}}
{{--                        <div class="progress progress-xs mt-3 mb-0">--}}
{{--                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0"--}}
{{--                                aria-valuemax="100" style="width: 80%;"></div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-auto">--}}
{{--                        <button type="button" class="btn btn-sm btn-neutral mr-0" data-toggle="dropdown"--}}
{{--                            aria-haspopup="true" aria-expanded="false">--}}
{{--                            <i class="fas fa-ellipsis-h"></i>--}}
{{--                        </button>--}}
{{--                        <div class="dropdown-menu dropdown-menu-right">--}}
{{--                            <a class="dropdown-item" href="#">Action</a>--}}
{{--                            <a class="dropdown-item" href="#">Another action</a>--}}
{{--                            <a class="dropdown-item" href="#">Something else here</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <p class="mt-3 mb-0 text-sm">--}}
{{--                    <a href="#!" class="text-nowrap text-white font-weight-600">See details</a>--}}
{{--                </p>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--    <div class="col-xl-3 col-md-6">--}}
{{--        <div class="card bg-gradient-default border-0">--}}
{{--            <!-- Card body -->--}}
{{--            <div class="card-body">--}}
{{--                <div class="row">--}}
{{--                    <div class="col">--}}
{{--                        <h5 class="card-title text-uppercase text-muted mb-0 text-white">Notifications</h5>--}}
{{--                        <span class="h2 font-weight-bold mb-0 text-white">9500</span>--}}
{{--                        <div class="progress progress-xs mt-3 mb-0">--}}
{{--                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="90" aria-valuemin="0"--}}
{{--                                aria-valuemax="100" style="width: 90%;"></div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-auto">--}}
{{--                        <button type="button" class="btn btn-sm btn-neutral mr-0" data-toggle="dropdown"--}}
{{--                            aria-haspopup="true" aria-expanded="false">--}}
{{--                            <i class="fas fa-ellipsis-h"></i>--}}
{{--                        </button>--}}
{{--                        <div class="dropdown-menu dropdown-menu-right">--}}
{{--                            <a class="dropdown-item" href="#">Action</a>--}}
{{--                            <a class="dropdown-item" href="#">Another action</a>--}}
{{--                            <a class="dropdown-item" href="#">Something else here</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <p class="mt-3 mb-0 text-sm">--}}
{{--                    <a href="#!" class="text-nowrap text-white font-weight-600">See details</a>--}}
{{--                </p>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--<div>--}}
{{--    <div class="card">--}}
{{--        <div class="card-header bg-transparent">--}}
{{--          <div class="row align-items-center">--}}
{{--            <div class="col">--}}
{{--              <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>--}}
{{--              <h5 class="h3 mb-0">Total orders</h5>--}}
{{--            </div>--}}
{{--          </div>--}}
{{--        </div>--}}
{{--        <div class="card-body">--}}
{{--          <!-- Chart -->--}}
{{--          <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>--}}
{{--            <canvas id="chart-bars1" class="chart-canvas chartjs-render-monitor" width="341" height="350" style="display: block; width: 341px; height: 350px;"></canvas>--}}
{{--          </div>--}}
{{--        </div>--}}
{{--      </div>--}}
{{--</div>--}}
@endsection

@section('scripts')
<script>
new Chart(document.getElementById("chart-bars1"), {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Stat1",
          backgroundColor: "#3e95cd",
          data: [1,2,3,4,5,6,7,8,9,10,11,12]
        }, {
          label: "Stat2",
          backgroundColor: "#8e5ea2",
          data: [12,11,10,9,8,7,6,5,4,3,2,1]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Total Orders and Sales (Month)'
      }
    }
});
</script>
@endsection