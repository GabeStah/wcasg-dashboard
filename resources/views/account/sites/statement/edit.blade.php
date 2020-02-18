@extends('account.layouts.default')
@section('title', 'Edit Accessibility Statement')
@section('content')
  <div class="card card-default">
    <div class="card-header border-0">
      <h2 class="mb-0"><i class="fas fa-universal-access"></i>Edit Accessibility Statement</h2>
    </div>
    <div class="card-body">
      <form action="{{ route('account.sites.statement.update', $statement->id) }}" method="POST"
            class="form-horizontal offset-sm-2">
        {{ csrf_field() }}
        @method('PUT')

        <div class="form-group row">
          <label class="col-md-3 col-form-label" for="template">Template</label>
          <div class="col-md-6" v-pre>
            <select id="template" name="template" onchange="document.querySelector('#content').innerHTML = this.options[this.selectedIndex].getAttribute('data-content')">
              @foreach ($templates as $template)
                <option value="{{ $template['id'] }}"
                        data-content="{{ $template['content'] }}"
                    {{ $statement->statementTemplate->id === $template['id'] ? 'selected' : '' }}>
                  {{ $template['name'] }}
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
          <div id="content" class="col-md-6" v-pre>{!! $content !!}</div>
        </div>

        <div class="form-group row">
          <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i>
              Update
            </button>
          </div>
        </div>
      </form>

    </div>
@endsection