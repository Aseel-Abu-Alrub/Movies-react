import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { useFormik } from 'formik'
import axios from 'axios'
import style from '../Login/Login.module.css'
import { schemas } from '../Schema/loginSchema'
import imgg from '../../login-shape-1.png'
import imgg2 from '../../login-shape-2.png'
import imgg3 from '../../login-shape-3.png'
import imgg4 from '../../login-shape-4.png'
import { MovieContext } from '../Context/MovieContext'


export default function Login() {
  let navigate=useNavigate()
  let{SaveUserData}=useContext(MovieContext);


  const {values,handleSubmit,handleChange,touched,handleBlur,errors}=useFormik({
    initialValues:{
     email:'',
     password:'',
    
    },validationSchema:schemas,
    onSubmit:sendDatalogin
  })

  async function sendDatalogin(values){
    try{
      let{data}=await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/login",values)
      if(data.message== 'Done'){
       localStorage.setItem("userToken",data.access_token )
       SaveUserData()
       navigate('/Home')
      
      }
      
      console.log(data)
    }
    catch(err){
      console.log(err)
    }
  }

  
  return (
    <section className={style.back}>
      
    <div className={style.reg} >
    <h2 className={`text-center pt-5 ${style.title}`}>Welcome Back!</h2>
    <p className='text-center'>Sign in to your account</p>

    <form  onSubmit={handleSubmit} className='w-75 m-auto py-5'  >
    
   {/* <p className='text-danger'>{err}</p> */}
  <div className="mb-3 position-relative">
  <i className={`fa-regular fa-envelope position-absolute ms-3 ${style.emailIcon}`}></i>
    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
    <input type="email" className={errors.email && touched.email?"form-control ps-5 pe-0 is-invalid": !errors.email && touched.email?'form-control mb-5 pe-0 ps-5 is-valid':'form-control mb-5 pe-0  ps-5 '} id="exampleInputEmail1" placeholder='Email address' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}  />
  </div>
  {errors.email && touched.email? <p className='text-danger'>{errors.email}</p>:''}

  <div className="mb-3 position-relative">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
    <i className={`fa-solid fa-lock position-absolute ms-3 ${style.emailIcon}`}></i>
    <input type="password" className={errors.password && touched.password?"form-control ps-5 is-invalid": !errors.password && touched.password?'form-control  ps-5 is-valid':'form-control  ps-5 '} id="exampleInputPassword1" placeholder='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}  />
  </div>
  {errors.password && touched.password?<p className='text-danger'>{errors.password}</p>:''}

  <div className="d-flex justify-content-between pt-4">
 < div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
  </div>
   <Link className='text-primary'>Forgot Password ?</Link>
  </div>
  
 <div className="d-flex justify-content-center my-5 ">
 <button type="submit" className={`btn btn-primary text-center w-50 rounded-0 fs-5 ${style.signup}`}  >Login</button>
 </div>
 <Link to="../register" className={`${style.links} d-flex justify-content-center`}> Not a member? <span className={`${style.login} px-2`} >Signup now</span></Link>
 
  
    </form>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,234.7C840,245,960,171,1080,165.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
    </div>

      <img src={imgg} className='d-s-nonoe d-none d-lg-block' style={{width:'130px',position:'absolute',top:'50%',left:'70px'}}  alt=''/>
      <img src={imgg2} className='d-s-nonoe d-none d-lg-block' style={{width:'15px',position:'absolute',bottom:'-10%',left:'100px'}}  alt=''/>
       <img src={imgg3} className='d-s-nonoe d-none d-lg-block' style={{width:'40px',position:'absolute',top:'40%',right:'120px'}}  alt=''/>
       <img src={imgg4} className='d-s-nonoe d-none d-lg-block' style={{width:'230px',position:'absolute',bottom:'-100px',right:'10px'}}  alt=''/>


    </section>
    
  )
}



