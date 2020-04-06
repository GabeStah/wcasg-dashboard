@extends('layouts.app')

@section('content')
        <!-- ======== Start Slider ======== -->
        <section class="slider d-flex align-items-center" id="slider">
            <div class="container">
                <div class="content">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6">
                            <div class="left">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien mauris, varius sed tortor in, scelerisque iaculis justo. Nullam molestie eleifend mauris. Nulla dignissim hendrerit est sed pellentesque. </h3>
                                    <p>
                                        <strong>Sed eget lectus quis arcu aliquet facilisis vitae nec quam. Sed quam diam, bibendum eget dignissim a, ullamcorper sed lacus. Fusce eget magna elit. Suspendisse ac ipsum et nisl facilisis porttitor in tristique sem. Sed ullamcorper semper egestas.</strong>
                                    </p>
                                    <p>
                                    Nam interdum tristique ante sit amet sagittis. Sed vestibulum ipsum a tortor congue iaculis. Nulla consequat sem id tortor luctus, sit amet tempus lorem eleifend. Sed viverra nec libero eu lobortis. Praesent sodales sagittis semper. Etiam elementum neque sit amet nulla tristique porta. Fusce dictum enim nec nisi tincidunt, non varius neque maximus. Nam id purus sit amet justo ullamcorper volutpat.
                                </p>
                                <a href="{{ route('register') }}" class="btn-1">Get Started</a>
{{--                                <a href="/docs" class="btn-2">View documention</a>--}}
                            </div>
                        </div>
                        <!-- Right-->
                        <div class="col-md-6">
                            <div class="right">
                                <img src="{{ asset('saas/img/slider-img.png') }}" alt="slider-img" class="img-fluid wow fadeInRight" data-wow-offset="1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ======== End Slider ======== -->

{{--        <!-- ======== Start Features ======== -->--}}
{{--        <section class="features" id="features">--}}
{{--            <div class="container text-center">--}}
{{--                <div class="heading">--}}
{{--                    <h2>Exclusive Features</h2>--}}
{{--                </div>--}}
{{--                <div class="line"></div>--}}
{{--                <div class="row">--}}
{{--                    <!-- Box-1 -->--}}
{{--                    <div class="col-md-4">--}}
{{--                        <div class="box">--}}
{{--                            <img src="{{ asset('saas/img/feature-1.png') }}" alt="feature-1">--}}
{{--                            <h3>Multi-tenancy</h3>--}}
{{--                            <p>Etiam ac scelerisque justo. Integer arcu risus, posuere in ornare a, euismod non ex. Aenean nec tellus id sapien placerat mollis id quis sapien. --}}
{{--                            </p>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-2 -->--}}
{{--                    <div class="col-md-4">--}}
{{--                        <div class="box">--}}
{{--                            <img src="{{ asset('saas/img/feature-2.png') }}" alt="feature-1">--}}
{{--                            <h3>Build with Statistics</h3>--}}
{{--                            <p>Pellentesque dignissim mi et erat ultricies, quis sodales arcu vestibulum. In tincidunt facilisis congue. Mauris sollicitudin quam lectus, a aliquet elit consectetur eget. </p>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-3 -->--}}
{{--                    <div class="col-md-4">--}}
{{--                        <div class="box">--}}
{{--                            <img src="{{ asset('saas/img/feature-3.png') }}" alt="feature-1">--}}
{{--                            <h3>Beautiful Design</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. Maecenas aliquam libero justo. Vivamus ullamcorper ornare tellus, ut ultrices nulla. </p>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}

{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Features ======== -->--}}

