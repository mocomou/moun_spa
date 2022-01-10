<template>
  <div>
    <OrganismsSetting
      :user_name="user_name"
    />
  </div>
</template>

<script>
export default ({
  async asyncData ({ $axios, route }) {
    const url = `/api/v1/users/${route.params.user}`
    const user = await $axios.get(url)
      .then((res) => {
        console.log(res.data)
        console.log(user)
      })
    return {
      user_name: route.params.user
    }
  },
  data: () => {
    return {
      user_name: ''
    }
  }
})
</script>

<style scoped lang="scss">
</style>
