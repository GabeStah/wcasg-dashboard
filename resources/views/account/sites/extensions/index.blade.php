@include('layouts.partials._ace')
@extends('account.layouts.default')
@section('title', 'Site Extensions')
@section('content')
    <div class="container-fluid mt--6">
        <div class="row">
            <div class="col">
                <div class="card card-default">
                    <div class="card-header border-0">
                        <h2 class="mb-0"><i class="fas fa-sitemap"></i>Site Extensions</h2>
                    </div>
                    @if($extensions->isEmpty())
                        <div class="mx-auto w-auto mb-4">
                            <a href="{{ route('account.sites.create') }}"
                               data-placement="top"
                               data-original-title="Create an Extension"
                               data-toggle="tooltip"
                            >
                                <button class="btn btn-primary w-auto">{{ __('account.site.add-new-button') }}</button>
                            </a>
                        </div>
                    @else
                        @foreach($extensions as $extension)
                        <div class="card">
                            <div class="card-header" data-toggle="collapse" data-target="#extension-body-{{ $extension->id }}" aria-controls="extension-body-{{ $extension->id }}" aria-expanded="false">
                                {{ $extension->name }}
                                @if($extension->imported)
                                    <span class="badge badge-primary">Built-In</span>
                                @else
                                    <span class="badge badge-secondary">Custom</span>
                                @endif
                            </div>
                            <div id="extension-body-{{ $extension->id }}" class="card-body collapse multi-collapse">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">{{ $extension->description }}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                @foreach($extension->predicates as $predicate)
                                    @if($predicate->function)
{{--                                        <form action="{{ route('account.sites.extensions.update', ['site' => $site->id, $site, $extensions, $predicate]) }}" method="post">--}}
{{--                                        <form action="{{ route('account.sites.extensions.update', ['site' => $site->id]) }}" method="POST">--}}
{{--                                            @csrf--}}
{{--                                            @method('PUT')--}}
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="predicate">Predicate: {{ $predicate->name }}</label>
                                        <div class="col-md-6">
                                            <div id="editor" class="editor {{ $extension->imported ? 'read-only' : '' }}">{{ LZCompressor\LZString::decompressFromBase64($predicate->function) }}</div>

                                            @if ($errors->has('predicate'))
                                                <span class="text-danger">{{ $errors->first('predicate') }}</span>
                                            @endif
                                        </div>
                                    </div>
{{--                                            <button type="submit">Save</button>--}}
{{--                                        </form>--}}
                                    @endif
                                @endforeach
                                @foreach($extension->actions as $action)
                                    @if($action->function)
                                        <div class="form-group row">
                                            <label class="col-md-3 col-form-label" for="action">Action: {{ $action->name }}</label>
                                            <div class="col-md-6">
                                                <div id="editor" class="editor {{ $extension->imported ? 'read-only' : '' }}">{{ LZCompressor\LZString::decompressFromBase64($action->function) }}</div>

                                                @if ($errors->has('action'))
                                                    <span class="text-danger">{{ $errors->first('action') }}</span>
                                                @endif
                                            </div>
                                        </div>
                                    @endif
                                @endforeach
                            </div>
                        </div>
                        @endforeach

{{--                        <div class="table-responsive">--}}
{{--                            <table class="table align-items-center table-flush">--}}
{{--                                <thead class="thead-light">--}}
{{--                                <tr>--}}
{{--                                    <th id="header-edit" aria-label="Edit"></th>--}}
{{--                                    <th id="header-name" aria-label="Name">Name</th>--}}
{{--                                    <th id="header-enabled" aria-label="Enabled">Enabled</th>--}}
{{--                                    <th id="header-type" aria-label="Type">Type</th>--}}
{{--                                    <th id="header-description" aria-label="Description">Description</th>--}}
{{--                                    <th id="header-updated" aria-label="Updated">Updated</th>--}}
{{--                                </tr>--}}
{{--                                </thead>--}}
{{--                                <tbody>--}}
{{--                                @foreach($extensions as $extension)--}}
{{--                                    <tr>--}}
{{--                                        <td>--}}
{{--                                            <a href="{{ route('account.sites.edit', $site) }}"--}}
{{--                                               data-placement="top"--}}
{{--                                               data-original-title="Edit Site"--}}
{{--                                               data-toggle="tooltip"--}}
{{--                                            >--}}
{{--                                                <i class="fas fa-edit"></i>--}}
{{--                                            </a>--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            {{ $extension->name }}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            <span class="badge badge-dot mr-4">--}}
{{--                                                @if($extension->enabled_at !== null)--}}
{{--                                                    <span id="extension-active-{{ $extension->id }}" class="badge badge-danger"--}}
{{--                                                          data-pk="{{ $extension->id }}"--}}
{{--                                                          data-url="{{ route('account.sites.update', $extension) }}"--}}
{{--                                                          data-name="active">Disabled</span>--}}
{{--                                                @else--}}
{{--                                                    <span id="extension-active-{{ $extension->id }}" class="badge badge-info"--}}
{{--                                                          data-pk="{{ $extension->id }}"--}}
{{--                                                          data-url="{{ route('account.sites.update', $extension) }}"--}}
{{--                                                          data-name="active">Enabled</span>--}}
{{--                                                @endif--}}
{{--                                            </span>--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            <span class="badge badge-dot mr-4">--}}
{{--                                                @if($extension->imported)--}}
{{--                                                    <span id="extension-build-in-{{ $extension->id }}" class="badge badge-danger"--}}
{{--                                                          data-pk="{{ $extension->id }}"--}}
{{--                                                          data-url="{{ route('account.sites.update', $extension) }}"--}}
{{--                                                          data-name="active">Built-In</span>--}}
{{--                                                @else--}}
{{--                                                    <span id="extension-custom-{{ $extension->id }}" class="badge badge-info"--}}
{{--                                                          data-pk="{{ $extension->id }}"--}}
{{--                                                          data-url="{{ route('account.sites.update', $extension) }}"--}}
{{--                                                          data-name="active">Custom</span>--}}
{{--                                                @endif--}}
{{--                                            </span>--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            {{ $extension->description }}--}}
{{--                                        </td>--}}
{{--                                        <td>--}}
{{--                                            <h5>{{ $extension->updated_at->toFormattedDateString() }}</h5>--}}
{{--                                        </td>--}}
{{--                                    </tr>--}}
{{--                                    <tr id="extension-edit-panel-{{ $extension->id }}">--}}
{{--                                        <td colspan="6">--}}
{{--                                            Edit panel for {{ $extension->name }}--}}
{{--                                        </td>--}}
{{--                                    </tr>--}}
{{--                                @endforeach--}}
{{--                                </tbody>--}}
{{--                            </table>--}}
{{--                        </div>--}}
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
{{--@include('layouts.partials._prismjs')--}}