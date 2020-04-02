@extends('account.layouts.default')
@section('title', 'Site Extensions')
@section('content')
    <div class="container-fluid">
        <extension-account :extensions="{{ $extensions }}" :i8n="{{ $i8n }}" :site="{{ $site }}"></extension-account>
    </div>
@endsection
