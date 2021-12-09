<template>
  <div>
    <h1>記事一覧</h1>
    <p>{{ posts }}</p>
  </div>
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
.foo {
  color: black;
}
</style>
