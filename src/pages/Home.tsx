import logo from '../assets/logo.png'
const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-[#231b2d] flex justify-center items-center">
      <div className="card max-w-[90%] h-[55vh] bg-gray-900 w-[70vw] md:w-[35vw]">

        <div className="logo flex item-center w-full pl-6 min-h-[15%] mt-3">
            <img src={logo} className='w-24 border-r px-5 border-purple-600' alt="" />
            <h2 className='font-bold text-2xl text-gray-200 my-auto ml-5'>CodeCollab</h2>
        </div>

        <div className="head font-bold text-white text-lg mt-6 ml-6">Paste Invitation Room ID</div>

        <div className="inp w-full flex flex-col justify-center ">
            <input type="text" className='px-4 placeholder-gray-700 rounded-sm bg-slate-300 py-2 m-1 mx-auto w-[90%] outline-none' placeholder='Enter Room ID' />
            <input type="text" className='px-4 placeholder-gray-700 rounded-sm bg-slate-300 py-2 m-1 mx-auto w-[90%] outline-none' placeholder='Enter USERNAME'/>
        </div>

        <div className="btn w-full items-end mt-2">
        <button type="button" className="relative left-[80%] focus:outline-none text-black bg-green-500 hover:bg-green-700 font-bold rounded-lg text-sm px-5 py-2.5 mb-2">Join</button>
        </div>
        <div className="end w-full text-white font-bold">
            <h2>If you don't have an invite then create <a href="" className='text-purple-900 hover:underline hover:text-purple-600'> new room</a></h2>
        </div>
      </div>
    </div>
  )
}

export default Home
