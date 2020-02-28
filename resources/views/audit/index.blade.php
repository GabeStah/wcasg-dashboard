@extends('layouts.app')

@section('content')
<section class="d-flex align-items-center" id="audit">
    <div class="container">
        <div class="content">
            <div class="heading text-center">
                <h2>Accessibility Audits</h2>
                <div class="line"></div>
            </div>

            <audit-public></audit-public>
        </div>
    </div>
</section>
@endsection
