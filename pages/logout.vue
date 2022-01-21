<template>
  <p class="logout">
    Logging out...
  </p>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('user/logout')
    this.$auth.logout()
  }
}
</script>

<style scoped lang="scss">
  .logout {
    font-size: 1.5rem;
    text-align: center;
    color: gray;
    padding-top: 100px;
  }
</style>
