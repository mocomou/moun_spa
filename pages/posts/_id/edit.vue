<template>
  <div>
    <OrganismsPostEditor
      ref="postEditor"
      :initial-title="post.title"
      :initial-content="json"
      @save="update()"
    />
    <div class="post-btn">
      <AtomsButton
        class="primary button"
        character="update"
        @click="update()"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, route }) {
    const url = `/api/v1/posts/${route.params.id}`
    const post = await $axios.get(url)
      .then(res => res.data.post)
    const json = JSON.parse(post.content)
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
@media all and (max-width: 1023px) {
  .post-btn {
    @include div-phone-btn();
  }
  .button {
    @include phone-btn();
  }
}

@media all and (min-width: 1024px) {
  .post-btn {
    @include div-pc-btn();
  }

  .button {
    @include pc-btn();
  }
}
</style>
