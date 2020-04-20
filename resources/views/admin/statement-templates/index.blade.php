@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Statement Templates</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="col-lg">
      <div class="card">
        <div class="card-header">
          <i class="fa fa-align-justify"></i> Statement Templates
        </div>
        <div class="card-body">
          <table class="table table-responsive-sm table-striped">
            <thead>
            <tr>
              <th aria-label="Name">Name
                <info-icon :text="__('info.views.admin.StatementTemplate.columns.name')"/>
              </th>
              <th aria-label="Default Config">Default Config</th>
              <th aria-label="Content">Content</th>
              <th aria-label="Statements Using"># Sites Using
                <info-icon :text="__('info.views.admin.StatementTemplate.columns.sites-using')"/>
              </th>
              <th aria-label="Default">Is Default
                <info-icon
                    :text="__('info.views.admin.StatementTemplate.columns.is_default')"/>
              </th>
              <th aria-label="Updated At">Last Updated</th>
              <th aria-label="Actions">Actions
                <info-icon :text="__('info.views.admin.StatementTemplate.columns.actions')"/>
              </th>
            </tr>
            </thead>
            <tbody>
            @foreach($templates as $template)
              <tr>
                <td>
                  {{ $template->name }}
                </td>
                <td>
                  <pre>{{ json_encode($template->default_config) }}</pre>
                </td>
                <td>
                  <pre v-pre>{{ Illuminate\Support\Str::limit($template->content, 100) }}</pre>
                </td>
                <td>{{ count($template->sites) }}</td>
                <td>
                  @if($settings->default_statement_template === $template->id)
                    <i class="fa fa-check-circle"></i>
                  @endif
                </td>
                <td>{{ $template->updated_at->diffForHumans() }}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="User Actions">
                    <a href="{{ route('admin.statement-templates.show', $template->id) }}"
                       data-toggle="tooltip"
                       data-placement="top"
                       data-original-title="View"
                       title=""
                       class="btn btn-outline-success mx-1">
                      <i class="fa fa-search "></i>
                    </a>
                    <a href="{{ route('admin.statement-templates.edit', $template->id) }}"
                       data-toggle="tooltip"
                       data-placement="top"
                       data-original-title="Edit"
                       title=""
                       class="btn btn-outline-primary mx-1"
                    >
                      <i class="fa fa-edit "></i>
                    </a>
                    @if (count($template->sites) === 0 && $settings->default_statement_template !== $template->id)
                      <form action="{{ route('admin.statement-templates.destroy', $template->id)}}" method="post">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-outline-danger mx-1" type="submit"
                                onclick="return confirm('Are you sure?')"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-original-title="Delete">
                          <i class="fa fa-trash-o "></i>
                        </button>
                      </form>
                    @endif
                  </div>
                </td>
              </tr>
            @endforeach
            </tbody>
          </table>
          {{ $templates->links() }}
        </div>
      </div>
    </div>
  </div>
@endsection