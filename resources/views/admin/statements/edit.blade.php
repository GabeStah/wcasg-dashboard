@extends('admin.layouts.default')

@section('admin.breadcrumb')
  <li class='breadcrumb-item active'>Accessibility Statement</li>
@endsection

@section('admin.content')
  <div class="clearfix">
    <div class="card">
      <div class="card-header">
        <strong>Update Accessibility Statement</strong>
      </div>
      @if (session('status'))
        <div class="alert alert-success">
          {{ session('status') }}
        </div>
      @endif
      <div class="card-body">
        <form action="{{ route('admin.statements.update', $statement->id) }}" method="POST"
              class="form-horizontal offset-sm-2">
          {!! csrf_field() !!}
          @method('PUT')

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="template">Template</label>
            <div class="col-md-6" v-pre>
              <select id="template" name="template" onchange="tinyMCE.get('content').setContent(this.options[this.selectedIndex].getAttribute('data-content'))">
                @foreach ($templates as $template)
                  <option value="{{ $template->id }}"
                          data-content="{{ $template->content }}"
                      {{ $statement->statementTemplate->id === $template->id ? 'selected' : '' }}>
                    {{ $template->name }}
                  </option>
                @endforeach
              </select>
              @if ($errors->has('template'))
                <span class="text-danger">{{ $errors->first('template') }}</span>
              @endif
            </div>
          </div>

          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="config">Config</label>
            <div class="col-md-6">
              <textarea type="text" id="config" name="config" class="form-control"
                        placeholder="Enter Config" v-pre>{{ json_encode($statement->config) }}</textarea>

              @if ($errors->has('config'))
                <span class="text-danger">{{ $errors->first('config') }}</span>
              @endif
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="content">Content</label>
            <div class="col-md-6">
              <textarea id="content" name="content" class="form-control custom-editor" style="min-height: 400px;"
                        placeholder="Enter Content" v-pre>{{ $statement->content }}</textarea>

              @if ($errors->has('content'))
                <span class="text-danger">{{ $errors->first('content') }}</span>
              @endif
            </div>
          </div>
          <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i>
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
@endsection