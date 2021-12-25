<template>
  <div>
    <div id="editorjs" />
    <div @click="save" class="button">
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
      editor: null
    }
  },
  mounted () {
    this.editor = this.$editor.EditorJS({
      holder: 'editorjs',
      placeholder: 'ここにテキストを入力してください'
    })
  },
  methods: {
    save () {
      this.editor.save().then((outputData) => {
        const htmlArray = edjsParser.parse(outputData)
        const html = htmlArray.join('')
        const url = '/api/v1/posts'
        this.$axios.post(url, html)
          .then((res) => {
            console.log('Article data: ', html)
            console.log(res)
          })
      }).catch((error) => {
        console.log('Saving failed: ', error)
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
