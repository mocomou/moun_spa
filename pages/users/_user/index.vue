<template>
  <div>
    <div>
      <OrganismsUserProfile
        :userIcon="userIcon"
        :userName="userName"
      />
    </div>
    <div>
      <OrganismsSetting
        :userIcon="userIcon"
        :userName="userName"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, route }) {
    const url = `/api/v1/users/${route.params.user}`
    const user = await $axios.get(url)
      .then(res => res.data.user)
      // .then((res) => {
      //   const userIcon = res.data.user.user_icon
      //   const userName = res.data.user.user_name
      //   console.log(userIcon)
      //   console.log(userName)
      //   return {
      //     userIcon,
      //     userName
      //   }
      // })
    const userName = user.user_name
    const userIcon = user.user_icon
    return {
      userName,
      userIcon
    }
  },
  data: () => {
    return {
      userIcon: '',
      userName: ''
    }
  }
}
</script>

<style scoped lang="scss">
p {
  color: black;
}
</style>
