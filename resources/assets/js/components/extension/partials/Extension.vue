<template>
  <div>
    <div
      :aria-controls="`#extension-body-${extension.id}`"
      :class="{
        'card-header': true,
        'd-flex': true
      }"
    >
      <div class="flex-fill">
        <div class="pb-2">
          <input
            class="w-25 form-control d-inline-flex"
            type="text"
            v-if="extension.dirty"
            v-model="extension.name"
            placeholder="Enter Extension Name"
          />
          <span v-if="!extension.dirty">{{ extension.name }}</span>
          <span v-if="extension.imported" class="badge badge-primary"
            >Built-In<info-icon :text="i8n.type.built_in"></info-icon
          ></span>
          <span v-else-if="!extension.imported" class="badge badge-secondary"
            >Custom<info-icon :text="i8n.type.custom"></info-icon
          ></span>
        </div>
        <div>
          <input
            class="w-50 form-control"
            type="text"
            v-if="extension.dirty"
            v-model="extension.description"
            placeholder="Enter Extension Description"
          />
          <p class="card-text" v-if="!extension.dirty">
            {{ extension.description }}
          </p>
        </div>
      </div>
      <div>
        <reactive-button
          classes="btn"
          on-loading-text="Enabling..."
          :is-loading="isEnabling"
          :on-click="enable"
          :text="`${isEnabled ? 'Enabled' : 'Enable'}`"
          v-bind:class="{
            'btn-primary': isEnabled,
            'btn-outline-primary': !isEnabled,
            active: isEnabled
          }"
          v-if="!extension.dirty"
        ></reactive-button>
        <reactive-button
          classes="btn"
          on-loading-text="Disabling..."
          :is-loading="isDisabling"
          :on-click="disable"
          :text="`${!isEnabled ? 'Disabled' : 'Disable'}`"
          v-bind:class="{
            'btn-primary': !isEnabled,
            'btn-outline-primary': isEnabled,
            active: !isEnabled
          }"
          v-if="!extension.dirty"
        ></reactive-button>
        <reactive-button
          classes="btn btn-outline-success"
          v-if="extension.dirty"
          on-loading-text="Saving..."
          :is-loading="isSaving"
          :on-click="create"
          text="Save"
        ></reactive-button>
        <button
          v-if="extension.dirty"
          class="btn btn-outline-darker"
          v-on:click="cancel"
        >
          Cancel
        </button>
        <reactive-button
          classes="btn btn-outline-danger"
          v-if="!extension.dirty && (isAdmin || !extension.imported)"
          on-loading-text="Deleting..."
          :is-loading="isDeleting"
          :on-click="deleteExtension"
          text="Delete"
        ></reactive-button>
        <button
          v-if="isAdmin || !extension.imported"
          class="btn btn-outline-light"
          :data-target="`#extension-body-${extension.id}`"
          :aria-expanded="isExpanded"
          v-on:click="toggleExpanded"
        >
          {{ isExpanded ? 'Hide' : 'Edit' }}
        </button>
      </div>
    </div>

    <div
      :id="`extension-body-${extension.id}`"
      :class="`collapse multi-collapse ${isExpanded ? 'show' : ''}`"
    >
      <div
        class="col col-9 m-3 px-4 pl-4"
        v-for="predicate in extension.predicates"
        :key="`predicate-${predicate.id}`"
      >
        <predicate
          :is-admin="isAdmin"
          :i8n="i8n"
          :predicate="predicate"
          :site="site"
          v-on:predicate-change-content="predicateChangeContent"
        />
      </div>
      <div
        class="col col-9 m-3 pl-4 px-4"
        v-for="action in extension.actions"
        :key="`action-${action.id}`"
      >
        <action
          :is-admin="isAdmin"
          :i8n="i8n"
          :action="action"
          :site="site"
          v-on:action-change-content="actionChangeContent"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Action from './Action';
import Predicate from './Predicate';
import ReactiveButton from '../partials/Button';
import axios from 'axios';
import Button from '../../audit/partials/Button';
import swal from 'sweetalert';
import { extensionMixin } from '../mixins';

