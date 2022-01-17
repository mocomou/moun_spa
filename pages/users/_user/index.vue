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
    <OrganismsCards
      :posts="userPosts"
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
  data () {
    return {
      userPosts: [],
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
      const url = '/api/v1/users/moco'
      const params = {
        params: {
          page: this.page
        }
      }
      this.$axios.get(url, params)
        .then((res) => {
          this.userPosts = res.data.meta.user_posts
          this.total_pages = res.data.meta.total_pages
          scrollTo(0, 0)
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
