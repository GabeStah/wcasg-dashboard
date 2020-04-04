<header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="{{ route('home') }}"></a>
{{--    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button">--}}
{{--        <span class="navbar-toggler-icon"></span>--}}
{{--    </button>--}}

    <ul class="nav navbar-nav ml-auto pr-3">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button"
               aria-haspopup="true" aria-expanded="false">
                <span>{{ auth()->user()->name }}</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="{{ route('account.index') }}">
                    <i class="fa fa-user"></i> Account
                </a>
                <div class="divider"></div>
                <a class="dropdown-item" href="{{ route('logout') }}"
                   onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <i class="fa fa-lock"></i> Logout
                </a>
                @include('layouts.partials.forms._logout')
            </div>
        </li>
    </ul>
{{--    <button class="navbar-toggler aside-menu-toggler" type="button">--}}
{{--        <span class="navbar-toggler-icon"></span>--}}
{{--    </button>--}}

</header>