export default {
  data() {
    return {
      extension: this.initialExtension,
      isExpanded: false,
      isDeleting: false,
      isDisabling: false,
      isEnabling: false,
      isLoading: false,
      isSaving: false
    };
  },
  components: {
    Button,
    Action,
    Predicate,
    ReactiveButton
  },
  computed: {
    isEnabled: function() {
      // If admin view then check extension enabled
      if (this.isAdmin) {
        return this.extension.enabled;
      } else {
        // Non-admin, check pivot site enabled_at
        if (this.extension.pivot && this.extension.pivot.enabled_at) {
          return this.getUTCEnabledAtDate <= new Date();
        } else {
          return false;
        }
      }
    },
    getUTCEnabledAtDate: function() {
      return new Date(this.extension.pivot.enabled_at + ' UTC');
    }
  },
  methods: {
    async cancel() {
      this.$emit('delete', this.extension.id);
    },
    async create() {
      this.isSaving = true;
      const result = await axios
        .post(this.url(), {
          extension: this.extension,
          site_id: this.site ? this.site.id : null,
          type: 'extension'
        })
        .then(result => {
          if (
            result.status === 200 &&
            result.data.status === 200 &&
            result.data.data &&
            result.data.data.data.id
          ) {
            this.$emit('update', {
              id: this.extension.id,
              extension: result.data.data.data
            });
          }
        })
        .catch(error => console.log(error));
      this.isSaving = false;
    },
    async deleteExtension() {
      this.isDeleting = true;
      const choice = await swal({
        title: 'Confirm Delete',
        text: `Are you sure you wish to delete the "${this.extension.name}" extension?`,
        icon: 'error',
        buttons: ['No', 'Yes'],
        dangerMode: true
      });

      if (choice) {
        const result = await axios
          .post(this.url(), {
            extension: this.extension,
            site_id: this.site ? this.site.id : null,
            type: 'extension',
            action: 'delete'
          })
          .then(result => {
            if (result.status === 200 && result.data.status === 200) {
              this.$emit('delete', this.extension.id);
            }
          })
          .catch(error => console.log(error));
      }
      this.isDeleting = false;
    },
    async enable() {
      if (!this.isEnabled) {
        this.isEnabling = true;
        const result = await axios
          .post(this.url(), {
            extension: this.extension,
            site_id: this.site ? this.site.id : null,
            type: 'extension',
            action: 'enable'
          })
          .then(result => {
            if (
              result.status === 200 &&
              result.data.status === 200 &&
              result.data.data &&
              result.data.data.data &&
              result.data.data.data.extension &&
              result.data.data.data.extension.id
            ) {
              if (this.extension.pivot) {
                this.extension.pivot.enabled_at =
                  result.data.data.data.extension.pivot.enabled_at;
              } else {
                this.extension.enabled = result.data.data.data.extension.enabled;
              }
              this.$emit('update', {
                id: this.extension.id,
                extension: this.extension
              });
            }
          })
          .catch(error => console.log(error));
        this.isEnabling = false;
      }
    },
    async disable() {
      if (this.isEnabled) {
        this.isDisabling = true;
        const result = await axios
          .post(this.url(), {
            extension: this.extension,
            site_id: this.site ? this.site.id : null,
            type: 'extension',
            action: 'disable'
          })
          .then(result => {
            if (
              result.status === 200 &&
              result.data.status === 200 &&
              result.data.data &&
              result.data.data.data &&
              result.data.data.data.extension &&
              result.data.data.data.extension.id
            ) {
              if (this.extension.pivot) {
                this.extension.pivot.enabled_at =
                        result.data.data.data.extension.pivot.enabled_at;
              } else {
                this.extension.enabled = result.data.data.data.extension.enabled;
              }
              this.$emit('update', {
                id: this.extension.id,
                extension: this.extension
              });
            }
          })
          .catch(error => console.log(error));
        this.isDisabling = false;
      }
    },
    actionChangeContent(content) {
      this.extension.actions[0].fn = content;
    },
    predicateChangeContent(content) {
      this.extension.predicates[0].fn = content;
    },
    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
    }
  },
  beforeMount() {
    this.isExpanded = !!this.extension.dirty;
  },
  mounted() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  updated() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  mixins: [extensionMixin],
  props: {
    initialExtension: Object,
    i8n: Object,
    site: {
      type: Object,
      required: false
    }
  }
};
</script>
