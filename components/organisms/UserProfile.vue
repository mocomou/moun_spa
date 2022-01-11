<template>
  <div>
    <img :src="`${userIcon}`" alt="user_icon">
    <h2>{{ userName }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    userIcon: {
      type: File,
      require: true,
      default: ''
    },
    userName: {
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
