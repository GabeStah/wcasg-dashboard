@extends('account.layouts.default')

@section('content')
    <div class="card">

        <div class="card-body">
            <h2 class="card-title">Resume Subscription</h2>
            <p>Confirm to resume your subscription.</p>

            <form method="POST" action="{{ route('account.subscription.resume.store') }}">
                @csrf

                <div class="form-group">
                    <button type="submit" class="btn btn-primary"
                            data-confirmation
                            data-confirmation-title="Resume Subscription"
                            data-confirmation-text="Are you sure you wish you resume your subscription?"
                            data-confirmation-icon="warning"
                            data-confirmation-yes="Yes"
                            data-confirmation-no="No"
                    >
                        Resume
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
