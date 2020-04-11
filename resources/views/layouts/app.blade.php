<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('layouts.partials._head')
</head>
<body>
    <!-- Page Loading -->
<div class="se-pre-con"></div>
    <div id="app">

        {{-- @include('layouts.partials._navigation') --}}
        <header class="header-global" style="height: 34px;">
            @include('layouts.partials._navigation')
        </header>
        @include('layouts.partials.errors._errors')
        @yield('content')
    </div>

    @include('layouts.partials.footer')

    @include('layouts.partials._scripts')
</body>
</html>
