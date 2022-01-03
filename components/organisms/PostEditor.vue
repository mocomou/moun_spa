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
      character="update"
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
  width: 80px;
  padding: 6px 8px;
  margin-left: auto;
  margin-right: 16px;
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
  width: 90%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 1023px;
  margin: 8px 8px;
}

#editorjs::v-deep .ce-block__content,
#editorjs::v-deep .ce-toolbar__content {
  max-width: 1023px;
  width: 90%;
}

#editorjs::v-deep .ce-toolbar {
  max-width: 1023px;
  width: 90%;
  margin: auto;
}

@media all and (min-width: 1024px) {
  .button {
    width: 120px;
    margin-left: auto;
    margin-right: 60px;
  }
  .editor__title {
    font-size: 2rem;
    width: 90%;
    max-width: 924px;
    margin: 20px 0;
  }

  #editorjs::v-deep .ce-block__content,
  #editorjs::v-deep .ce-toolbar__content {
    max-width: 924px;
  }
}
</style>
