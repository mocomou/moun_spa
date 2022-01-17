<template>
  <img :src="`${icon}`" alt="icon" class="icon">
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .icon {
    border-radius: 100vh;
    object-fit: cover;
  }
</style>
