import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import image from '../assets/image2.webp'
import imageTobase64 from '../helpers/ImageTobase64'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
const Signup = () => {
  const location = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
        profilePic: ''
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
        if(data.password === data.confirmPassword){
          const dataResponse = await fetch(SummaryApi.signUp.url, {
            method: SummaryApi.signUp.method,
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(data)
          })
          const dataApi = await dataResponse.json()
          if(dataApi.success){
            toast.success(dataApi.message)
            location('/login')
          }
          if(dataApi.error){
            toast.error(dataApi.message)
          }
          // console.log(dataApi)
        }else{
          toast.error("Check password and confirm password")
        }
      }
      const handlePic = async(e) => {
        const file = e.target.files[0]
        const imagePic = await imageTobase64(file)
        setData((prev) =>{
            return{
                ...prev,
                profilePic: imagePic
            }
        })
      }
  return (
    // signup page
    <section>
      <div className="container mx-auto p-4">
        <h1 className='w-full font-bold text-6xl text-center py-5'>Sign Up</h1>
        <div className="p-2 w-full max-w-md bg-white mx-auto"> 
        {/* profile pic */}
        <div className='w-full flex items-center'>
          <img className='h-20 w-20 flex mx-auto cursor-pointer rounded-full' src={data.profilePic || image} alt="" />
        </div>
        <form className='pb-8 pt-1 cursor-pointer'>
          <label>
          <div className='w-full items-center text-center'>Upload Image</div>
          <input type="file" onChange={handlePic} className='hidden'/>
          </label>
        </form>
          <form action="" className='flex gap-5 flex-col' onSubmit={handleSubmit}>
        <input required className='border-2 border-black p-2' name='name' value={data.name} onChange={handleOnChange} type="text" placeholder='enter Your name' />
        <input required className='border-2 border-black p-2' name='email' value={data.email} onChange={handleOnChange} type="text" placeholder='enter email here' />
        <input required className='border-2 border-black p-2' name='password' value={data.password} onChange={handleOnChange} type="password" placeholder='Enter your password' />
        <input required className='border-2 border-black p-2' name='confirmPassword' value={data.confirmPassword} onChange={handleOnChange} type="password" placeholder='Enter your confirm password' />
            <Link className='text-red-700 flex justify-end' to={'/forgot-password'}>Forget password</Link>
            <button className='bg-purple-600 text-white p-2'>Submit</button>
            <p>Already have a account <Link to={'/login'} className='text-red-600 hover:underline'>Login</Link></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signup
