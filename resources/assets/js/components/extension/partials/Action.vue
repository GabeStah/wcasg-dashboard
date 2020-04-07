<template>
  <div>
    <div v-if="!action.dirty">
      <h3><info-icon :text="i8n.action" />Action: {{ action.name }}</h3>
    </div>
    <div v-if="action.dirty" class="d-flex">
      <info-icon :text="i8n.action" />
      <input class="d-inline-flex form-control w-25 ml-2" type="text" v-if="action.dirty" v-model="action.name" placeholder="Enter Action Name"></input>
    </div>
    <div class="mb-4 mt-2" style="height: 300px">
      <editor
        :editor-id="`action-${action.id}`"
        :content="decompress(action.function)"
        type="action"
        :model-id="action.id"
        v-on:change-content="handleChange"
      ></editor>
    </div>
    <update-button
      v-if="!action.dirty"
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
        this.$emit('action-change-content', this.content);
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
