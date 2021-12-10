<template>
  <div class="cards">
    <ul v-for="post in posts" :key="post">
      <li class="card">{{post}}</li>
    </ul>
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
.cards {
  padding: 40px 0;
  gap: 50px 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul {
  padding: 0;
  margin: 0;
  border: solid 3px #B14400;
}
.card {
  list-style: none;
  width: 284px;
  height: 160px;
  }
</style>
