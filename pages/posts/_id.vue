<template>
  <div>
    {{ post.title }}
    <div v-html="html" />
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
  }
}
</script>

<style scoped lang="scss">
</style>
