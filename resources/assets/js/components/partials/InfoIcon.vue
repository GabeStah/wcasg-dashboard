<template>
  <i
    class="fa fa-question-circle"
    data-placement="top"
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
  props: ['text']
};
</script>
