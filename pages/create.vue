<template>
  <div>
    <div id="editorjs" />
    <div @click="save" class="button">
      <AtomsButton
        class="primary"
        character="save"
      />
    </div>
    <div @click="post" class="button">
      <AtomsButton
        class="primary"
        character="post"
      />
    </div>
  </div>
</template>

<script>
const edjsHTML = require('editorjs-html')
const edjsParser = edjsHTML()
export default {
  data () {
    return {
      editor: null,
      post: ''
    }
  },
  mounted () {
    this.editor = this.$editor.EditorJS({
      holder: 'editorjs',
      placeholder: 'ここにテキストを入力してください'
    })
    this.send()
  },
  methods: {
    save () {
      this.editor.save().then((outputData) => {
        const htmlArray = edjsParser.parse(outputData)
        const html = htmlArray.join('')
        console.log('Article data: ', html)
      }).catch((error) => {
        console.log('Saving failed: ', error)
      })
    },
    send () {
      const url = '/api/v1/posts'
      this.$axios.post(url)
        .then((res) => {
          this.post = res.data.post
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  width: 120px;
  margin-left: auto;
  margin-right: 60px;
}
</style>
