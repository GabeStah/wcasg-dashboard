<template>
    <div class="features">
        <div class="row">
            <div class="col-md-5">
                <div class="title">
                    <h3>Perform a Full Site Audit Now!</h3>
                    <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
                </div>
            </div>

            <div class="col-md-7">
                <div class="row my-2">
                    <div class="col-sm-12">
                        <label for="url">Domain or URL</label>
                        <input id="url" name="url" type="text" v-model="url" class="form-control" placeholder="Enter a domain or URL...">
                    </div>
                </div>
                <button class="btn btn-block btn-primary" @click="createAudit" :disabled="isLoading">
                    <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span class="sr-only">Loading...</span>
                    <span v-if="isLoading">Loading...</span>
                    <span v-else>Begin Audit</span>
                </button>
            </div>
        </div>
        <div class="row my-3" v-if="results">
            <div class="col-md-6 d-flex p-2" v-for="result in results">
                <div class="box card-outline-primary">
                    <h3>{{ result.code.split('.').join(' ') }}</h3>
                    <p>{{ result.message }}</p>
                    <span v-if="result.type === 'notice'" class="badge badge-info">{{ result.type }}</span>
                    <span v-if="result.type === 'warning'" class="badge badge-warning">{{ result.type }}</span>
                    <span v-if="result.type === 'error'" class="badge badge-danger">{{ result.type }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        isLoading: false,
        results: null,
        url: ''
      }
    },
    methods: {
      createAudit() {
        this.isLoading = true;

        axios.post(`/api/audit/create`, { url: this.url }).then(response => console.log(response));

        this.results = null;
        this.url = '';
      },
    },
    mounted() {
      const channel = Echo.channel('audit');
      channel.listen('.AuditCompleted', async ({ audit }) => {
        const response = await axios.get(`/api/audit/${audit.task_id}/results`, { url: this.url });
        console.log(response.data);
        this.results = response.data.results;
        this.isLoading = false;
      });
    }
  }
</script>