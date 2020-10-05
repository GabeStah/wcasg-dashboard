@extends('account.layouts.default')
@section('title', 'Site Statistics')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card card-default">
                    <div class="card-header border-0 d-flex">
                        <div class="flex-fill">
                            <h2 class="mb-0"><i class="fas fa-sitemap"></i>{{ $site->domain }} Site Statistics</h2>
                        </div>
                        <a href="{{ route('account.sites.index') }}">
                            <button class="btn btn-primary">{{ __('account.site.statistic.back') }}</button>
                        </a>
                    </div>
                    @isset($statistics['error'])
                        <div class="mx-auto w-auto mb-4">
                            @component('layouts.partials.alerts._alerts_component', [
                              'type' => 'danger',
                              'link' => session('error_link')
                              ])
                                {{ $statistics['error'] }}
                            @endcomponent
                        </div>
                    @else
                        <div class="table-responsive">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                <tr>
                                    <th id="header-domain" aria-label="Domain">Domain</th>
                                    <th id="header-stat-monthly-page-views" aria-label="{{ (new DateTime())->format('F') }} Page Views">{{ (new DateTime())->format('F') }} Page Views</th>
                                    <th id="header-stat-monthly-bandwidth" aria-label="{{ (new DateTime())->format('F') }} Bandwidth">{{ (new DateTime())->format('F') }} Bandwidth</th>
                                    <th id="header-stat-monthly-tts-bandwidth" aria-label="{{ (new DateTime())->format('F') }} TTS Bandwidth">{{ (new DateTime())->format('F') }} TTS Bandwidth</th>
                                    <th id="header-stat-lifetime-page-views" aria-label="Lifetime Page Views">Lifetime Page Views</th>
                                    <th id="header-stat-lifetime-bandwidth" aria-label="Lifetime Bandwidth">Lifetime Bandwidth</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h5>{{ $site->domain }}</h5>
                                        </td>
                                        <td>
                                            <h5>{{ number_format($statistics['views']['month']['current']) }}</h5>
                                        </td>
                                        <td>
                                            <h5>{{ format_bytes($statistics['bytes']['month']['current']) }}</h5>
                                        </td>
                                        <td>
                                            <h5>{{ format_bytes($statistics['bytes']['tts']['month']['current']) }}</h5>
                                        </td>
                                        <td>
                                            <h5>{{ number_format($statistics['views']['total']) }}</h5>
                                        </td>
                                        <td>
                                            <h5>{{ format_bytes($statistics['bytes']['total']) }}</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    @endisset
                </div>
            </div>
        </div>
    </div>
@endsection