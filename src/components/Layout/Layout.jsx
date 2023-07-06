import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { MovieContext } from '../Context/MovieContext'
import { useContext } from 'react'

export default function Layout() {
  let{setUser}=useContext(MovieContext)
  let navigate=useNavigate()
  function logout(){
    localStorage.removeItem("userToken")
    setUser(null)
    navigate('/login')
   }
  return (
    <>
    <Navbar logout={logout}/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}
