import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'

export default ({ $axios }, inject) => {
  // 非同期通信が必要なeditorjsのpluginは $axios を使う必要がありますが、header/listプラグインは不要です。
  inject('editor', {
    EditorJS: ({ holder, placeholder, data }) => {
      return new EditorJS({
        holder,
        placeholder,
        data,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+H',
          },
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
          },
        },
      })
    },
  })
}