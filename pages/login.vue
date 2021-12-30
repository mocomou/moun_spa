<template>
  <div>
    <form @submit.prevent="userLogin">
      <!-- <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div> -->
      <div type="submit" class="button" @click="userLogin">
        <AtomsButton
          class="primary"
          character="ログイン"
        />
        <AtomsButton
          class="secondary"
          character="ログアウト"
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
