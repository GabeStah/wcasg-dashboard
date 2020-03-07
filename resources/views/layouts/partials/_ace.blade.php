@section('scripts')
  @parent
  <script src="{{ asset('vendor/ace/ace.js') }}" type="text/javascript" charset="utf-8"></script>
  <script>
    var editors = document.querySelectorAll(".editor");
    editors.forEach(function(elem) {
      var editor = ace.edit(elem);
      editor.setTheme("ace/theme/chrome");
      editor.getSession().setMode("ace/mode/javascript");
      editor.setShowFoldWidgets(true);
    });
  </script>
@endsection
