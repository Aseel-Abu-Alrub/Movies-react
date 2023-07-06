import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import imgg from '../../imgs/logo.png'
import '../Navbar/Navbar.css'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { MovieContext } from '../Context/MovieContext'
import { GlobalContext } from "../WishContext/GlobalState";


export default function Navbar({logout}) {
   
  let{user}=useContext(MovieContext)
  const { watchlist } = useContext(GlobalContext);

 

  return (
    <div  >
  <nav className="navbar navbar-expand-lg bg-transparent fixed-top m-0 p-0 " style={{boxShadow:'0 0 10px 2px rgba(255,255,255,0.4)',backgroundColor:'white'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" href=""><img src={imgg}  alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-list  me-auto ms-5  mb-2 py-3 mb-lg-0">
      
       {user?
       <>
         <li className="nav-item">
          <Link className="nav-link mt-2 text-white active me-4 px-0"  to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-2 me-4 px-0" to="tv">TvShow</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-2 me-4 px-0" to="popular">Popular</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-2 me-4 px-0" to="contact">Contacts</Link>
        </li>
      <li className="nav-item">
      <Link className="nav-link mt-2 me-4 px-0 position-relative" to="list">Watch List <span className='position-absolute ms-1 '>{watchlist.length}</span></Link>
       </li> 
       </>
   
      :
      <>
        <li className="nav-item">
          <Link className="nav-link my-2 text-white active me-4 px-0"  to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link my-2 me-4 px-0" to="tv">TvShow</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link my-2 me-4 px-0" to="popular">Popular</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link my-2 me-4 px-0" to="contact">Contacts</Link>
        </li>
      </>
      }
       
      
     
      </ul>
        
        <SearchBar/>
      
       <ul className="navbar-nav ms-auto  mb-lg-0  ">
        {user?  
        <>
        
      
        <li className="nav-item">
          <p className="nav-link border mt-3 rounded ms-3 logout " style={{cursor:'pointer'}} onClick={logout}>Logout</p>
        </li>
        
        </>
        :
        <>

        <li className="nav-item">
          <Link className="nav-link me-3 border border-1 rounded login" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-3 border border-1 rounded signup" to="register">Signup</Link>
        </li>
        
       
        </>
        
        }
       
      
      
       </ul>
     
    </div>
   

  </div>
</nav>

    </div>
  )
}

