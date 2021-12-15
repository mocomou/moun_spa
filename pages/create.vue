<template>
  <div>
    <form action="" onSubmit="return false">
      <label for="title">タイトル</label>
      <input
        id="title"
        v-model="title"
        type="text"
      >
      <label for="content">記事の内容</label>
      <textarea
        id="content"
        v-model="content"
        name="content"
        cols="30"
        rows="10"
      />
      <input type="submit" value="作成" @click="submit">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submit () {
      const url = 'http://localhost:4000/api/v1/posts'
      const params = {
        title: this.title,
        content: this.content
      }
      this.$axios.post(url, params)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
