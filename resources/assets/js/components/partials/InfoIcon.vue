<template>
  <i
    class="fa fa-question-circle align-self-center"
    :data-placement="placement"
    :data-original-title="text"
    data-toggle="tooltip"
    :style="style"
  ></i>
</template>

<script>
export default {
  data() {
    return {
      style: {
        padding: '0 2px'
      }
    };
  },
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    text: String,
  }
};
</script>
