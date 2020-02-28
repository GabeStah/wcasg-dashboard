<template>
  <div class="row my-3" v-if="results">
    <div class="col-md-6 d-flex p-2" v-for="result in results">
      <div class="box card-outline-primary">
        <h3>{{ result.code.split('.').join(' ') }}</h3>
        <p>{{ result.message }}</p>
        <span v-if="result.type === 'notice'" class="badge badge-info">{{
          result.type
        }}</span>
        <span v-if="result.type === 'warning'" class="badge badge-warning">{{
          result.type
        }}</span>
        <span v-if="result.type === 'error'" class="badge badge-danger">{{
          result.type
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['results']
};
</script>
