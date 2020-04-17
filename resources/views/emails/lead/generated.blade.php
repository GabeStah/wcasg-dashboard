<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Audit Lead Generated</title>
        <style>
            .public_url {
            }
        </style>
    </head>
    <body>
        <div>
            <h2>Lead Data</h2>
            <table>
                <thead>
                    <tr>
                        @foreach($lead as $key => $value)
                            <th>{{ $key }}</th>
                        @endforeach
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        @foreach($lead as $key => $value)
                            <td>{{ $value }}</td>
                        @endforeach
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <a class="public_url" href="{{ config('app.url') . "/audit/" . $audit->id }}" target="_blank">
                <h2>Public Results URL</h2>
            </a>
        </div>
        <div>
            <h2>Audit Results</h2>
            <div class="row row-cols-2 d-flex justify-content-center py-3">
                @foreach($results as $result)
                    <div class="col-md-6">
                        <div class="card flex-md-row mb-4 box-shadow h-md-250">
                            <div class="card-body flex-column align-items-start">
                                <h3 class="mb-0 text-dark">
                                    {{ $result->code ?? preg_split('/\./', $result->code).join(' ') }}
                                </h3>
                                <div class="mb-1 text-muted">
                                    <strong class="d-inline-block mb-2 text-primary">
                                        {{ $result->type ?? '' }}
                                    </strong>
                                </div>
                                <p class="card-text mb-auto">
                                    {{ $result->message ?? '' }}
                                </p>
                                <a href="#">{{ $result->selector ?? '' }}</a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </body>
</html>