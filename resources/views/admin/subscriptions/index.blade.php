@extends('admin.layouts.default')

@section('admin.breadcrumb')
<li class='breadcrumb-item active'>Subscriptions</li>
@endsection

@section('styles')
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.css"/>
    <style>
        table {
            font-size: 85%;
        }
        th, td {
            text-align: center;
        }
    </style>
@endsection

@section('admin.content')
<div class="clearfix">
    <div class="col-lg">
        <div class="card">
            <div class="card-header">
                <i class="fa fa-align-justify"></i> Subscriptions
            </div>
            <div class="card-body">
                <table class="table table-responsive-sm table-striped table-bordered table-hover table-condensed dt-responsive nowrap">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Company</th>
                            <th>Plan</th>
                            <th>Trial end</th>
                            <th>Plan end</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($subscriptions as $subscription )
                        <tr>
                            <td><a href="{{ route('admin.users.edit', $subscription->user->id) }}">{{ $subscription->user->name }}</a></td>
                            <td>{{ $subscription->user->company_name }}</td>
                            <td><a href="{{ route('admin.plans.edit', $subscription->plan->id) }}">{{ $subscription->plan->nickname }}</a></td>
                            <td>{{ $subscription->trial_ends_at }}</td>
                            <td>
                                {{ $subscription->ends_at }}
                            </td>
                            <td>{{ \Carbon\Carbon::parse($subscription->updated_at) }}</td>
                            <td>{{ \Carbon\Carbon::parse($subscription->created_at) }}</td>
                            <td>
                                 {{ $subscription->stripe_status }}
                            </td>
                        </tr>
                        @endforeach
                     </tbody>
                </table>
                {{ $subscriptions->links() }}
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js"></script>

    <script>
        $(document).ready(function () {
            var $body = $('body');
            var table = $('table').DataTable({
                "info": false,
                "order": [0, 'asc'],
                "responsive": true,
                "paging": false,
                "pageLength": 20,
                "autoWidth": true,
                aoColumnDefs: [
                    {
                        bSortable: false,
                        aTargets: [-1]
                    }
                ]
            });
            // confirm delete
            $body.on('click', '.confirm-delete', function (e) {
                var label = $(this).data('label');
                var $dialog = $('#modal-delete-confirm');
                $dialog.find('.modal-body').html('You are about to delete <strong>' + label + '</strong>, continue ?');
                $dialog.find('form').attr('action', this.rel);
                $dialog.modal('show');
                e.preventDefault();
            });
            $body.on('click', '.confirm-delete-red-button', function (e) {
                $(this).attr('disabled', true);
                $(this).closest('form')[0].submit();
            });
            // filter columns
            $("#table-log tfoot th:not(:last)").each(function (i) {
                var select = $('<select style="width: 100%;"><option value=""></option></select>')
                    .appendTo($(this).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex($(this).val());
                        table.column(i)
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });
                table.column(i).data().unique().sort().each(function (val, idx) {
                    select.append('<option value="' + val + '">' + val + '</option>')
                });
            });
            // put filters on header
            $('tfoot').css('display', 'table-header-group');
        });
    </script>
@endsection