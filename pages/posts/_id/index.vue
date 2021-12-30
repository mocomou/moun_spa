<template>
  <div>
    <NuxtChild
      :post="post"
    />
    <div v-if="!$route.path.match(/edit/)">
      {{ post.title }}
      <div v-dompurify-html="html" />
      <template v-if="currentUser === post.user_name">
        <div class="modify-btn">
          <NuxtLink :to="`${post.id}/edit`">
            <AtomsButton
              class="primary button"
              character="edit"
            />
          </NuxtLink>
          <AtomsButton
            class="primary button"
            character="delete"
            @click="destroy(post.id)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
const edjsHTML = require('editorjs-html')
const edjsParser = edjsHTML()

export default {
  async asyncData ({ $axios, route }) {
    const url = `/api/v1/posts/${route.params.id}`
    const post = await $axios.get(url)
      .then(res => res.data.post)
    const json = JSON.parse(post.content)
    const html = edjsParser.parse(json).join('')
    // console.log(post)
    return {
      post,
      html
    }
  },
  data: () => {
    return {
      post: '',
      html: ''
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
      return JSON.parse(jsonPayload).nickname
    }
  },
  methods: {
    destroy (id) {
      const url = `/api/v1/posts/${id}`
      this.$axios.delete(url)
        .then((res) => {
          confirm('この記事を削除しますか？')
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped lang="scss">
.modify-btn {
  display: flex;

}

.button {
  width: 120px;
  margin-left: auto;
  margin-right: 60px;
}
</style>
