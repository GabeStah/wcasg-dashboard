<template>
  <div>
    <div class="row">
      <h3>
        <h3><info-icon :text="i8n.action" />Action: {{ action.name }}</h3>
      </h3>
    </div>
    <div class="mb-4" style="height: 300px">
      <editor
        :editor-id="`action-${action.id}`"
        :content="decompress(action.function)"
        type="action"
        :model-id="action.id"
        v-on:change-content="handleChange"
      ></editor>
    </div>
    <update-button
      on-loading-text="Saving..."
      :is-loading="isLoading"
      :on-click="update"
      text="Update Action"
    ></update-button>
  </div>
</template>

<script>
import Editor from '../partials/Editor';
import UpdateButton from './Button';
import axios from 'axios';
import { extensionMixin } from '../mixins';

export default {
  components: {
    Editor,
    UpdateButton
  },
  data() {
    return {
      content: String,
      isLoading: false
    };
  },
  methods: {
    handleChange(value) {
      if (value && value !== this.content) {
        this.content = value;
      }
    },
    async update() {
      this.isLoading = true;
      const result = await axios.post(`/api/extension?XDEBUG_SESSION_START=1`, {
        fn: this.content,
        id: this.action.id,
        site_id: this.site.id,
        type: 'action'
      }).catch(error => console.log(error));
      this.isLoading = false;
    }
  },
  mixins: [extensionMixin],
  props: {
    i8n: Object,
    action: Object,
    site: Object
  }
};
</script>
