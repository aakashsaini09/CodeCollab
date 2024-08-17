import { useState } from 'react';
import logo from '../assets/logo.png'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    const [uuid, setuuid] = useState('')
    const [username, setusername] = useState("")
    const createUuid = (e: any) => {
        e.preventDefault();
        const id = uuidv4();
        setuuid(id);
        toast.success("Created a new Room")
    }
    const JoinRoomFunction = () => {
       if (!uuid || !username) {
        toast.error("ROOM ID & Username is required")
       }else{
        navigate(`/editor/${uuid}`,{
            state: {
                username
            }
        })
       }
    }
    const handleButton = (e: any) =>{
        if(e.code === "Enter"){
            JoinRoomFunction()
        }
    }
  return (
    <div className="w-full h-[100vh] bg-[#231b2d] flex justify-center items-center">
      <div className="card max-w-[90%] h-[55vh] bg-gray-900 w-[70vw] md:w-[35vw]">

        <div className="logo flex item-center w-full pl-6 min-h-[25%] mt-3">
            <img src={logo} className='h-24 border-r px-5 border-purple-600' alt="" />
            <h2 className='font-extrabold text-4xl text-gray-200 my-auto ml-5'>CodeCollab</h2>
        </div>

        <div className="head font-bold text-white text-lg mt-8 ml-6">Paste Invitation Room ID</div>

        <div className="inp w-full flex flex-col justify-center gap-4">
            <input onKeyUp={handleButton} value={uuid} onChange={(e) =>setuuid(e.target.value)} type="text" className='px-4 placeholder-gray-700 rounded-md bg-slate-100 py-2 m-1 mx-auto w-[90%] outline-none' placeholder='Enter Room ID' />
            <input onKeyUp={handleButton} value={username} onChange={(e) =>setusername(e.target.value)} type="text" className='px-4 placeholder-gray-700 rounded-md bg-slate-100 py-2 m-1 mx-auto w-[90%] outline-none' placeholder='Enter USERNAME'/>
        </div>

        <div className="btn w-full items-end mt-2">
        <button onClick={JoinRoomFunction} type="button" className="relative left-[80%] focus:outline-none text-black bg-green-500 hover:bg-green-700 font-bold rounded-lg text-sm px-5 py-2.5 mb-2">Join</button>
        </div>
        <div className="end w-full text-white font-bold">
            <h2 className='ml-6'>If you don't have an invite then create <a onClick={createUuid} href="" className='text-purple-600 transition-all underline hover:text-purple-800'> new room</a></h2>
        </div>
      </div>
    </div>
  )
}

export default Home
