import React, {useEffect, useState} from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { FaEdit } from "react-icons/fa";
import moment from 'moment'
import '../App.css'
import ChangeUserRole from '../components/ChangeUserRole';
const AllUsers = () => {
  const [allUsers, setallUsers] = useState([])
  const [openUpdateRole, setopenUpdateRole] = useState(false)
  const [updateUserDetails, setupdateUserDetails] = useState({
    email: '',
    password: '',
    role: '',
    _id: ''
  })
  const fetchAllUsers = async()=> {
    const fetchData = await fetch(SummaryApi.allUsers.url,{
      method : SummaryApi.allUsers.method,
      credentials : 'include'
  })

  const dataResponse = await fetchData.json()
  if(dataResponse.success){
    setallUsers(dataResponse.data)
  }
  if(dataResponse.error)
  toast.error(dataResponse.message)
  }
  useEffect(() => {
    fetchAllUsers()
  }, [])
  
  return (
    <div className='w-full'>
    <table className='w-full userTable border-collapse'>
      <thead className="bg-gray-200">
        <tr className='bg-black text-white'>
          <th className="py-6 px-4">Sr.</th>
          <th className="py-6 px-4">Name</th>
          <th className="py-6 px-4">Email</th>
          <th className="py-6 px-4">Role</th>
          <th className="py-6 px-4">Created Date</th>
          <th className="py-6 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((item, index) => (
          <tr key={item._id} className={(index % 2 === 0) ? "bg-white" : "bg-gray-100"}>
            <td className="py-2 px-4 text-center">{index+1}</td>
            <td className="py-2 px-4 text-center">{item.name}</td>
            <td className="py-2 px-4 text-center">{item.email}</td>
            <td className="py-2 px-4 text-center">{item.role}</td>
            <td className="py-2 px-4 text-center">{moment(item?.createdAt).format('LL')}</td>
            <td className="py-2 px-4 text-center"><button className='cursor-pointer p-2' onClick={()=>{
            setupdateUserDetails(item) 
              setopenUpdateRole(true)}}>
              <FaEdit className='hover:text-green-700' />
              </button></td>
          </tr>
        ))}
      </tbody>
    </table>
    {
      openUpdateRole && (
        <ChangeUserRole onClose={()=>setopenUpdateRole(false)} email={updateUserDetails.email} name={updateUserDetails.name} role={updateUserDetails.role} userId={updateUserDetails._id} liveUpdate={fetchAllUsers}/>
      )
    }
  </div>
  
  )
}

export default AllUsers
