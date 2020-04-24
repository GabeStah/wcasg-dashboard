<!-- ======== Start Navbar ======== -->
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
        <a class="navbar-brand" href="{{ route('home') }}"><img src="{{ asset('img/logo-sm.png') }}" alt="logo"></a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('home') }}#slider">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('audit.index') }}">Audit</a>
                </li>
                @guest
                    <li class="nav-item">
                        <a href="{{ route('login') }}" role="button" class="btn-1">Login</a>
                    </li>
                @else
                    <li class="nav-item dropdown">
                        <a class="nav-link pr-0"
                           href="#user"
                           role="button"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false"
                           aria-controls="user"
                        >
                            <div class="media align-items-center">
                            <span class="avatar rounded-circle avatar-sm rounded-circle">
                                <img alt="User Avatar" class="rounded-circle" width="50" src="{{ asset(auth()->user()->image) }}">
                            </span>
                                <div class="media-body ml-2 d-none d-lg-block">
                                <span class="mb-0 text-sm font-weight-bold {{ session()->has('impersonate') ? 'text-red' : '' }}">
                                   {{ session()->has('impersonate') ? 'IMPERSONATING: ' : '' }}{{ Auth::user()->name }}
                                </span>
                                </div>
                            </div>
                        </a>
                        <div id="user" class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item"
                               href="{{ route('account.dashboard') }}">
                                <i class="ni ni-settings-gear-65"></i>
                                <span>My Dashboard</span>
                            </a>
                            <!-- Impersonating -->
                            @impersonating
                            <a class="dropdown-item" href="#"
                               onclick="event.preventDefault(); document.getElementById('impersonate-form').submit();">
                                <i class="ni ni-user-run"></i>
                                <span>Stop Impersonating</span>
                            </a>
                            <form id="impersonate-form" action="{{ route('admin.users.impersonate.destroy') }}"
                                  method="POST" style="display: none;">
                                @csrf
                                @method('DELETE')
                            </form>
                            @endimpersonating

                            <!-- Admin Panel Link -->
                            @role('admin')
                            <a class="dropdown-item" href="{{ route('admin.dashboard') }}">
                                <i class="ni ni-circle-08"></i>
                                <span>Admin Dashboard</span>
                            </a>
                            @endrole
                            <div class="dropdown-divider"></div>

                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                                <i class="ni ni-user-run"></i>
                                Logout
                            </a>

                            @include('layouts.partials.forms._logout')
                        </div>
                    </li>
                @endguest
            </ul>
        </div>
    </div>
</nav>
<!-- ======== End Navbar ======== -->