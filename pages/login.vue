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
      <div>
        <button @click="userLogin" type="submit">Submit</button>
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
      try {
        const response = await this.$auth.login()
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
