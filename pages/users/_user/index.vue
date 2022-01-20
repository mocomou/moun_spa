<template>
  <div>
    <div
      v-if="!showEditComponent"
      class="userProfile"
    >
      <div>
        <OrganismsUserProfile
          :icon="userIcon"
          :name="userName"
          :component="showEditComponent"
        />
      </div>
      <div
        v-if="currentUser === userSub"
        class="userProfile__setting-btn"
      >
        <AtomsButton
          class="primary button"
          character="編集"
          @click="showSetting(), $store.commit('setting/closeComponent')"
        />
      </div>
    </div>
    <!-- showEditComponentがtrueになったら表示される
    編集ボタンを押すとshowEditComponentがtrueになる -->
    <OrganismsSetting
      v-else
      :icon="userIcon"
      :name="userName"
      @close="cancel()"
    />
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
    const userSub = user.sub
    return {
      userName,
      userIcon,
      userSub
    }
  },
  data () {
    return {
      userName: this.userName,
      userPosts: [],
      page: 1,
      total_pages: null,
      showEditComponent: false
    }
  },
  computed: {
    loggedIn () {
      return !!this.$auth.strategy.token.get()
    },
    currentUser () {
      const token = this.$auth.strategy.token.get()
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
      return JSON.parse(jsonPayload).sub
    }
  },
  mounted () {
    // await this.setPage()
    this.contents()
  },
  methods: {
    contents () {
      const url = `/api/v1/users/${this.userName}`
      const params = {
        params: {
          page: this.page
        }
      }
      this.$axios.get(url, params)
        .then((res) => {
          this.userPosts = res.data.user.posts
          this.total_pages = res.data.meta.total_pages
          scrollTo(0, 0)
        })
    },
    showSetting () {
      this.showEditComponent = true
    },
    cancel () {
      this.showEditComponent = false
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

.userProfile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 20px 0px 10px;
}

.userProfile.close {
  display: none;
}

.userProfile__setting__btn {
  @include div-pc-btn();
}

.button {
  @include pc-btn();
}
</style>
