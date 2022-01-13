<template>
  <div class="userProfile">
    <img :src="`${icon}`" alt="user_icon" class="userProfile__icon">
    <h2
      class="userProfile__name"
    >
      {{ name }}
    </h2>
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
.userProfile {
  display: flex;
  align-items: center;
  margin: 24px 20px;
}
.userProfile__icon {
  height: 100px;
  width: 100px;
}
.userProfile__name {
  padding-left: 20px;
}
</style>
