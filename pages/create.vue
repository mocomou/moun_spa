<template>
  <OrganismsPostEditor
    ref="postEditor"
    @save="save"
  />
</template>

<script>
export default {
  methods: {
    save () {
      this.$refs.postEditor.editor.save().then((outputData) => {
        const url = '/api/v1/posts'
        const params = {
          title: this.$refs.postEditor.title,
          content: JSON.stringify(outputData)
        }
        this.$axios.post(url, params)
          .then((res) => {
            this.$router.push(`/posts/${res.data.post.id}`)
          })
      })
    }
  }
}
</script>
