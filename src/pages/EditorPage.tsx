import { useState } from 'react'
import logo from '../assets/logo.png'
import Clients from '../components/Clients'
import Editor from '../components/Editor'
const EditorPage = () => {
    // @ts-ignore
    const [clients, setclients] = useState([
        {id: 1, username: "Aakash"},
        {id: 2, username: "Vinay"},
        {id: 3, username: "Ankit"},
        {id: 4, username: "Us"},
        {id: 5, username: "Caman"},
        {id: 6, username: "Daman"},
        {id: 7, username: "Yamato varma"}
    ])
  return (
    <div className="mainWrap h-[100vh] flex">
        <div className="aside bg-zinc-800 h-[100vh] w-[17vw] flex flex-col">
            <div className="asideInner flex-1">
                <div className="logo flex item-center border-b py-10 border-b-white">
                    <img src={logo} className='h-24' alt="" />
                    <h2 className='font-extrabold text-3xl text-gray-200 my-auto'>CodeCollab</h2>
                </div>
                <h3 className='w-full text-center text-white font-bold text-xl mt-3'>Connected</h3>
                <div className="clientList flex flex-wrap items-center gap-5 mx-auto">
                    {clients.map((user) => (
                        <Clients key={user.id} username={user.username}/>
                    ))}
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <button className='w-3/4 px-4 rounded-md font-bold text-center hover:bg-gray-200 py-2 bg-white my-3 text-black'>Copy Room ID</button>
                <button className='w-3/4 px-4 rounded-md font-bold text-center hover:bg-[#32bc67] py-2 bg-[#4aed88] my-3 text-black'>Leave</button>
            </div>
        </div>
        <div className="editorWrap bg-gray-900 w-full">
            <Editor/>
        </div>
    </div>
  )
}

export default EditorPage
