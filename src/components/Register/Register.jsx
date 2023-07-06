import React, { useState } from 'react'
import style from '../Register/Register.module.css'
import { Link, useNavigate } from 'react-router-dom' 
import { useFormik } from 'formik'
import axios from 'axios'
import { schemas } from '../Schema/registerSchema'
import imgg from '../../login-shape-1.png'
import imgg2 from '../../login-shape-2.png'
import imgg3 from '../../login-shape-3.png'
import imgg4 from '../../login-shape-4.png'
import { toast } from 'react-toastify';


export default function Register() {

  let[error,setError]=useState([])
  let[statusError,setStatusError]=useState('')
  let navigate=useNavigate()
  const {values,handleSubmit,handleChange,errors,handleBlur,touched}=useFormik({
    initialValues:{
     userName:'',
     email:'',
     password:'',
     cPassword:'',
    },validationSchema:schemas,
    onSubmit:sendDateRegister
  })

  async function sendDateRegister(values){
    try{
      let{data}=await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/signup",values)
      if(data.message == 'Done'){
      toast.success("Please check your email to verify");
       setError([])
       navigate('/login')
      }
      else{
        console.log(data)
        setError(data.err[0])
      }
    }
    catch(err){
      setStatusError(err.response.data.message)
    }
  }
  return (

    <div className={style.wave}>
    {/* <Link to="../login">Login</Link>
    <Link to="../register">Register</Link> */}
     {error.map((err)=>{
        return <div className='alert alert-danger'>{err.message}</div>
     })}
    
    <div className={style.reg} >
    <h2 className={`text-center pt-5 ${style.title}`}>Sign Up Shofy</h2>

    <form className='w-75 m-auto py-4' onSubmit={handleSubmit} >
    
    <div className="mb-3">
    {/* <label htmlFor="exampleInputName" className="form-label">Name</label> */}
    <input type="text" className={errors.userName && touched.userName? "form-control mt-4 is-invalid":!errors.userName && touched.userName?"form-control my-5 is-valid":'form-control my-5'}  id="exampleInputName" placeholder='Username' name='userName' value={values.userName} onChange={handleChange} onBlur={handleBlur}   />
     {errors.userName && touched.userName?<p className='text-danger'>{errors.userName}</p>:''} 
  </div>
  <div className="mb-0">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
    {statusError=='Email exist'?<p className='text-danger py-0 my-0 '>{statusError} !</p>:''}
    <input type="email" className={errors.email && touched.email? "form-control mt-4  is-invalid":!errors.email && touched.email?"form-control mb-5 is-valid":'form-control mb-5 '} id="exampleInputEmail1" placeholder='Email address' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}  />
   {errors.email && touched.email? <p className='text-danger'>{errors.email}</p>:''}

  </div>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
    <input type="password" className={errors.password && touched.password? "form-control mt-4 is-invalid":!errors.password && touched.password?"form-control mb-5 is-valid":'form-control mb-5'} id="exampleInputPassword1" placeholder='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}  />
     {errors.password && touched.password?<p className='text-danger'>{errors.password}</p>:''}
  </div>

  <div className="mb-3">
    {/* <label htmlFor="exampleInputCPassword1" className="form-label">Confirm Password</label> */}
    <input type="password" className={errors.cPassword && touched.cPassword? "form-control mt-4 is-invalid":!errors.cPassword && touched.cPassword?"form-control my-4 is-valid":'form-control my-4'} id="exampleInputCPassword1" placeholder='Confirm Password' name='cPassword' value={values.cPassword} onChange={handleChange} onBlur={handleBlur}  />
    {errors.cPassword && touched.cPassword?<p className='text-danger'>{errors.cPassword}</p>:''}
  </div>
 
 <div className="d-flex justify-content-center my-5 ">
 <button type="submit" className={`btn btn-primary text-center fw-bold fs-5 w-50 rounded-0 ${style.signup}`} >Signp</button>
 </div>
 <Link to="../login" className={style.links}>Already have an account ? <span className={style.login}>Login</span></Link>
  <p className={`position-relative text-center mt-4 ${style.signwith}`}> OR</p>
  <div className=" justify-content-center align-items-center mt-5">
    <div className={`position-relative ${style.facebook}`} >
    <i className={`fa-brands fa-facebook-f fs-2 d-flex flex-column justify-content-center ps-4 ms-3  `} > </i>
    <span className={`position-absolute top-0 text-white mt-2  ps-5 fw-bold ${style.span}`} >Sign up with Facebook</span>
    </div>
    
    <div className={`${style.google} position-relative `}>
    <img src="../../google.png"  style={{height:'30px',width:'30px'}} alt="google icon" />
    <span className={`position-absolute top-0  mt-2 ms-5 ps-2 fw-bold ${style.span}`} >Sign up with Google</span>

    </div>

  </div>
  
    </form>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,101.3C480,128,600,224,720,234.7C840,245,960,171,1080,165.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
    </div>
    <img src={imgg} className='d-s-nonoe d-none d-lg-block' style={{width:'130px',position:'absolute',top:'50%',left:'70px'}}  alt=''/>
    <img src={imgg2} className='d-s-nonoe d-none d-lg-block' style={{width:'15px',position:'absolute',bottom:'-10%',left:'100px'}}  alt=''/>
    <img src={imgg3} className='d-s-nonoe d-none d-lg-block' style={{width:'40px',position:'absolute',top:'40%',right:'120px'}}  alt=''/>
    <img src={imgg4} className='d-s-nonoe d-none d-lg-block' style={{width:'230px',position:'absolute',bottom:'-100px',right:'10px'}}  alt=''/>


    

    


    </div>
  )
}
