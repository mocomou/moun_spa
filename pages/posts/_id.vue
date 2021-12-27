<template>
  <div>
    {{ post.title }}
    <div v-html="html" />
  </div>
</template>

<script>
import DOMPurify from 'dompurify'
const edjsHTML = require('editorjs-html')
const edjsParser = edjsHTML()

export default {
  async asyncData ({ $axios, route }) {
    const url = `/api/v1/posts/${route.params.id}`
    const post = await $axios.get(url)
      .then(res => res.data.post)
    const json = JSON.parse(post)
    const html = edjsParser.parse(json).join('')
    // const createDOMPurify = require('dompurify')
    // const jsdom = require('jsdom').jsdom
    // const window = jsdom('').defaultView
    // const DOMPurify = createDOMPurify(window)
    const clean = DOMPurify.sanitize(html)
    return {
      post,
      clean
    }
  }
}
</script>

<style scoped lang="scss">
</style>
