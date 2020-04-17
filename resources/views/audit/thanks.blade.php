@extends('layouts.app')

@section('content')
    <section class="d-flex align-items-center" id="audit">
        <div class="container">
            <div class="content">
                <div class="content">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6">
                            <div class="left">
                                <h3>Thank you for your request!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo harum optio placeat quidem quis sit tenetur, totam! Consequuntur cupiditate dicta earum fugit mollitia officia sunt. At id impedit optio quos?</p>
                                <a href="{{ route('register') }}" class="btn btn-primary btn-lg">Get Registered</a>
                            </div>
                        </div>
                        <!-- Right-->
                        <div class="col-md-6">
                            <div class="right">
                                <img src="{{ asset('saas/img/undraw_super_thank_you.png') }}" alt="slider-img" class="img-fluid wow fadeInRight" data-wow-offset="1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
