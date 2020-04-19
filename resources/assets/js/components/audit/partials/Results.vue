<template>
  <div v-if="results" class="row row-cols-2 d-flex justify-content-center py-3">
    <div v-if="audit" class="col-md-12 py-2">
      <a v-if="showPublicUrl === true" :href="getAuditUrl" target="_blank">
        <button type="button" class="btn btn-secondary">
          Public Results URL <i class="fas fa-external-link-alt"></i>
        </button>
      </a>
      <p>
        Results are based on the
        <a :href="this.audit.standard.url" target="_blank"
          >{{ this.audit.standard.name }} Standard</a
        >.
      </p>
    </div>
    <div class="col-md-6" v-for="result in results">
      <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div class="card-body flex-column align-items-start">
          <h3 class="mb-0 text-dark">
            {{ result.code.split('.').join(' ') }}
          </h3>
          <div class="mb-1 text-muted">
            <strong class="d-inline-block mb-2 text-primary">
              <span v-bind:class="getBadgeClass(result)">{{
                result.type
              }}</span>
            </strong>
          </div>
          <p class="card-text mb-auto">
            {{ result.message }}
          </p>
          <a href="#">{{ result.selector }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getAuditUrl() {
      return this.audit ? `/audit/${this.audit.id}` : '#';
    }
  },
  methods: {
    getBadgeClass: result => {
      return {
        badge: true,
        'badge-info': result.type === 'notice',
        'badge-warning': result.type === 'warning',
        'badge-danger': result.type === 'error'
      };
    },
    getCardClass: result => {
      return {
        // box: true,
        card: true,
        'col-md-6': true,
        'box-shadow': true,
        'border-info': result.type === 'notice',
        'border-warning': result.type === 'warning',
        'border-danger': result.type === 'error'
      };
    }
  },
  props: {
    audit: Object,
    results: Array,
    showPublicUrl: { type: Boolean, default: true }
  }
};
</script>
