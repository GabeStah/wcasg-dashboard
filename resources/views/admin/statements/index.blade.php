@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Accessibility Statements</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="col-lg">
      <div class="card">
        <div class="card-header">
          <i class="fa fa-align-justify"></i> Accessibility Statements
        </div>
        <div class="card-body">
          <table class="table table-responsive-sm table-striped">
            <thead>
              <tr>
                <th aria-label="Config">Config</th>
                <th aria-label="Template">Template</th>
                <th aria-label="Sites Using">Sites Using</th>
                <th aria-label="Updated At">Last Updated</th>
                <th aria-label="Actions">Actions</th>
              </tr>
            </thead>
            <tbody>
            @foreach($statements as $statement)
              <tr>
                <td>
                  <pre>{{ json_encode($statement->config) }}</pre>
                </td>
                <td>
                  <pre v-pre>{{ $statement->statementTemplate->name }}</pre>
                </td>
                <td>{{ count($statement->sites) }}</td>
                <td>{{ $statement->updated_at->diffForHumans() }}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="User Actions">
                    <a href="{{ route('admin.statements.show', $statement->id) }}"
                       data-toggle="tooltip"
                       data-placement="top"
                       title=""
                       class="btn btn-outline-success mx-1"
                       data-original-title="View">
                      <i class="fa fa-search "></i>
                    </a>
                    <a href="{{ route('admin.statements.edit', $statement->id) }}"
                       data-toggle="tooltip"
                       data-placement="top"
                       title=""
                       class="btn btn-outline-primary mx-1"
                       data-original-title="Edit">
                      <i class="fa fa-edit "></i>
                    </a>
                    <form action="{{ route('admin.statements.destroy', $statement->id)}}" method="post">
                      @csrf
                      @method('DELETE')
                      <button class="btn btn-outline-danger mx-1" type="submit"
                              onclick="return confirm('Are you sure?')">
                        <i class="fa fa-trash-o "></i>
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
@endsection