<template>
  <div class="features">
    <div class="card">
      <div v-if="extensions">
        <div class="col-sm-12" v-for="extension in extensions">
          <div
            class="card-header"
            data-toggle="collapse"
            :data-target="`#extension-body-${extension.id}`"
            :aria-controls="`#extension-body-${extension.id}`"
            aria-expanded="false"
            style="cursor: pointer;"
          >
            <span>{{ extension.name }}</span>
            <span v-if="extension.imported" class="badge badge-primary"
              >Built-In<info-icon :text="i8n.type.built_in"></info-icon
            ></span>
            <span v-else-if="!extension.imported" class="badge badge-secondary"
              >Custom<info-icon :text="i8n.type.custom"></info-icon
            ></span>
            <p class="card-text">{{ extension.description }}</p>
          </div>

          <div
            :id="`extension-body-${extension.id}`"
            class="collapse multi-collapse"
          >
            <div class="col col-9 m-3 px-4 pl-4" v-for="predicate in extension.predicates">
                <predicate :i8n="i8n" :predicate="predicate" :site="site" />
            </div>
            <div class="col col-9 m-3 pl-4 px-4" v-for="action in extension.actions">
                <action :i8n="i8n" :action="action" :site="site" />
            </div>
          </div>
        </div>
      </div>
      <error :error="error" :is-loading="isLoading"></error>
    </div>
  </div>
</template>

<script>
  import Editor from '../partials/Editor';
  import Error from '../../partials/Error';
  import Action from '../partials/Action';
  import Predicate from '../partials/Predicate';
  import {extensionMixin} from '../mixins';

  export default {
   components: {
    Action,
    Predicate,
    Editor,
    Error,
  },
  data() {
    return {
      actions: Object,
      predicates: Object
    };
  },
  mixins: [extensionMixin],
  props: ['extensions', 'i8n', 'site']
};
</script>
