<template>
  <div class="features">
    <div class="row">
      <div class="col-md-5">
        <div class="title">
          <h3>Perform a Full Site Audit Now!</h3>
          <p>
            Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque
            volutpat
          </p>
        </div>
      </div>

      <div class="col-md-7">
        <div class="row my-2">
          <div class="col-sm-12">
            <label for="url">Domain or URL</label>
            <input
              id="url"
              name="url"
              type="text"
              v-model="url"
              class="form-control"
              placeholder="Enter a domain or URL..."
            />
          </div>
        </div>
        <audit-button :is-loading="isLoading" :on-click="createAudit"></audit-button>
      </div>
    </div>
    <error :error="error" :is-loading="isLoading"></error>
    <audit-results :audit="audit" :results="results"></audit-results>
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
  mixins: [auditMixin]
};
</script>
