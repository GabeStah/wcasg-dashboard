<!-- Breadcrumb -->
<ol class="breadcrumb">
    <li class="breadcrumb-item">Home</li>
    <li class="breadcrumb-item">
        <a href="{{ route('admin.dashboard') }}">Admin</a>
    </li>
    @yield('breadcrumb')

    <!-- Breadcrumb Menu-->
    <li class="breadcrumb-menu d-md-down-none">
        <div class="btn-group" role="group" aria-label="Button group">
            @yield('breadcrumb-menu')
        </div>
    </li>
</ol>
