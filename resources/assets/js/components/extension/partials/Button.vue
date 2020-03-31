<template>
  <button
    class="btn btn-block btn-primary"
    @click="onClick"
    :disabled="isLoading"
  >
    <span
      v-if="isLoading"
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    <span class="sr-only">{{ onLoadingText }}</span>
    <span v-if="isLoading">{{ onLoadingText }}</span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
    onClick: Function,
    onLoadingText: String,
    text: String,
  }
};
</script>
