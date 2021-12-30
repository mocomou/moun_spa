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
        @input="getPage"
      />
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      posts: [],
      page: 1,
      totalPages: null
    }
  },
  async mounted () {
    await this.setPage()
    this.contents()
    this.getPage()
    console.log(this.$store.$auth.$storage._state['_token.auth0'])
  },
  methods: {
    contents () {
      const url = '/api/v1/posts'
      this.$axios.get(url)
        .then((res) => {
          console.log(res.data.posts)
          console.log(res.data.total_pages)
          this.posts = res.data.posts
          this.total_pages = res.data.total_pages
        })
        .catch((error) => {
          console.log(error)
        })
    },
    setPage () {
      this.page = Number(this.$$axios.data.page) || 1
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
