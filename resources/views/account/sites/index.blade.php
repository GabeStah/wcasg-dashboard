@extends('account.layouts.default')
@section('title', 'My Sites')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card card-default">
                    <div class="card-header border-0 d-flex">
                        <div class="flex-fill">
                            <h2 class="mb-0"><i class="fas fa-sitemap"></i>My Sites</h2>
                        </div>
                        <a href="{{ route('account.sites.create') }}">
                            <button class="btn btn-primary">{{ __('account.site.add_new_button') }}</button>
                        </a>
                    </div>
                    @if(!$isSubscribed ?? '')
                        <div class="mx-auto w-auto mb-4">
                            <a href="{{ route('plans.index') }}">
                                <button
                                    class="btn btn-primary w-auto"
                                    data-placement="top"
                                    data-original-title="Subscribe to Add a Site"
                                    data-toggle="tooltip"
                                >{{ __('account.site.subscribe_to_add') }}</button>
                            </a>
                        </div>
                    @elseif($sites->isEmpty())
                        <div class="mx-auto w-auto mb-4">
                            <a href="{{ route('account.sites.create') }}"
                               data-placement="top"
                               data-original-title="Add a Site"
                               data-toggle="tooltip"
                            >
                                <button class="btn btn-primary w-auto">{{ __('account.site.add_new_button') }}</button>
                            </a>
                        </div>
                    @else
                        <div class="table-responsive">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                <tr>
                                    <th id="header-edit" aria-label="Edit"></th>
                                    <th id="header-domain" aria-label="Domain">Domain</th>
                                    <th id="header-date" aria-label="Date">Date Added</th>
                                    <th id="header-status" aria-label="Status">Status</th>
                                    <th id="header-subscription" aria-label="Subscription">Subscription</th>
                                    <th id="header-extensions" aria-label="Extensions">Extensions</th>
                                    <th id="header-statement" aria-label="Statement">Accessibility Statement</th>
                                    <th id="header-widget" aria-label="Widget">Insert Widget Code <info-icon :text="__('account.site.widget_info')"/></th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($sites as $site)
                                    <tr>
                                        <td>
                                            <a href="{{ route('account.sites.edit', $site) }}"
                                               data-placement="top"
                                               data-original-title="Edit Site"
                                               data-toggle="tooltip"
                                            >
                                                <i class="fas fa-edit"></i>
                                            </a>
                                        </td>
                                        <td>
                                            {{ $site->domain }}
                                        </td>
                                        <td>
                                            <h5>{{ $site->created_at->toFormattedDateString() }}</h5>
                                        </td>
                                        <td>
                                            <span class="badge badge-dot mr-4">
                                                @if($site->active === true)
                                                    <span id="site-active-{{ $site->id }}" class="badge badge-info"
                                                          data-pk="{{ $site->id }}"
                                                          data-url="{{ route('account.sites.update', $site) }}"
                                                          data-name="active">Enabled</span>
                                                @else
                                                    <span id="site-active-{{ $site->id }}" class="badge badge-danger"
                                                          data-pk="{{ $site->id }}"
                                                          data-url="{{ route('account.sites.update', $site) }}"
                                                          data-name="active">Disabled</span>
                                                @endif
                                            </span>
                                        </td>
                                        <td>
                                            @if($site->subscription->valid())
                                                <a href="{{ route('account.subscription.invoice.index', $site->subscription) }}">
                                                    <button class="btn btn-outline-success mr-0"><i
                                                            class="fa fa-receipt mr-1"></i>Active
                                                    </button>
                                                </a>
                                            @else
                                                <a href="{{ route('account.subscription.resume.index', $site->subscription) }}">
                                                    <button class="btn btn-outline-warning mx-0"><i
                                                            class="fa fa-receipt mr-1"></i>Inactive
                                                    </button>
                                                </a>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="{{ route('account.sites.extensions.index', $site) }}">
                                                <button class="btn btn-outline-info mx-0"><i
                                                        class="fa fa-puzzle-piece mr-1"></i>Extensions
                                                </button>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="{{ route('account.sites.statement.show', $site->id) }}"
                                               data-placement="top"
                                               data-original-title="View Site Accessibility Statement"
                                               data-toggle="tooltip">
                                                <button class="btn btn-outline-success mx-0"><i
                                                        class="fa fa-search"
                                                    ></i>
                                                </button>
                                            </a>
                                            <a href="{{ route('account.sites.statement.edit', $site->id) }}"
                                               data-placement="top"
                                               data-original-title="Edit Site Accessibility Statement"
                                               data-toggle="tooltip">
                                                <button class="btn btn-outline-light mx-0"><i
                                                        class="fa fa-edit"
                                                    ></i>
                                                </button>
                                            </a>
                                        </td>
                                        <td>
                                            @if(!$site->subscription->valid())
                                                <span
                                                    class="badge badge-danger">{{ __('account.subscription.invalid') }}</span>
                                            @elseif(!$site->active)
                                                <span
                                                    class="badge badge-warning">{{ __('account.site.must_be_active') }}</span>
                                            @else
                                                <textarea type="text" class="form-control" style="font-size: smaller;"
                                                       id="widget-snippet-{{ $site->id }}"
                                                       aria-labelledby="header-widget" onfocus="this.select()"
                                                       placeholder="Widget Snippet"
                                                       data-placement="top"
                                                       data-original-title="{{ __('account.site.widget_info') }}"
                                                       data-toggle="tooltip"
                                                >{{ $site->getWidgetScriptTag() }}</textarea>
                                            @endif
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