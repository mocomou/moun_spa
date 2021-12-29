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
    <AtomsButton
      class="primary button"
      character="save"
      @click="$emit('save')"
    />
    <!-- <div @click="post" class="button">
      <AtomsButton
        class="primary"
        character="post"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    initialTitle: {
      type: String,
      required: false,
      default: ''
    },
    initialContent: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {
      editor: null,
      title: this.initialTitle
    }
  },
  mounted () {
    this.editor = this.$editor.EditorJS({
      holder: 'editorjs',
      placeholder: 'テキストを入力してください',
      data: this.initialContent
    })
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
