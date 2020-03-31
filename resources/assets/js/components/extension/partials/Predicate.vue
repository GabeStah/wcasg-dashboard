<template>
  <div>
    <div class="row">
      <h3>
        <info-icon :text="i8n.assertion" />Assertion: {{ predicate.name }}
      </h3>
    </div>
    <div class="mb-4" style="height: 300px">
      <editor
        :editor-id="`predicate-${predicate.id}`"
        :content="decompress(predicate.function)"
        type="predicate"
        :model-id="predicate.id"
        v-on:change-content="handleChange"
      ></editor>
    </div>
    <update-button
      on-loading-text="Saving..."
      :is-loading="isLoading"
      :on-click="update"
      text="Update Assertion"
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
        id: this.predicate.id,
        site_id: this.site.id,
        type: 'predicate'
      }).catch(error => console.log(error));
      this.isLoading = false;
    }
  },
  mixins: [extensionMixin],
  props: {
    i8n: Object,
    predicate: Object,
    site: Object
  }
};
</script>
