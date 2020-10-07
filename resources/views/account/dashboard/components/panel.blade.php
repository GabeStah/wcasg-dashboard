<div class="card">
  <div class="card-body">
    <div
        id="panels[{{ $panel->name }}]"
        data-panel-name="{{ $panel->name }}"
        class="custom-editor"
        v-html="{{ json_encode($panel->data) }}"
    >
    </div>
  </div>
</div>