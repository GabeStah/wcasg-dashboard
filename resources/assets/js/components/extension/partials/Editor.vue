<template>
  <div :id="editorId" style="width: 100%; height: 100%;"></div>
</template>

<script>
import ace from '../../../ace/ace';
import beautify from 'js-beautify';
export default {
  props: ['editorId', 'content', 'lang', 'theme'],
  data() {
    return {
      beforeContent: '',
      editor: Object,
    };
  },
  watch: {
    content(value) {
      if (this.beforeContent !== value) {
        this.editor.setValue(value, 1);
      }
    }
  },
  mounted() {
    const lang = this.lang || 'javascript';
    const theme = this.theme || 'chrome';
    ace.config.set('basePath', '../../../../../../vendor/ace');

    this.editor = ace.edit(this.editorId);
    this.editor.setValue(
      beautify(this.content, {
        indent_size: 4,
        space_in_empty_paren: true,
        wrap_line_length: 120
      }),
      1
    );

    this.editor.setShowPrintMargin(false);
    this.editor.getSession().setMode(`ace/mode/${lang}`);
    this.editor.setTheme(`ace/theme/${theme}`);

    this.editor.on('change', () => {
      this.beforeContent = this.editor.getValue();
      this.$emit('change-content',  beautify(this.editor.getValue(), {
        indent_size: 4,
        space_in_empty_paren: true,
        wrap_line_length: 120
      }));
    });
  }
};
</script>
