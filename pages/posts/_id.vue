<template>
  <div>
    {{ post.title }}
    <div v-dompurify-html="html" />
    <template v-if="!!loggedIn">
      <div class="modify-btn">
        <AtomsButton
          class="primary button"
          character="update"
          @click="update"
        />
        <AtomsButton
          class="primary button"
          character="delete"
          @click="destroy(post.id)"
        />
      </div>
    </template>
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
    return {
      post,
      html
    }
  },
  computed: {
    loggedIn () {
      return !!this.$auth.strategy.token.get()
    }
  },
  methods: {
    // update () {
    //   const url = '/api/v1/posts'
    // },
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
