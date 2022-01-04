<template>
  <div>
    <form @submit.prevent="userLogin">
      <div type="submit" class="button" @click="userLogin">
        <AtomsButton
          class="primary"
          character="ログイン"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    // this.$auth.loginWith('auth0')
  },
  methods: {
    async userLogin () {
      await this.$auth.login()
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  width: 200px;
  margin-left: auto;
  margin-right: 60px;
}
</style>