{{--        <!-- ======== Start Some Facts ======== -->--}}
{{--        <section class="some-facts">--}}
{{--            <div class="container text-center">--}}
{{--                <div class="row">--}}
{{--                    <!-- Box-1 -->--}}
{{--                    <div class="col-lg-3 col-sm-6">--}}
{{--                        <div class="items">--}}
{{--                            <img src="{{ asset('saas/img/some-fact/1.png') }}" alt="some-fact-1">--}}
{{--                            <h3>--}}
{{--                                <span class="counter">1,200</span>+</h3>--}}
{{--                            <div class="line mx-auto"></div>--}}
{{--                            <h4>Clients</h4>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-2 -->--}}
{{--                    <div class="col-lg-3 col-sm-6">--}}
{{--                        <div class="items">--}}
{{--                            <img src="{{ asset('saas/img/some-fact/2.png') }}" alt="some-fact-1">--}}
{{--                            <h3>$--}}
{{--                                <span class="counter">3,15</span>M</h3>--}}
{{--                            <div class="line mx-auto"></div>--}}
{{--                            <h4>Invested</h4>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-3 -->--}}
{{--                    <div class="col-lg-3 col-sm-6">--}}
{{--                        <div class="items">--}}
{{--                            <img src="{{ asset('saas/img/some-fact/3.png') }}" alt="some-fact-1">--}}
{{--                            <h3>--}}
{{--                                <span class="counter">14</span>%</h3>--}}
{{--                            <div class="line mx-auto"></div>--}}
{{--                            <h4>Growth p.a</h4>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-4 -->--}}
{{--                    <div class="col-lg-3 col-sm-6">--}}
{{--                        <div class="items">--}}
{{--                            <img src="{{ asset('saas/img/some-fact/4.png') }}" alt="some-fact-1">--}}
{{--                            <h3>--}}
{{--                                <span class="counter">2,500</span>+</h3>--}}
{{--                            <div class="line mx-auto"></div>--}}
{{--                            <h4>Hours of Work</h4>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}

{{--        </section>--}}
{{--        <!-- ======== End Some Facts ======== -->--}}

{{--        <!-- ======== Start Project ======== -->--}}
{{--        <section class="project">--}}
{{--            <div class="container">--}}
{{--                <div class="row d-flex align-items-center">--}}
{{--                    <!-- Left -->--}}
{{--                    <div class="col-md-6">--}}
{{--                        <img src="{{ asset('saas/img/create-saas.png') }}" alt="project" class="img-fluid">--}}
{{--                    </div>--}}
{{--                    <!-- Right -->--}}
{{--                    <div class="col-md-5">--}}
{{--                        <div class="right">--}}
{{--                            <span>Interdum et malesuada fames ac ante </span>--}}
{{--                            <h2>Aliquam suscipit varius augue. --}}
{{--                                <br>Maximus mauris augue,</h2>--}}
{{--                            <p>--}}
{{--                                Vestibulum euismod consequat tincidunt. Integer ultricies neque at cursus mattis. Integer laoreet volutpat mollis. Donec porttitor rhoncus mauris, ut lobortis nulla laoreet a. Donec et eros pulvinar nisi pharetra faucibus. Sed ornare eu dui ut ornare. Sed commodo enim a gravida consectetur. --}}
{{--                                <br>--}}
{{--                                Vivamus ultricies malesuada ligula, sit amet consectetur justo sollicitudin sit amet. Pellentesque maximus, libero vitae pulvinar finibus, eros mi iaculis nibh, efficitur faucibus ante arcu a libero. Suspendisse vel porttitor quam. Ut at aliquam magna. In malesuada, leo eget iaculis tincidunt, ex magna sollicitudin mauris, id malesuada nunc mauris in risus.</p>--}}
{{--                            <a href="#0" class="btn-1">Get Started</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Project ======== -->--}}

{{--        <!-- ======== Start Video ======== -->--}}
{{--        <section class="video">--}}
{{--            <div class="container text-center">--}}
{{--                <div class="video-icon">--}}
{{--                    <div class="icon-abs">--}}
{{--                        <a href="https://www.youtube.com/watch?v=S6lzo-OWoqI" class="icon pulse expand video-link">--}}
{{--                            <i class="fa fa-play" aria-hidden="true"></i>--}}
{{--                        </a>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Video ======== -->--}}

{{--        <!-- ======== Start Benefits ======== -->--}}
{{--        <section class="benefits" id="benefits">--}}
{{--            <div class="container text-center">--}}
{{--                <div class="heading">--}}
{{--                    <h2>Benefits of Saas Web</h2>--}}
{{--                </div>--}}
{{--                <div class="line"></div>--}}
{{--                <div class="row">--}}
{{--                    <!-- Box-1 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box mb-30">--}}
{{--                            <img src="{{ asset('img/icons/access.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-2 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box mb-30">--}}
{{--                            <img src="{{ asset('img/icons/plan.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-3 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box mb-30">--}}
{{--                            <img src="{{ asset('img/icons/payment.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa.  </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-4 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                            <img src="{{ asset('img/icons/megaphone.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-5 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                            <img src="{{ asset('img/icons/analysis.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-6 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                                <img src="{{ asset('img/icons/api.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-7 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                            <img src="{{ asset('img/icons/password.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-8 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                                <img src="{{ asset('img/icons/pin.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-9 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                                <img src="{{ asset('img/icons/admin.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                            <img src="{{ asset('img/icons/debit-card.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-8 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                                <img src="{{ asset('img/icons/bill.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}

{{--                        </div>--}}
{{--                    </div>--}}
{{--                    <!-- Box-9 -->--}}
{{--                    <div class="col-md-4 col-sm-6">--}}
{{--                        <div class="box">--}}
{{--                                <img src="{{ asset('img/icons/timeline.png') }}" width="80" alt="benefits">--}}
{{--                            <h3>Mauris nec quam non</h3>--}}
{{--                            <p>Cras orci felis, rutrum a libero ut, tempor vehicula massa. </p>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Benifits ======== -->--}}

{{--        <!-- ======== Start Get Started ======== -->--}}
{{--        <section class="get-started">--}}
{{--            <div class="container text-center">--}}
{{--                <span>ornare sit </span>--}}
{{--                <h3>Praesent nisl dolor, suscipit eget laoreet in, iaculis in nunc</h3>--}}
{{--                <a href="#0" class="btn-1">Ornare Sit</a>--}}

{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Get Started ======== -->--}}

{{--        <!-- ======== Start Testimonial ======== -->--}}
{{--        <section class="testimonials">--}}
{{--            <div class="container text-center">--}}
{{--                <div class="heading">--}}
{{--                    <h2>Testimonials</h2>--}}
{{--                </div>--}}
{{--                <div class="line"></div>--}}
{{--                <div class="slick-slider">--}}
{{--                    <!-- Box-1 -->--}}
{{--                    <div class="box">--}}
{{--                        <img src="{{ asset('saas/img/testimonials/1.png') }}" alt="" class="m-auto">--}}
{{--                        <h3>John Doe</h3>--}}
{{--                        <span>Fullstack Devloper</span>--}}
{{--                        <p>--}}
{{--                             Sed eget lectus quis arcu aliquet facilisis vitae nec quam. Sed quam diam.--}}
{{--                        </p>--}}
{{--                    </div>--}}
{{--                    <!-- Box-1 -->--}}
{{--                    <div class="box">--}}
{{--                        <img src="{{ asset('saas/img/testimonials/2.png') }}" alt="" class="m-auto">--}}
{{--                        <h3>John Doez</h3>--}}
{{--                        <span>Developer</span>--}}
{{--                        <p>--}}
{{--                             Sed eget lectus quis arcu aliquet facilisis vitae nec quam. Sed quam diam.--}}
{{--                        </p>--}}
{{--                    </div>--}}
{{--                    <!-- Box-1 -->--}}
{{--                    <div class="box">--}}
{{--                        <img src="{{ asset('saas/img/testimonials/3.png') }}" alt="" class="m-auto">--}}
{{--                        <h3>John Doe</h3>--}}
{{--                        <span>Developer</span>--}}
{{--                        <p>--}}
{{--                             Sed eget lectus quis arcu aliquet facilisis vitae nec quam. Sed quam diam--}}
{{--                        </p>--}}
{{--                    </div>--}}
{{--                    <div class="box">--}}
{{--                            <img src="{{ asset('saas/img/testimonials/4.png') }}" alt="" class="m-auto">--}}
{{--                            <h3>John Doe</h3>--}}
{{--                            <span>Developer</span>--}}
{{--                            <p>--}}
{{--                                     Sed eget lectus quis arcu aliquet facilisis vitae nec quam. Sed quam diam.--}}
{{--                            </p>--}}
{{--                        </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Testimonial ======== -->--}}

{{--        <!-- ======== Start Our Price ======== -->--}}
{{--        <section class="our-price" id="price">--}}
{{--            <div class="container text-center">--}}
{{--                <div class="heading">--}}
{{--                    <h2>Our Price</h2>--}}
{{--                </div>--}}
{{--                <div class="line"></div>--}}
{{--                <div class="row">--}}
{{--                    <!-- Box-1 -->--}}
{{--                    @foreach ($plans as $plan)--}}
{{--                        --}}
{{--                    <div class="col-md-4">--}}
{{--                        <div class="box" @if ($loop->iteration == 2)--}}
{{--                                box-center--}}
{{--                        @endif>--}}
{{--                        @if ($loop->iteration == 2)--}}
{{--                            <a href="#0" class="top-btn">Popular</a>--}}
{{--                        @endif--}}
{{--                            <h3>{{ $plan->nickname }}</h3>--}}
{{--                            <h4>$<span>{{ (float) $plan->amount / 100 }}</span>/ {{ $plan->interval }}</h4>--}}
{{--                            <ul>--}}
{{--                                <li>Admin Panel</li>--}}
{{--                                <li>100GB Storge</li>--}}
{{--                                <li>Unlimited Email</li>--}}
{{--                            </ul>--}}
{{--                            <a href="{{ route('home') }}/subscription?plan={{ $plan->id }}" class="btn-2">Get Started</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                    --}}
{{--                    @endforeach--}}
{{--                    <!-- Box-2 -->--}}
{{--                    --}}{{-- <div class="col-md-4">--}}
{{--                        <div class="box box-center">--}}
{{--                            <a href="#0" class="top-btn">Popular</a>--}}
{{--                            <h3>Standard</h3>--}}
{{--                            <h4>$<span class="blue">45</span>/ Month</h4>--}}
{{--                            <ul>--}}
{{--                                <li>Admin Panel</li>--}}
{{--                                <li>300GB Storge</li>--}}
{{--                                <li>Unlimited Email</li>--}}
{{--                            </ul>--}}
{{--                            <a href="http://saas-boilerplate.test/subscription?plan=User_month_50" class="btn-1">Get Started</a>--}}
{{--                        </div>--}}
{{--                    </div> --}}
{{--                    <!-- Box-3 -->--}}
{{--                    --}}{{-- <div class="col-md-4">--}}
{{--                        <div class="box">--}}
{{--                            <h3>Ultimate</h3>--}}
{{--                            <h4>$<span>85</span>/ Month</h4>--}}
{{--                            <ul>--}}
{{--                                <li>Admin Panel</li>--}}
{{--                                <li>500GB Storge</li>--}}
{{--                                <li>Unlimited Email</li>--}}
{{--                            </ul>--}}
{{--                            <a href="http://saas-boilerplate.test/subscription?plan=Team_plan_100" class="btn-2">Get Started</a>--}}
{{--                        </div>--}}
{{--                    </div> --}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Our Price ======== -->--}}

{{--        <!-- ======== Start Clients ======== -->--}}
{{--        <section class="clients">--}}
{{--            <div class="container">--}}
{{--                <div class="slick-slider-clients">--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/1.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/2.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/3.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/4.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/5.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/1.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/2.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/3.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/4.png') }}" alt="" class="img-fluid"></div>--}}
{{--                    <div class="item"><img src="{{ asset('saas/img/clients/5.png') }}" alt="" class="img-fluid"></div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </section>--}}
{{--        <!-- ======== End Clients ======== -->--}}

        <!-- ======== Start Contact Us ======== -->
        <section class="contact" id="contact">
            <div class="container">
                <div class="heading text-center">
                    <h2>Keep In Touch</h2>
                    <div class="line mb-0"></div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="content row">
                            <!-- Info-1 -->
                            <div class="info col-md-4 d-inline-flex align-items-start">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <div>
                                    <h3 class="d-block">{{ __('contact.header.phone') }}</h3>
                                    <ul class="list-unstyled">
                                        <li class="">{{ __('contact.phone.phone1') }}</li>
                                        <li class="">{{ __('contact.phone.phone2') }}</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Info-2 -->
                            <div class="info col-md-4 d-inline-flex align-items-start">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <div>
                                    <h3 class="d-block">{{ __('contact.header.email') }}</h3>
                                    <ul class="list-unstyled">
                                        <li class=""><a href="mailto:{{ __('contact.email.compliance') }}" aria-label="Contact Email: Compliance">{{ __('contact.email.compliance') }}</a></li>
                                        <li class=""><a href="mailto:{{ __('contact.email.sales') }}" aria-label="Contact Email: Sales">{{ __('contact.email.sales') }}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Info-3 -->
                            <div class="info col-md-4 d-inline-flex align-items-start">
                                <i class="fa fa-street-view" aria-hidden="true"></i>
                                <div>
                                    <h3 class="d-block">{{ __('contact.header.address') }}</h3>
                                    <ul class="list-unstyled">
                                        <li class="">{{ __('contact.address.street') }}</li>
                                        <li class="">{{ __('contact.address.street2') }}</li>
                                        <li class="">{{ __('contact.address.city') }}, {{ __('contact.address.state') }} {{ __('contact.address.postal_code') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

{{--                    <div class="col-md-7">--}}

{{--                        <form>--}}
{{--                            <div class="row">--}}
{{--                                <div class="col-sm-6">--}}
{{--                                    <input type="text" class="form-control" placeholder="Name">--}}
{{--                                </div>--}}
{{--                                <div class="col-sm-6">--}}
{{--                                    <input type="email" class="form-control" placeholder="Email">--}}
{{--                                </div>--}}
{{--                                <div class="col-sm-12">--}}
{{--                                    <input type="text" class="form-control" placeholder="Subject">--}}
{{--                                </div>--}}
{{--                            </div>--}}
{{--                            <div class="form-group">--}}
{{--                                <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>--}}
{{--                            </div>--}}
{{--                            <button class="btn btn-block" type="submit">Send Now!</button>--}}
{{--                        </form>--}}
{{--                    </div>--}}
                </div>
            </div>
        </section>
@endsection
