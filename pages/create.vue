<template>
  <div class="editor">
    <div class="editor__wrap">
      <input
        v-model="title"
        type="text"
        class="editor__title"
        placeholder="タイトルを入力してください"
      >
    </div>
    <div
      id="editorjs"
    />
    <btn
      class="primary button"
      character="save"
      @click="save"
    >
      <AtomsButton />
    </btn>
    <!-- <div @click="post" class="button">
      <AtomsButton
        class="primary"
        character="post"
      />
    </div> -->
  </div>
</template>

<script>
import Btn from '../components/atoms/button'
const edjsHTML = require('editorjs-html')
const edjsParser = edjsHTML()
export default {
  name: 'Click',
  components: {
    Btn
  },
  data () {
    return {
      editor: null,
      title: ''
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
        const url = '/api/v1/posts'
        const params = {
          title: this.title,
          content: JSON.stringify(outputData)
        }
        this.$axios.post(url, params)
          .then((res) => {
            // const json = JSON.parse(res.data.post.content)
            // const html = this.parseEditorjsData(json)
          })
      })
    },
    parseEditorJsData (editorjsData) {
      return edjsParser.parse(editorjsData).join('')
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
  padding: 0;
  width: 80%;
  border: none;
  outline: none;
  font-size: 2rem;
  font-weight: bold;
  max-width: 650px;
  margin: 20px auto;
}

#editorjs::v-deep .ce-block__content,
#editorjs::v-deep .ce-toolbar__content {
  max-width: 800px;
}
</style>
