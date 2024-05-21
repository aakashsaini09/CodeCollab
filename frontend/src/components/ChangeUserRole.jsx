import React, { useState } from 'react'
import ROLE from '../common/role'
import {IoMdClose} from 'react-icons/io'
import SummaryAPI from '..//common'
import { toast } from 'react-toastify'
const ChangeUserRole = ({name, userId, email, role, onClose, liveUpdate}) => {
    const [ChangeUserRole, setChangeUserRole] = useState(role)

    const handleOnchange =(e) => {
        setChangeUserRole(e.target.value)
    }
    const updateUserRole = async () =>{
      const fetchResponse = await fetch(SummaryAPI.updateUser.url, {
        method: SummaryAPI.updateUser.method,
        credentials: 'include',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          role: ChangeUserRole,
          userId: userId
        })
      })
      const responstData= await fetchResponse.json()
      if(responstData.success){
        toast.success(responstData.message)
        onClose()
        liveUpdate()
      }
    }
  return (
    <div className='absolute w-full h-full z-10 flex justify-center items-center top-0 bottom-0 right-0 left-0 bg-slate-200 bg-opacity-60'>
      <div className='mx-auto bg-white shadow-xl p-4 w-full max-w-sm'>
        <button className='block ml-auto' onClick={onClose}>
            <IoMdClose className='font-bold text-2xl'/>
        </button>
        <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <div className='flex items-center justify-between my-4'>
                <p>Role :</p>  
                <select className='border px-4 py-1' value={ChangeUserRole} onChange={handleOnchange}>
                    {
                        Object.values(ROLE).map(el => {
                            return(
                                <option value={el} key={el}>{el}</option>
                            )
                        })
                    }
                </select>
            </div>
        <button className='w-fit mx-auto block border py-1 px-3 rounded-sm bg-purple-600 text-white hover:bg-purple-800' onClick={updateUserRole}>Change Role</button>
      </div>
    </div>
  )
}

export default ChangeUserRole
