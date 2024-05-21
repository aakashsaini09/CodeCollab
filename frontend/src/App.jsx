import { useEffect, useState } from 'react'
import './App.css'
import { Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SummaryApi from './common'
import Context from './context'
import {useDispatch} from 'react-redux'
import { setUserDetails } from './store/userSlice'
function App() {
  const dispatch = useDispatch()
  const fetchUserDetails = async() =>{
    const dataResponse = await fetch('http://localhost:5000/api/userdetails', {
      method: SummaryApi.current_user.method,
      credentials: 'include',
    })
    const dataAPI = await dataResponse.json()
    if(dataAPI.success){
      dispatch(setUserDetails(dataAPI.data))
    }
  }
  useEffect(() =>{
    fetchUserDetails()
  },[])
  
  return (
    <>
    <Context.Provider value={{
      fetchUserDetails
    }}>
    <ToastContainer/>
    <Header/>
    <main>
      <Outlet/>
    </main>
      <Footer/>
      </Context.Provider>
    </>
  )
}

export default App
