<template>
  <div>
    <div id="editorjs" />
    <div @click="save" class="button">
      <AtomsButton />
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
.button {
  width: 120px;
  margin-left: auto;
  margin-right: 60px;
}
</style>
