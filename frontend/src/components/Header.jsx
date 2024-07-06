import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role'
const Header = () => {
  const dispatch = useDispatch()
  const [popUpDisplay, setPopUpDisplay] = useState(false)
  const user = useSelector(state => state.user?.user)
  const handleLogOut = async() =>{
    const fetchData = await fetch(SummaryApi.userLogOut.url, {
      method: SummaryApi.userLogOut.method,
      credentials: 'include'
    })
    const data = await fetchData.json()
    if(data.success){
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if(data.error){
      toast.error(data.message);
    }}
  return (
    <>
      <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900 md:px-20" >
       <div className="flex items-center justify-between mx-auto p-4">
        <Link className="flex items-center">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aakash</span>
    </Link>

        {/* Search bar */}
      <div className="relative hidden md:block w-[27vw]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product here"/>
      </div>

    {/* three buttons */}
    <div className="items-center justify-between w-auto flex md:w-auto md:order-1 md:mr-4 mr-0 sm:relative" id="navbar-search">
     <div className="flex gap-10 md:gap-16 w-full ">
      {
        user?._id && (
        <div className="text-4xl cursor-pointer" onClick={() => setPopUpDisplay((prev) => !prev)}>
          {
            user?.profilePic ? (<img src={user?.profilePic} className='h-10 w-10 flex mx-auto cursor-pointer rounded-full' alt={user?.name}></img>) : (<FaUserCircle/>)
          }  
        </div>
        )
      }
        <div className="user text-3xl cursor-pointer relative" >
            <span ><FaShoppingCart/></span>
            <div className="bg-purple-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3 ">
                <p className='text-sm'>0</p>
            </div> 
        </div>
        { popUpDisplay && (
          <div className='absolute top-5 bottom-0 h-fit -left-5 shadow-lg rounded-sm bg-blue-700 text-white'>
            {/* <div className='whitespace-nowrap p-2' onClick={() => setPopUpDisplay((prev) => !prev)}>User</div> */}
            {
              user?.role === ROLE.ADMIN && (
                <Link to={'/adminpage/all-products'} className='whitespace-nowrap p-2 hidden md:block' onClick={() => setPopUpDisplay((prev) => !prev)}>Admin</Link>
              )
            }
          </div>
        )}
        <div className="user text-3xl cursor-pointer">
           { user?._id ? ( <button onClick={handleLogOut} className="bg-purple-700 hover:bg-purple-600 px-3 py-1 text-white text-sm md:text-xl rounded-md flex justify-center items-center align-middle">Logout</button>)
            : 
            (<Link to={'login'} className="bg-purple-700 hover:bg-purple-600 px-3 py-1 text-white text-sm md:text-xl rounded-md flex justify-center items-center align-middle">Login</Link>)} 
        </div>
     </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
