@extends('account.layouts.default')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <div class="card text-center">
                    <h1 class="my-3 text-truncate">
                        <small>$</small> {{ cents_to_decimal($plan->amount) }}
                    </h1>

                    <div class="card-body">
                        <h5 class="card-title">{{ $plan->nickname }}</h5>

                        <a class="btn btn-primary" href="{{ route('subscription.index', ['plan' => $plan]) }}">Subscribe</a>
                    </div><!-- /.card-body -->
                </div><!-- /.card -->
            </div><!-- /.col-sm-8 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
@endsection