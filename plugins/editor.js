import EditorJS from '@editorjs/editorjs'
import ImageTool from '@editorjs/image'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Underline from '@editorjs/underline'
const LinkTool = require('@editorjs/link')
const Marker = require('@editorjs/marker')

export default ({ $axios }, inject) => {
  // 非同期通信が必要なeditorjsのpluginは $axios を使う必要がありますが、header/listプラグインは不要です。
  inject('editor', {
    EditorJS: ({ holder, placeholder, data }) => {
      return new EditorJS({
        holder,
        placeholder,
        data,
        minHeight: 0,
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 1,
            shortcut: 'CMD+SHIFT+H'
          },
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
          },
          underline: Underline,
          inkTool: {
            class: LinkTool,
            config: {
              endpoint: 'http://localhost:4000/posts' // Your backend endpoint for url data fetching
            }
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:4000/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:4000/posts' // Your endpoint that provides uploading by Url
              }
            }
          },
          Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M'
          }
        }
      })
    }
  })
}
