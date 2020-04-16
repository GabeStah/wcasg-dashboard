@extends('admin.layouts.default')

@section('admin.breadcrumb')
    <li class='breadcrumb-item active'>QuickBooks</li>
@endsection

@section('admin.content')
    <div class="clearfix">
        <div class="col-lg">
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-align-justify"></i>WCASG Connector
                </div>
                <div class="card-body">
                    <h3>About</h3>
                    <p>The WCASG Connector is a custom application that communicates and transmits data between WCASG, Stripe, and QuickBooks Online.  This connection ensures changes made to objects like customers, plans, products, and subscriptions are automatically updated in the associated QuickBooks Online account.</p>
                    <h3>Authorization</h3>
                    <p>Intuit requires explicit authorization before allowing the WCASG Connector to transmit data to and from QuickBooks Online.  The Connector maintains the previous authorization for as long as possible, but eventually the active authorization expires and needs to be renewed by an administrator.</p>
                    <h3>Renewal</h3>
                    <p>By clicking the button below you will be forwarded to the Connector app's authorization page, which then routes you to Intuit's authorization page.  You will be asked to login and reauthorize the WCASG Connector application so it can continue connecting to the associated QuickBooks Online account.</p>
                    <p>After authorizing the Connector you will be returned to a Connector page with a message indicating that Intuit authorization has been updated.</p>
                    <a href="{{ config('solarix.connector.intuit_authorize_endpoint') }}" target="_blank">
                        <button class="btn btn-primary mb-2"><i class="fa fa-lock mr-2"></i>Authorize WCASG Connector for QuickBooks Online</button>
                    </a>
                    <h3>Expiration</h3>
                    <p>The WCASG Connector attempts to retain authorization for a few months.  However, should the Connector become deauthorized or an error occur, an email will be dispatched to a WCASG admin informing them that the Connector must be reauthorized from this page.</p>
                </div>
            </div>
        </div>
    </div>
@endsection