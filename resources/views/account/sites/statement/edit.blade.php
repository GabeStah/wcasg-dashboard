@extends('account.layouts.default')
@section('title', 'Edit Accessibility Statement')
@section('content')
  <div class="card card-default">
    <form action="{{ route('account.sites.statement.update', $statement->id) }}" method="POST">
      {{ csrf_field() }}
      @method('PUT')
      <div class="card-header border-0">
        <h2 class="mb-0"><i class="fas fa-universal-access"></i>Edit Accessibility Statement</h2>
        <div class="float-right btn-group" role="group" aria-label="User Actions">
          <button type="submit"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  class="btn btn-outline-primary mx-1"
                  data-original-title="Save Accessibility Statement">
            <i class="fa fa-save"></i> Save
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="form-group row">
          <label class="col-md-3 col-form-label" for="template">Template</label>
          <div class="col-md-6" v-pre>
            <select id="template" name="template"
                    onchange="document.querySelector('#content').innerHTML = this.options[this.selectedIndex].getAttribute('data-content')">
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
      </div>
    </form>
  </div>
@endsection