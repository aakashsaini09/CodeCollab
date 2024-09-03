import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import Clients from '../components/Clients'
import Editor from '../components/Editor'
import toast from 'react-hot-toast'
import { connectSocket } from '../socketIO'
// @ts-ignore
import Action  from '../../Action'
import { useLocation, useNavigate, Navigate, useParams} from 'react-router-dom'
import ACTION from '../../Action'
import { Socket } from 'socket.io-client' 
const EditorPage = () => {
    const location = useLocation()
    const ReactNavigate = useNavigate()
    const [clients, setclients] = useState<{ id: string; username: string }[]>([])
    const {id} = useParams();
    const roomId = id;
    const socketRef = useRef<Socket | null>(null);
    useEffect(() => {
      const init = async() =>{
        socketRef.current = await connectSocket();
        // @ts-ignore
        socketRef.current.on('connect_error', (err: any) => handleError(err))
        // @ts-ignore
        socketRef.current.on('connect_failed', (err: any) => handleError(err))



        function handleError (err: any){
            console.log("Socket Error: ", err)
            toast.error("Socket Connection failed, try again!");
            ReactNavigate('/')
        }


        // @ts-ignore
        socketRef.current.emit(ACTION.JOIN, {
            roomId, 
            username: location.state?.username
        });
        // @ts-ignore
        socketRef.current.on('joined', ({socketId, username, clients}) => {
            if(username !== location.state?.username){
                toast.success(`${username} joined the room.`)
            }
            // console.log(socketId, clients)
            setclients(clients)
        })
        // listening for disconnected user
        socketRef.current.on('disconnected', ({username, socketId}) => {
            toast.success(`${username} left the room.`)
            setclients((prev) => {
                // **************************************client.id ^^client.socketId****************************
                return prev.filter((client) => client.id !== socketId)
            })

        })
      }
      init()
      return () => {
        socketRef.current?.disconnect();
        // @ts-ignore
        socketRef.current.off('joined')
        // @ts-ignore
        socketRef.current.off('disconnected'    )

      }
    }, [])
    async function copyFunction() {
        console.log("roomId is:", roomId)
        try {
            await navigator.clipboard.writeText(roomId || "Not found")
            toast.success("Room ID copied to clipboard")
        } catch (err) {
            console.log("error while copying to clipboard", err)
            toast.error("Error while copying to clipboard")
        }
    }
    function leaveRoom(){
        ReactNavigate('/')
    }
    if(!location.state){
        return <Navigate to="/"/>
    }
    
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
                <button className='w-3/4 px-4 rounded-md font-bold text-center hover:bg-gray-200 py-2 bg-white my-3 text-black' onClick={copyFunction}>Copy Room ID</button>
                <button className='w-3/4 px-4 rounded-md font-bold text-center hover:bg-[#32bc67] py-2 bg-[#4aed88] my-3 text-black' onClick={leaveRoom}>Leave</button>
            </div>
        </div>
        <div className="editorWrap bg-gray-900 w-full min-h-[100vh]">
            <Editor socketRef={socketRef} roomId={roomId}/>
        </div>
    </div>
  )
}

export default EditorPage
