@extends('account.layouts.default')

@section('content')
  <div class="row">
      <div class="col-12">
          <h1>MY DASHBOARD</h1>
          <h3 class="text-muted font-weight-light">Welcome to the WCASG client area</h3>
      </div>
  </div>

  <div class="row mt-3 ">
      <div class="col-12 col-lg-6 d-flex align-items-stretch w-100">
        @component('account.dashboard.components.intro')
        @endcomponent
      </div>

      <div class="col-12 col-lg-6 align-items-stretch text-white">
        @component('account.dashboard.components.statistics', [
          'statistics' => $statistics
        ])
        @endcomponent
      </div>
  </div>
      
  <div class="row mt-3">
    <div class="col-6">
      @component('account.dashboard.components.panel', [
        'panel' => $leftPanel
      ])
      @endcomponent
    </div>
    <div class="col-6">
      @component('account.dashboard.components.panel', [
        'panel' => $rightPanel
      ]))
      @endcomponent
    </div>
  </div>
@endsection

@section('scripts')
  <!-- Initialize editor for admin only -->
  @role('admin')
  <!-- Text Editor -->
  <script src="{{ asset('vendor/tinymce/tinymce.min.js') }}"></script>
  <script>
      const token = {!! json_encode($token) !!};
      const updateDashboardPanelData = function(name, data) {
          fetch(`/api/configuration?token=${token}`, {
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json, text-plain, */*",
                  "X-Requested-With": "XMLHttpRequest"
              },
              method: 'post',
              body: JSON.stringify({
                  name: name,
                  data: data
              })
          })
              .catch(function(error) {
                  console.log(error);
              });
      }

      const editor_config = {
          path_absolute: "/",
          selector: ".custom-editor",
          inline: true,
          setup: function (editor) {
              editor.on('blur', function () {
                  // Get parent element of editor, then panel-name data attribute value
                  const name = editor.getElement().dataset.panelName;
                  if (editor.startContent !== editor.getContent({format : 'raw'})) {
                      // If text changed make API call
                      updateDashboardPanelData(name, editor.getContent());
                      // Save editor to reset initial content dirty flag reset
                      editor.save();
                  }
              });
          },
          plugins: [
              "advlist autolink lists link image charmap print preview hr anchor pagebreak",
              "searchreplace wordcount visualblocks visualchars code fullscreen",
              "insertdatetime media nonbreaking save table directionality",
              "emoticons template paste textpattern"
          ],
          toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
          relative_urls: false,
          file_browser_callback: function (field_name, url, type, win) {
              var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
              var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

              var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
              if (type === 'image') {
                  cmsURL = cmsURL + "&type=Images";
              } else {
                  cmsURL = cmsURL + "&type=Files";
              }

              tinyMCE.activeEditor.windowManager.open({
                  file: cmsURL,
                  title: 'Filemanager',
                  width: x * 0.8,
                  height: y * 0.8,
                  resizable: "yes",
                  close_previous: "no"
              });
          }
      };

      tinymce.init(editor_config);
  </script>
  @endrole
@endsection