<template>
  <div>
    <div>
      <OrganismsUserProfile
        :icon="userIcon"
        :name="userName"
      />
    </div>
    <div>
      <OrganismsSetting
        :icon="userIcon"
        :name="userName"
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
