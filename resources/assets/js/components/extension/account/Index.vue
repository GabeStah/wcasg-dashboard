<template>
  <div class="features">
    <div class="card">
      <div v-if="extensions">
        <div class="col-sm-12" v-for="extension in extensions" :key="extension.id">
          <extension
            :initial-extension="extension"
            :i8n="i8n"
            :site="site"
            v-on:update="handleExtensionUpdated"
            v-on:delete="handleExtensionDeleted"
          ></extension>
        </div>
      </div>
      <div>
        <a href="#">
          <button class="btn btn-primary m-3 ml-4" v-on:click="addExtension">
            {{ i8n.add_new_button }}
          </button>
        </a>
      </div>
      <error :error="error" :is-loading="isLoading"></error>
    </div>
  </div>
</template>

<script>
import Action from '../partials/Action';
import Editor from '../partials/Editor';
import Error from '../../partials/Error';
import Extension from '../partials/Extension';
import Predicate from '../partials/Predicate';
import { extensionMixin } from '../mixins';

export default {
  components: {
    Action,
    Extension,
    Predicate,
    Editor,
    Error
  },
  data() {
    return {
      actions: Object,
      extensions: this.initialExtensions,
      predicates: Object
    };
  },
  methods: {
    addExtension: function() {
      this.extensions.push({
        id: this.getRandomInt(),
        dirty: true,
        actions: [
          {
            id: this.getRandomInt(),
            dirty: true,
            function: this.compress(`function fn() {
    // Add logic here
}`)
          }
        ],
        pivot: {
          enabled_at: new Date(new Date().getTime() - 1000)
        },
        predicates: [
          {
            id: this.getRandomInt(),
            dirty: true,
            function: this.compress(`function fn() {
    // Add logic here
}`)
          }
        ]
      });
    },
    getRandomInt: (max = 999999999) => {
      return Math.floor(Math.random() * Math.floor(max));
    },
    handleExtensionUpdated: function(data) {
      const { id, extension } = data;
      const index = this.extensions.findIndex(extension => extension.id === id);
      if (index) {
        this.$set(this.extensions, index, extension);
      }
    },
    handleExtensionDeleted: function(id) {
      const index = this.extensions.findIndex(extension => extension.id === id);
      if (index) {
        this.extensions.splice(index, 1);
      }
    }
  },
  mixins: [extensionMixin],
  props: { initialExtensions: Array, i8n: Object, site: Object }
};
</script>
