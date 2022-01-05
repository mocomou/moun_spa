<template>
  <div>
    <OrganismsPostEditor
      ref="postEditor"
      @save="save"
    />
    <div class="post-btn">
      <AtomsButton
        class="primary button"
        character="post"
        @click="save()"
      />
    </div>
  </div>
</template>

<script>
export default {
  fetch ({ store }) {
    store.commit('menu/resetMenu')
  },
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
