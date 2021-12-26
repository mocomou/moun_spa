<template>
  <div class="editor">
    <div class="editor__wrap"><input type="text" v-model="title" class="editor__title" placeholder="タイトルを入力してください"></div>
    <div id="editorjs" name="content" />
      <div @click="save" class="button">
        <AtomsButton
          class="primary"
          character="save"
        />
      </div>
      <!-- <div @click="post" class="button">
        <AtomsButton
          class="primary"
          character="post"
        />
      </div> -->
  </div>
</template>

<script>
const edjsHTML = require('editorjs-html')
const edjsParser = edjsHTML()
export default {
  data () {
    return {
      editor: null,
      title: '',
      content: ''
    }
  },
  mounted () {
    this.editor = this.$editor.EditorJS({
      holder: 'editorjs',
      placeholder: 'テキストを入力してください'
    })
  },
  methods: {
    save () {
      this.editor.save().then((outputData) => {
        const htmlArray = edjsParser.parse(outputData)
        const content = htmlArray.join('')
        const title = this.title
        const url = '/api/v1/posts'
        this.$axios.post(url, content, title)
          .then((res) => {
            console.log(content)
            console.log(this.title)
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

.editor__button {
  display: flex;
}

.editor__wrap {
  display: flex;
  justify-content: center;
  width: 100%;
}

.editor__title {
  margin: 28px 0;
  padding: 0;
  width: 80%;
  border: none;
  outline: none;
  font-size: 2rem;
  font-weight: bold;
}
</style>
