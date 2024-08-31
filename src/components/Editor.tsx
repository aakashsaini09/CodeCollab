import { useEffect } from "react"
import CodeMirror from "codemirror"
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import '../App.css'
import 'codemirror/theme/monokai.css';
const Editor = () => {
    useEffect(() => {
        async function init() {
        CodeMirror.fromTextArea(document.getElementById("editor") as HTMLTextAreaElement, {
            mode: {name: 'javascript', json: true},
            theme: 'monokai',
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
        });
      }
      init()
    }, [])
    
  return (
    <div className="h-full"> 
      <textarea id="editor" className="text-xl min-h-[100vh] w-full bg-gray-900 outline-none p-3 text-white"></textarea>
    </div>
  )
}

export default Editor
