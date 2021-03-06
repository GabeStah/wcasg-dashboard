@section('sidebar')
    <!-- Users -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="icon-people"></i>Users
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.users.index'), ' active') }}"
                   href="{{ route('admin.users.index') }}">
                    <i class="icon-people"></i>All Users
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.users.create'), ' active') }}"
                   href="{{ route('admin.users.create') }}">
                    <i class="icon-plus"></i>Add User
                </a>
            </li>
            <!-- Impersonate User -->
            @role('admin-root')
                <li class="nav-item">
                    <a class="nav-link{{ return_if(on_page('admin.users.impersonate.index'), ' active') }}"
                       href="{{ route('admin.users.impersonate.index') }}">
                        <i class="icon-user"></i>Impersonate User
                    </a>
                </li>
            @endrole
        </ul>
    </li>

    <!-- Permissions -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="icon-flag"></i>Permissions
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.permissions.index'), ' active') }}"
                   href="{{ route('admin.permissions.index') }}">
                    <i class="icon-flag"></i>All Permissions
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.permissions.create'), ' active') }}"
                   href="{{ route('admin.permissions.create') }}">
                    <i class="icon-plus"></i>Add Permission
                </a>
            </li>
        </ul>
    </li>

    <!-- Roles -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="icon-lock"></i>Roles
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.roles.index'), ' active') }}"
                   href="{{ route('admin.roles.index') }}">
                    <i class="icon-lock"></i>All Roles
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.roles.create'), ' active') }}"
                   href="{{ route('admin.roles.create') }}">
                    <i class="icon-plus"></i>Add Role
                </a>
            </li>
        </ul>
    </li>
    <!-- Tickets -->
    <li class="nav-item">
        <a class="nav-link {{ return_if(on_page('admin.tickets'), 'active') }}" href="{{ route('admin.tickets') }}">
                <i class="fa fa-ticket"></i>Tickets
        </a>
    </li>
    <!-- Extensions -->
    <li class="nav-item">
        <a class="nav-link" href="{{ route('admin.extensions.index')  }}">
            <i class="fa fa-puzzle-piece"></i>Extensions
        </a>
    </li>
    <!-- Products -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="fa fa-cart-arrow-down"></i>Products
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.products.index'), ' active') }}"
                   href="{{ route('admin.products.index') }}">
                    <i class="fa fa-shopping-cart"></i>All Products
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.products.create'), ' active') }}"
                   href="{{ route('admin.products.create') }}">
                    <i class="fa fa-cart-plus"></i>Add Product
                </a>
            </li>
        </ul>
    </li>
    <!-- Plans -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="fa fa-barcode"></i>Plans
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.plans.index'), ' active') }}"
                   href="{{ route('admin.plans.index') }}">
                    <i class="fa fa-barcode"></i>All Plans
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.plans.create'), ' active') }}"
                   href="{{ route('admin.plans.create') }}">
                    <i class="icon-plus"></i>Add Plan
                </a>
            </li>
        </ul>
    </li>
    <!-- Coupons -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="fa fa-tags"></i>Coupons
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.coupons.index'), ' active') }}"
                   href="{{ route('admin.coupons.index') }}">
                    <i class="fa fa-tags"></i>All Coupons
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.coupons.create'), ' active') }}"
                   href="{{ route('admin.coupons.create') }}">
                    <i class="icon-plus"></i>Add Coupon
                </a>
            </li>
        </ul>
    </li>
    <!-- Subscriptions -->
    <li class="nav-item">
        <a class="nav-link {{ return_if(on_page('admin.subscriptions.index'), 'active') }}" href="{{ route('admin.subscriptions.index') }}">
            <i class="fa fa-file-text"></i>Subscriptions
        </a>
    </li>
    <!-- Statements -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="fa fa-paragraph"></i>Statements
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.statement-templates.index'), ' active') }}"
                   href="{{ route('admin.statement-templates.index') }}">
                    <i class="fa fa-tags"></i>All Templates
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.statement-templates.create'), ' active') }}"
                   href="{{ route('admin.statement-templates.create') }}">
                    <i class="icon-plus"></i>Add Template
                </a>
            </li>
            {{--            <li class="nav-item">--}}
            {{--                <a class="nav-link{{ return_if(on_page('admin.statements.index'), ' active') }}"--}}
            {{--                   href="{{ route('admin.statements.index') }}">--}}
            {{--                    <i class="fa fa-tags"></i>All Statements--}}
            {{--                </a>--}}
            {{--            </li>--}}
            {{--            <li class="nav-item">--}}
            {{--                <a class="nav-link{{ return_if(on_page('admin.statements.create'), ' active') }}"--}}
            {{--                   href="{{ route('admin.statements.create') }}">--}}
            {{--                    <i class="icon-plus"></i> Add Statement--}}
            {{--                </a>--}}
            {{--            </li>--}}
        </ul>
    </li>
{{--    <li class="nav-item nav-dropdown">--}}
{{--        <a class="nav-link nav-dropdown-toggle" href="#">--}}
{{--            <i class="fa fa-envelope"></i> Notification--}}
{{--        </a>--}}
{{--        <ul class="nav-dropdown-items">--}}
{{--            <li class="nav-item">--}}
{{--                <a class="nav-link{{ return_if(on_page('admin.subscriptions.index'), ' active') }}"--}}
{{--                   href="{{ route('admin.announcement.create') }}">--}}
{{--                    <i class="fa fa-comment"></i>Send Notification--}}
{{--                </a>--}}
{{--            </li>--}}
{{--        </ul>--}}
{{--    </li>--}}
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="fa fa-bar-chart"></i>Statistics
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.env.index'), ' active') }}"
                    href="{{ route('admin.visitlog') }}">
                    <i class="fas fa-clipboard"></i>Visitor Log
                </a>
            </li>
        </ul>
    </li>

    <!-- Configuration -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link {{ return_if(on_page('admin.configuration.index'), 'active') }}" href="{{ route('admin.configuration.index') }}">
            <i class="fa fa-cog"></i>Configuration
        </a>
    </li>

    <!-- Intuit Authorization URL -->
    <li class="nav-item">
        <a class="nav-link" href="{{ route('admin.quickbooks.index') }}">
            <i class="fa fa-user-secret"></i>QuickBooks
        </a>
    </li>
    {{-- Disable this menu cause the Env editor package not yet compatible to Laravel 6 --}}
    {{-- <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
                <i class="fa fa-gear"></i> Settings
        </a>
        <ul class="nav-dropdown-items">
            <li class="nav-item">
                <a class="nav-link{{ return_if(on_page('admin.env.index'), ' active') }}"
                    href="{{ route('admin.env.index') }}">
                    <i class="fa fa-gear"></i>Env setting
                </a>
            </li>
        </ul>
    </li> --}}
@endsection