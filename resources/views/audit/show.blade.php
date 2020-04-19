@extends('layouts.app')

@section('content')
<section class="d-flex align-items-center" id="audit">
    <div class="container">
        <div class="content">
            @isset($results)
            <div class="heading text-center">
                <h2>Accessibility Audit</h2>
                <h3>
                    <a href="{{ $audit->url }}">{{ $audit->url }}</a>
                </h3>
                <div class="line"></div>
            </div>

            <audit-results :audit="{{ $audit }}" :results="{{ json_encode($results) }}" :show-public-url="false"></audit-results>
            @endisset
        </div>
    </div>
</section>
@endsection
