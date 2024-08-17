// import { useEffect } from "react"
// import CodeMirror from "codemirror"
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/theme/dracula.css';

const Editor = () => {
    // useEffect(() => {
    //     async function init() {
         
    //     CodeMirror.fromTextArea(document.getElementById("editor") as HTMLTextAreaElement, {
    //         mode: {name: 'javascript', json: true},
    //         theme: 'dracula'
    //     });
    //   }
    //   init()
    // }, [])
    
  return (
    <div className="h-full"> 
      <textarea id="editor" className="w-full bg-gray-900 outline-none p-3 text-white"></textarea>
    </div>
  )
}

export default Editor
