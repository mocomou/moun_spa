<template>
  <div class="editor">
    <div class="editor__wrap"><input type="text" name="title" class="editor__title" placeholder="タイトルを入力してください"></div>
    <div id="editorjs" />
    <div @click="save" name="content" class="button">
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
<<<<<<< HEAD
      placeholder: 'ここにテキストを入力してください'
=======
      placeholder: 'テキストを入力してください'
>>>>>>> main
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
