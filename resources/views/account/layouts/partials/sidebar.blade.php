<nav class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
        <!-- Brand -->
        <div class="sidenav-header d-flex align-items-center">
            <a class="navbar-brand" href="{{ route('home') }}">
                <img src="{{ asset('img/logo.png') }}" class="navbar-brand-img" alt="...">
            </a>
            <div class="ml-auto">
                <!-- Sidenav toggler -->
                <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin"
                    data-target="#sidenav-main">
                    <div class="sidenav-toggler-inner">
                        <i class="sidenav-toggler-line"></i>
                        <i class="sidenav-toggler-line"></i>
                        <i class="sidenav-toggler-line"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar-inner">
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                <!-- Nav items -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link {{ return_if(current_route_group(1) === 'dashboard', ' active') }}"
                            href="{{ route('account.dashboard') }}">
                            <i class="fas fa-tachometer-alt"></i>
                            <span class="nav-link-text">{{ __('account.sidebar.dashboard.header') }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ return_if(on_page('account.index') or on_page('account.profile.index') or on_page('account.password.index') or on_page('account.deactivate.index') or on_page('account.twofactor.index') , ' active') }}" href="#navbar-examples" data-toggle="collapse" role="button"
                            aria-expanded="{{ (on_page('account.index') or on_page('account.profile.index') or on_page('account.password.index') or on_page('account.deactivate.index') or on_page('account.twofactor.index')) ? 'true' : 'false' }}" aria-controls="navbar-examples">
                            <i class="fas fa-user"></i>
                            <span class="nav-link-text">{{ __('account.sidebar.account.header') }}</span>
                        </a>
                        <div class="collapse {{ return_if(on_page('account.index') or on_page('account.profile.index') or on_page('account.password.index') or on_page('account.deactivate.index') or on_page('account.twofactor.index') , 'show') }}" id="navbar-examples">
                            <ul class="nav nav-sm flex-column">
                                @component('components.sidebar.nav-item', [
                                  'active' => on_page('account.index'),
                                  'href' => route('account.index'),
                                  'text' => __('account.sidebar.account.items.overview')
                                ])
                                @endcomponent
                                @component('components.sidebar.nav-item', [
                                  'active' => on_page('account.profile.index'),
                                  'href' => route('account.profile.index'),
                                  'text' => __('account.sidebar.account.items.profile')
                                ])
                                @endcomponent
                                @component('components.sidebar.nav-item', [
                                  'active' => on_page('account.password.index'),
                                  'href' => route('account.password.index'),
                                  'text' => __('account.sidebar.account.items.change_password')
                                ])
                                @endcomponent
                                @component('components.sidebar.nav-item', [
                                  'active' => on_page('account.deactivate.index'),
                                  'href' => route('account.deactivate.index'),
                                  'text' => __('account.sidebar.account.items.deactivate')
                                ])
                                @endcomponent
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ return_if(current_route_group(1) === 'subscription', ' active') }}" href="#navbar-components" data-toggle="collapse" role="button"
                            aria-expanded="{{ current_route_group(1) === 'subscription' ? 'true' : 'false' }}" aria-controls="navbar-components">
                            <i class="fa fa-credit-card" aria-hidden="true"></i>
                            <span class="nav-link-text">{{ __('account.sidebar.subscription.header') }}</span>
                        </a>
                        @subscribed
                        @notpiggybacksubscription
                            <!-- Subscription Links -->
                            <div class="collapse {{ current_route_group(1) === 'subscription' ? 'show' : '' }}" id="navbar-components">
                                <ul class="nav nav-sm flex-column">

                                    @subscriptionnotcancelled
                                        @component('components.sidebar.nav-item', [
                                          'active' => on_page('account.subscription.swap.index'),
                                          'href' => route('account.subscription.swap.index'),
                                          'text' => __('account.sidebar.subscription.items.change_plan')
                                        ])
                                        @endcomponent
                                        @component('components.sidebar.nav-item', [
                                          'active' => on_page('account.subscription.invoice.index'),
                                          'href' => route('account.subscription.invoice.index'),
                                          'text' => __('account.sidebar.subscription.items.invoices')
                                        ])
                                        @endcomponent
                                    @endsubscriptionnotcancelled

                                    @subscriptioncancelled
                                        @component('components.sidebar.nav-item', [
                                          'active' => on_page('account.subscription.resume.index'),
                                          'href' => route('account.subscription.resume.index'),
                                          'text' => __('account.sidebar.subscription.items.resume')
                                        ])
                                        @endcomponent
                                    @endsubscriptioncancelled

                                    @component('components.sidebar.nav-item', [
                                      'active' => on_page('account.subscription.card.index'),
                                      'href' => route('account.subscription.card.index'),
                                      'text' => __('account.sidebar.subscription.items.update_card')
                                    ])
                                    @endcomponent
                                </ul>
                            </div>
                        @endnotpiggybacksubscription
                        @endsubscribed
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ return_if(current_route_group(1) === 'sites', ' active') }}"
                           href="{{ route('account.sites.index') }}" role="button" aria-controls="navbar-sites">
                            <i class="fa fa-sitemap" aria-hidden="true"></i>
                            <span class="nav-link-text">{{ __('account.sidebar.sites.header') }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ return_if(current_route_group(1) === 'audits', ' active') }}"
                           href="{{ route('account.audits.create') }}" role="button" aria-controls="navbar-audits">
                            <i class="fa fa-compress-arrows-alt" aria-hidden="true"></i>
                            <span class="nav-link-text">{{ __('account.sidebar.audits.header') }}</span>
                        </a>
                    </li>
                    @notsubscribed
                    <li class="nav-item">
                        <a class="nav-link {{ return_if(on_page('plans.index') or on_page('plans.teams.index'), ' active') }}" href="#navbar-plans" data-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="navbar-forms">
                            <i class="fas fa-dollar-sign"></i>
                            <span class="nav-link-text">Pricing Plan</span>
                        </a>
                        <div class="collapse" id="navbar-plans">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link{{ return_if(on_page('plans.index'), ' active') }}"
                                            href="{{ route('plans.index') }}">
                                            <i class="far fa-user"></i>
                                            User Plan
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link{{ return_if(on_page('plans.teams.index'), ' active') }}"
                                    href="{{ route('plans.teams.index') }}">
                                            <i class="fas fa-users"></i>
                                            Team Plan
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </li>
                    @endnotsubscribed
                    <li class="nav-item">
                        <a class="nav-link{{ return_if(current_route_group(1) === 'ticket', ' active') }}" href="{{ route('ticket.index') }}" role="button"
                            aria-controls="navbar-forms">
                            <i class="fas fa-ticket-alt"></i>
                            <span class="nav-link-text">{{ __('account.sidebar.tickets.header') }}</span>
                        </a>
                    </li>
{{--                    <li class="nav-item">--}}
{{--                        <a class="nav-link{{ return_if(on_page('account.mynotification.index'), ' active') }}" href="{{ route('account.mynotification.index') }}" role="button" aria-controls="navbar-notifications">--}}
{{--                            <i class="fas fa-bell"></i>--}}
{{--                            <span class="nav-link-text">{{ __('account.sidebar.notifications.header') }}</span>--}}
{{--                        </a>--}}
{{--                    </li>--}}
                </ul>
                <!-- Divider -->
{{--                <hr class="my-3">--}}
{{--                <!-- Heading -->--}}
{{--                <h6 class="navbar-heading p-0 text-muted">Documentation</h6>--}}
{{--                <!-- Navigation -->--}}
{{--                <ul class="navbar-nav mb-md-3">--}}
{{--                    <li class="nav-item">--}}
{{--                        <a class="nav-link"--}}
{{--                            href="https://saas-demo.creatydev.com/docs" target="blank__"--}}
{{--                            target="_blank">--}}
{{--                            <i class="ni ni-spaceship"></i>--}}
{{--                            <span class="nav-link-text">Getting started</span>--}}
{{--                        </a>--}}
{{--                    </li>--}}
{{--                </ul>--}}
            </div>
        </div>
    </div>
</nav>