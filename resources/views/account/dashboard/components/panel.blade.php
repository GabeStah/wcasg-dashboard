<div
    id="panels[{{ $panel->name }}]"
    data-panel-name="{{ $panel->name }}"
    class="custom-editor card w-100"
    v-html="{{ json_encode($panel->data) }}"
>
</div>