@extends('account.layouts.default')
@section('title', 'Site Extensions')
@section('content')
    <div class="container-fluid py-3 d-flex">
        <div class="flex-fill">
            <a href="{{ route('account.sites.index') }}">
                <button class="btn btn-outline-light btn-sm">{{ __('account.extension.back') }}</button>
            </a>
        </div>
    </div>
    <div class="container-fluid py-3">
        <h2>Extensions</h2>
        <div class="flex-fill">
            {{ __('account.extension.description') }}
        </div>
    </div>
    <div class="container-fluid">
        <extension-account :initial-extensions="{{ $extensions }}" :i8n="{{ $i8n }}" :site="{{ $site }}"></extension-account>
    </div>
@endsection
