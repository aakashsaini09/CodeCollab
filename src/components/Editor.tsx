import { useEffect, useRef } from "react"
import CodeMirror from "codemirror"
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import '../App.css'
import 'codemirror/theme/monokai.css';
const Editor = ({socketRef, roomId}:any) => {
  const editorRef = useRef<CodeMirror.EditorFromTextArea | null>(null)
    useEffect(() => {
        async function init() {
          // @ts-ignore
          editorRef.current = CodeMirror.fromTextArea(document.getElementById("editor") as HTMLTextAreaElement, {
            mode: {name: 'javascript', json: true},
            theme: 'monokai',
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
        });
       
        // @ts-ignore
        editorRef.current.on('change', (instance, changes) => {
          const { origin } = changes;
          const code = instance.getValue();
          if(origin !== 'setValue'){
            socketRef.current?.emit('code-change', {
              roomId, code
            })
          }
        })
      
        // editorRef.current.setValue(`// Welcome to CodeShare\n// Share code with your friends\n// Start coding now!\nconst mainFunction = () => {\n  console.log('Hello World!'); \n}\n mainFunction();`)
      }
      init()
      return()=>{
        socketRef.current?.off('code-change')
      }
    }, [])
    useEffect(() => {
      if(socketRef.current){
        socketRef.current.on('code-change', ({code}: any) => {
          if(code !== null) {
            editorRef.current?.setValue(code)
          }
        })
      }
    }, [socketRef.current])
    
    
  return (
    <div className="h-full"> 
      <textarea id="editor" className="text-xl min-h-[100vh] w-full bg-gray-900 outline-none p-3 text-white"></textarea>
    </div>
  )
}

export default Editor
