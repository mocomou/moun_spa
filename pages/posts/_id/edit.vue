<template>
  <OrganismsPostEditor
    ref="postEditor"
    :initial-title="post.title"
    :initial-content="json"
    @save="update"
  />
</template>

<script>
export default {
  async asyncData ({ $axios, route }) {
    const url = `/api/v1/posts/${route.params.id}`
    const post = await $axios.get(url)
      .then(res => res.data.post)
    const json = JSON.parse(post.content)
    // console.log(post)
    return {
      post,
      json
    }
  },
  mounted () {
    this.editor = this.$editor.EditorJS({
      holder: 'editorjs',
      placeholder: this.content
    })
  },
  methods: {
    update () {
      const id = this.$route.params.id
      this.$refs.postEditor.editor.save().then((outputData) => {
        const url = `/api/v1/posts/${id}`
        const params = {
          title: this.$refs.postEditor.title,
          content: JSON.stringify(outputData)
        }
        this.$axios.patch(url, params)
          .then((res) => {
            this.$router.push(`/posts/${res.data.post.id}`)
          })
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
