<template>
  <div class="features">
    <div class="row">
      <div class="col-md-6">
        <div class="row my-2">
          <div class="col-sm-12" v-if="sites">
            <label for="site">Select a Site</label>
            <select id="site" v-model="selectedSiteId" class="form-control form-control-lg">
              <option disabled="disabled" selected value=""
                >Please select a site</option
              >
              <option v-for="site in sites" :value="site.id">{{
                site.domain
              }}</option>
            </select>
          </div>
        </div>
        <audit-button
          :is-loading="isLoading"
          :on-click="createAudit"
          :type="'site'"
        ></audit-button>
      </div>

      <div class="col-md-6">
        <div class="row my-2">
          <div class="col-sm-12">
            <label for="url">Domain or URL</label>
            <input
              id="url"
              name="url"
              type="text"
              v-model="url"
              class="form-control form-control-lg"
              placeholder="Enter a domain or URL..."
            />
          </div>
        </div>
        <audit-button
          :is-loading="isLoading"
          :on-click="createAudit"
        ></audit-button>
      </div>
    </div>
    <error :error="error" :is-loading="isLoading"></error>
    <audit-results :results="results"></audit-results>
  </div>
</template>

<script>
import AuditButton from '../partials/Button';
import AuditResults from '../partials/Results';
import Error from '../../partials/Error';
import { auditMixin } from '../mixins';

export default {
  components: {
    AuditButton,
    AuditResults,
    Error
  },
  data() {
    return {
      selectedSite: null,
      selectedSiteId: ''
    };
  },
  mixins: [auditMixin],
  props: ['sites']
};
</script>
