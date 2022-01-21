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
        class="paginate"
        @input="contents"
      />
    </v-app>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    // const token = $auth.strategy.token.get()
    // console.log(token)
    const url = '/api/v1/users/search'
    const data = await $axios.get(url)
      .then(res => res.data.user)
    return data
  },
  data () {
    return {
      posts: [],
      page: 1,
      total_pages: null,
      data: this.data
    }
  },
  fetch ({ store }) {
    store.commit('menu/resetMenu')
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
          // console.log(this.$auth.strategy.token.get())
          this.posts = res.data.posts
          this.total_pages = res.data.meta.total_pages
          scrollTo(0, 0)
        })
    }
  }
}
</script>

<style scoped lang="scss">
// .cards {
//   padding: 40px 0;
//   gap: 50px 50px;
// }
::v-deep .v-application--wrap {
  min-height: 10vh;
}
</style>
