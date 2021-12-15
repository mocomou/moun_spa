<template>
  <OrganismsCards
    :posts="posts"
  />
</template>

<script>
export default {
  data: () => {
    return {
      posts: []
    }
  },

  mounted () {
    this.contents()
    console.log(this.$store.$auth.$storage._state['_token.auth0'])
  },

  methods: {
    contents () {
      const url = 'http://localhost:4000/api/v1/posts'
      this.$axios.get(url)
        .then((res) => {
          this.posts = res.data.posts
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  padding: 40px 0;
  gap: 50px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
