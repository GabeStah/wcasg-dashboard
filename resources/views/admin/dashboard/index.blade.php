@extends('admin.layouts.default')

@section('admin.breadcrumb')
    <li class='breadcrumb-item'>Dashboard</li>
@endsection

@section('admin.stats')
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Admin Dashboard</h2>
            My dashboard
                <dashboard></dashboard>
        </div>
         
    </div>
    <div class="card">
        <div class="card-body">
                {!! $chart->container() !!}
        </div>
    </div>
@endsection

@section('scripts')
<script src="{{ asset('vendor/js/chart.js') }}"></script>
<script src="{{ asset('vendor/js/dashboard.js') }}"></script>
{!! $chart->script() !!}

@endsection