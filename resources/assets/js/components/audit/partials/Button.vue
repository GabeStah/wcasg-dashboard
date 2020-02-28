<template>
  <button
    class="btn btn-block btn-primary"
    @click="onClick(type)"
    :disabled="isLoading"
  >
    <span
      v-if="isLoading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    <span class="sr-only">Loading...</span>
    <span v-if="isLoading">Loading...</span>
    <span v-else>Begin Audit</span>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
    onClick: Function,
    type: {
      type: String,
      default: 'url'
    }
  }
};
</script>
