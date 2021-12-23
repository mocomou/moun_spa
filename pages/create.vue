<template>
  <div>
    <div id="editorjs" />
    <button @click="save">
      保存
    </button>
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
      placeholder: '編集！'
    })
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
