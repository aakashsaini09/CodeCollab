import React, {useContext, useState} from 'react'
import image from '../assets/image2.webp'
import SummaryApi from '../common'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import Context from '../context'
const Login = () => {
  const location = useNavigate()
  const {fetchUserDetails} = useContext(Context)
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const handleOnChange = (e) => {
    const { name, value} = e.target
    setData((prev) =>{
      return{
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()

      const dataResponse = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const dataApi = await dataResponse.json()
      if(dataApi.success){
        toast.success(dataApi.message)
        location('/')  
        fetchUserDetails()
      }
      if(dataApi.error){
        toast.error(dataApi.message)
      }
  }
  return (
    <section>
      <div className="container mx-auto p-4">
        <h1 className='w-full font-bold text-6xl text-center py-5'>Login Page</h1>
        <div className="p-2 w-full max-w-md bg-white mx-auto"> 
        {/* profile pic */}
        <div className='w-full flex items-center my-10 '>
          <img className='h-20 flex mx-auto cursor-pointer' src={image} alt="" />
        </div>
        {/* <form className='pb-8 pt-1 cursor-pointer'>
          <label>

          <div className='w-full items-center text-center'>Upload Image</div>
          <input type="file" className='hidden'/>
          </label>
        </form> */}
          <form action="" className='flex gap-5 flex-col' onSubmit={handleSubmit}>
            <input autoComplete='true' className='border-2 border-black p-2' name='email' value={data.email} onChange={handleOnChange} type="text" placeholder='enter email here' />
            <input className='border-2 border-black p-2' name='password' value={data.password} onChange={handleOnChange} type="password" placeholder='Enter your password' />
            <Link className='text-red-700 flex justify-end' to={'/forgot-password'}>Forget password?</Link>
            <button className='bg-purple-600 text-white p-2' type='submit'>Submit</button>
            <p>Don't have account ? <Link to={'/signup'} className='text-red-600 hover:underline'>Sign up</Link></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
