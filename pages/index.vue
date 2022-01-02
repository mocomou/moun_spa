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
        color="#68699b"
        @input="contents"
        class="paginate"
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
  },
  methods: {
    contents () {
      const url = '/api/v1/posts'
      const params = {
        params: {
          page: this.page
        }
      }
      this.$axios.get(url, params)
        .then((res) => {
          this.posts = res.data.posts
          this.total_pages = res.data.total_pages
        })
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  padding: 40px 0;
  gap: 50px 50px;
}

::v-deep .v-application--wrap {
  min-height: 10vh;
}
</style>
