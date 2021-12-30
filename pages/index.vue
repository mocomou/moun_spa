<template>
  <div>
    <OrganismsCards
      :posts="posts"
    />
    <!-- ページネーション -->
    <v-app class="text-center">
      <v-pagination
        v-model="page"
        :length="total_pages"
        circle
        @input="contents"
      />
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      page: 1,
      total_pages: null
    }
  },
  mounted () {
    // await this.setPage()
    this.contents()
    console.log(this.$store.$auth.$storage._state['_token.auth0'])
  },
  methods: {
    contents () {
      const url = '/api/v1/posts'
      const params = this.page
      this.$axios.get(url, params)
        .then((res) => {
          console.log(res.data.posts[0])
          console.log(res.data.total_pages)
          console.log(this.page)
          this.posts = res.data.posts
          this.total_pages = res.data.total_pages
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getPage () {

    }
    // setPage () {
    //   this.page = Number(this.$$axios.data.page) || 1
    // }
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
