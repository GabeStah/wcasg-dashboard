@extends('account.layouts.default')
@section('title', 'Site Extensions')
@section('content')
    <div class="container-fluid py-3 d-flex">
        <div class="flex-fill">
            <a href="{{ route('account.sites.index') }}">
                <button class="btn btn-outline-light btn-sm">{{ __('account.extension.back') }}</button>
            </a>
        </div>

        <div>
            <a href="#">
                <button class="btn btn-primary">{{ __('account.extension.add_new_button') }}</button>
            </a>
        </div>
    </div>
    <div class="container-fluid">
        <extension-account :extensions="{{ $extensions }}" :i8n="{{ $i8n }}" :site="{{ $site }}"></extension-account>
    </div>
@endsection
