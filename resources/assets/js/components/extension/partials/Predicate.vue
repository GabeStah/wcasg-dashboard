<template>
  <div>
    <div v-if="!predicate.dirty">
      <h3>
        <info-icon :text="i8n.assertion" />Assertion: {{ predicate.name }}
      </h3>
    </div>
    <div v-if="predicate.dirty" class="d-flex">
      <info-icon :text="i8n.assertion" />
      <input
        class="d-inline-flex form-control w-25 ml-2"
        type="text"
        v-if="predicate.dirty"
        v-model="predicate.name"
        placeholder="Enter Assertion Name"
      />
    </div>
    <div class="mb-4 mt-2" style="height: 300px">
      <editor
        :editor-id="`predicate-${predicate.id}`"
        :content="decompress(predicate.function)"
        type="predicate"
        :model-id="predicate.id"
        v-on:change-content="handleChange"
      ></editor>
    </div>
    <update-button
      v-if="!predicate.dirty"
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
        this.$emit('predicate-change-content', this.content);
      }
    },
    async update() {
      this.isLoading = true;
      const result = await axios
        .post(this.url(), {
          fn: this.content,
          id: this.predicate.id,
          site_id: this.site ? this.site.id : null,
          type: 'predicate'
        })
        .catch(error => console.log(error));
      this.isLoading = false;
    }
  },
  mixins: [extensionMixin],
  props: {
    i8n: Object,
    predicate: Object,
    site: {
      type: Object,
      required: false
    }
  }
};
</script>
