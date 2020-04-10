@extends('account.layouts.default')
@section('title', 'My Audit')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card card-default">
                    <div class="card-header border-0">
                        <h2 class="mb-0"><i class="fas fa-compress-arrows-alt"></i>My Audits</h2>
                    </div>
                    <div class="mx-auto w-auto mb-4">
                        <form method="POST" action="{{ route('api.audit.get', $project) }}">
                            @csrf
                            @method('PUT')
                        </form>
                    </div>
                    @if($audits->isEmpty())
                        <div class="mx-auto w-auto mb-4">
                            <a href="{{ route('account.audits.create') }}"
                               data-placement="top"
                               data-original-title="Perform an Audit"
                               data-toggle="tooltip"
                            >
                                <button class="btn btn-primary w-auto">{{ __('account.audit.perform_button') }}</button>
                            </a>
                        </div>
                    @else
                        <div class="table-responsive">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                <tr>
                                    <th id="header-edit" aria-label="Edit"></th>
                                    <th id="header-date" aria-label="Timestamp">Timestamp</th>
                                    <th id="header-domain" aria-label="URL">URL</th>
                                    <th id="header-status" aria-label="Status">Status</th>
                                    <th id="header-subscription" aria-label="Task">Task</th>
                                    <th id="header-statement" aria-label="Result">Result</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($audits as $audit)
                                    <tr>
                                        <td>
                                            <a href="{{ route('account.audits.edit', $audit) }}"
                                               data-placement="top"
                                               data-original-title="Edit Audit"
                                               data-toggle="tooltip"
                                            >
                                                <i class="fas fa-edit"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <h5>{{ $audit->created_at->toFormattedDateString() }}</h5>
                                        </td>
                                        <td>
                                            {{ $audit->url }}
                                        </td>
                                        <td>
{{--                                            <span class="badge badge-dot mr-4">--}}
{{--                                                @if($audit->active === true)--}}
{{--                                                    <span id="site-active-{{ $audit->id }}" class="badge badge-info"--}}
{{--                                                          data-pk="{{ $audit->id }}"--}}
{{--                                                          data-url="{{ route('account.sites.update', $audit) }}"--}}
{{--                                                          data-name="active">Enabled</span>--}}
{{--                                                @else--}}
{{--                                                    <span id="site-active-{{ $audit->id }}" class="badge badge-danger"--}}
{{--                                                          data-pk="{{ $audit->id }}"--}}
{{--                                                          data-url="{{ route('account.sites.update', $audit) }}"--}}
{{--                                                          data-name="active">Disabled</span>--}}
{{--                                                @endif--}}
{{--                                            </span>--}}
                                        </td>
                                        <td>
                                            {{ $audit->task_id }}
                                        </td>
                                        <td>
                                            {{ $audit->result_id }}
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