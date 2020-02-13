@extends('account.layouts.default')
@section('title', 'My Sites')
@section('content')
    <div class="container-fluid mt--6">
        <div class="row">
            <div class="col">
                <div class="card card-default">
                    <div class="card-header border-0">
                        <h2 class="mb-0"><i class="fas fa-sitemap"></i>My Sites</h2>
                    </div>
                    @if(!$isSubscribed ?? '')
                        <div class="mx-auto w-auto mb-4">
                            <a href="{{ route('plans.index') }}">
                                <button
                                    class="btn btn-primary w-auto">{{ __('account.site.subscribe-to-add') }}</button>
                            </a>
                        </div>
                    @elseif($sites->isEmpty())
                        <div class="mx-auto w-auto mb-4">
                            <a href="{{ route('account.sites.create') }}">
                                <button class="btn btn-primary w-auto">{{ __('account.site.add-new-button') }}</button>
                            </a>
                        </div>
                    @else
                        <div class="table-responsive">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                <tr>
                                    <th id="header-edit" aria-label="Edit"></th>
                                    <th id="header-date" aria-label="Date">Date</th>
                                    <th id="header-domain" aria-label="Domain">Domain</th>
                                    <th id="header-status" aria-label="Status">Status</th>
                                    <th id="header-subscription" aria-label="Subscription">Subscription</th>
                                    <th id="header-widget" aria-label="Widget">Widget</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($sites as $site)
                                    <tr>
                                        <td>
                                            <a href="{{ route('account.sites.edit', $site) }}">
                                                <i class="fas fa-edit"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <h5>{{ $site->created_at->toFormattedDateString() }}</h5>
                                        </td>
                                        <td>
                                            {{ $site->domain }}
                                        </td>
                                        <td>
                                            <span class="badge badge-dot mr-4">
                                                @if($site->active === true)
{{--                                                    <div class="custom-control custom-switch">--}}
{{--                                                        <input type="checkbox" class="custom-control-input" id="customSwitches">--}}
{{--                                                        <label class="badge badge-info custom-control-label" for="customSwitches">Enabled</label>--}}
{{--                                                    </div>--}}
                                                    <span id="site-active-{{ $site->id }}" class="badge badge-info" data-pk="{{ $site->id }}" data-url="{{ route('account.sites.update', $site) }}" data-name="active">Enabled</span>
                                                @else
                                                    <span id="site-active-{{ $site->id }}" class="badge badge-danger" data-pk="{{ $site->id }}" data-url="{{ route('account.sites.update', $site) }}" data-name="active">Disabled</span>
                                                @endif
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge badge-dot mr-4">
                                                @if($site->subscription->valid())
                                                    <a href="{{ route('account.subscription.invoice.index', $site->subscription) }}">
                                                        <span class="badge badge-info">Active</span>
                                                    </a>
                                                @else
                                                    <a href="{{ route('account.subscription.resume.index', $site->subscription) }}">
                                                        <span class="badge badge-danger">Inactive</span>
                                                    </a>
                                                @endif
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge badge-dot mr-4">
                                                @if(!$site->subscription->valid())
                                                    <span class="badge badge-danger">{{ __('account.subscription.invalid') }}</span>
                                                @elseif(!$site->active)
                                                    <span class="badge badge-warning">{{ __('account.site.must-be-active') }}</span>
                                                @else
                                                    <form class="form-inline">
                                                      <div class="form-group">
                                                        <input type="text" class="form-control" id="widget-snippet-{{ $site->id }}" aria-labelledby="header-widget" onfocus="this.select()" placeholder="Widget Snippet" value="{{ $site->getWidgetScriptTag() }}">
                                                      </div>
                                                    </form>
                                                @endif
                                            </span>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection