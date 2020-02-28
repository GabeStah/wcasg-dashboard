<template>
    <div class="row my-3 justify-content-center" v-if="error && !isLoading">
        <div class="alert alert-danger" role="alert">
            {{ error }}
        </div>
    </div>
</template>

<script>
    export default {
      props: ['error', 'isLoading']
    }
</script>