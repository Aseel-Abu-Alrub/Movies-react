import React from 'react'
import { Link } from 'react-router-dom'
import movie from '../../imgs/banner_bg01.jpg'
import '../Home/Home.css'


export default function HomeHeader() {
  return (
    <div className=''>
    <div id="carouselExampleInterval header" className="carousel slide position-relative" data-bs-ride="carousel">
<div className="carousel-inner ">
<div className="carousel-item one   active" data-bs-interval={10000}>

<img src={movie} className='w-100 vh-50' alt="" />
<div className="title position-absolute ">
 <p >Movfix</p>
 <h1 >Unlimited Movie, TVs Shows, & More.</h1>
 <div className="info mt-4 mb-5">
 <span className='me-4 border bg-white text-dark px-2 pg'>PG18</span>
  <span className='me-4 border  px-3 pg'>HD</span>
   <span className='me-4 drama'>Action,Drama</span>
    <span className='me-3 fs-5'><i class="fa-regular fa-calendar-days me-2"></i>2022</span>
    <span className='fs-5'><i class="fa-regular fa-clock me-2"></i>128min</span>
 </div>
 <Link className="border rounded-pill mt-5 px-5 py-3 watch"> <i className='fa-solid fa-play me-3 '></i>WATCH NOW</Link>   

</div>
    </div>
    <div className="carousel-item one   active" data-bs-interval={10000}>

<img src={movie} className='w-100 vh-50' alt="" />
<div className="title position-absolute ">
 <p >Movfix</p> 
 <h1 >Unlimited Movie, TVs Shows, & More.</h1>
 <div className="info mt-4 mb-5">
 <span className='me-4 border bg-white text-dark px-2 pg'>PG18</span> 
 <span className='me-4 border  px-3 pg'>HD</span> 
 <span className='me-4 drama'>Action,Drama</span>
  <span className='me-3 fs-5'><i class="fa-regular fa-calendar-days me-2"></i>2022</span>
  <span className='fs-5'><i class="fa-regular fa-clock me-2"></i>128min</span>
 </div>
 <Link className="border rounded-pill mt-5 px-5 py-3 watch"><i className='fa-solid fa-play me-3 '></i>WATCH NOW</Link>   


</div>
    </div>
    <div className="carousel-item one   active" data-bs-interval={10000}>

<img src={movie} className='w-100 vh-50' alt="" />
<div className="title  position-absolute ">
 <p >Movfix</p>
 <h1 >Unlimited Movie, TVs Shows, & More.</h1>
 <div className="info mt-3 mb-5">
 <span className='me-3 border bg-white text-dark px-2 pg'>PG18</span> 
 <span className='me-4 border  px-3 pg' >HD</span> 
 <span className='me-4 drama' >Action,Drama</span>
  <span className='me-3 fs-5'><i class="fa-regular fa-calendar-days me-2"></i>2022</span>
  <span className='fs-5'><i class="fa-regular fa-clock me-2"></i>128min</span>
 </div>
 <Link className="border rounded-pill mt-5 px-4 py-3 watch"><i className='fa-solid fa-play me-3 '></i>WATCH NOW</Link>   

</div>

 </div>

</div>
<div className="d-flex justify-content-between">
<button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
<span className="carousel-control-prev-icon   d-none" aria-hidden="true" />
<span className="visually-hidden ">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
<span className="carousel-control-next-icon d-none ms-5" aria-hidden="true" />
<span className="visually-hidden">Next</span>
</button>
</div>

</div>

</div>
  )
}
