<template>
  <div>
    <img :src="`${icon}`" alt="user_icon">
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true,
      default: ''
    },
    name: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
img {
  height: 100px;
  width: 100px;
}
h2 {
  color: black;
}
</style>
