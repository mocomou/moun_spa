<template>
  <div>
    <div id="editorjs"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: null,
      contentData: {},  // 前回保存した内容などがあれば、async dataやfetchなどで取得しておき、ここに格納しておきます。
    }
  },
  mounted() {
    this.editor = this.$editor.EditorJS({
      holder: 'editorjs',
      placeholder: '編集してください！',
      data: this.contentData,
    })
  }
}
</script>

<style scoped lang="scss">

</style>
