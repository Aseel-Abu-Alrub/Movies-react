import React from 'react'
import './Contacts.css'
import { Link } from 'react-router-dom'

export default function Contacts() {
  return (
    <div className="contactt pt-5 ">
      <div className='contact'>
      <div className="contact-info text-white d-flex align-items-center justify-content-center vh-100">
      <h1 className='text-white title   '>Contact Us</h1>
      <div className="route ">
      <Link className='home me-3' to="../">Home</Link> 
       <span>Contact</span>
      </div>
       
      </div>
    </div>
    <div className='contact-form py-5 text-white '>
    <div className='container-fluid mt-5'>
      <div className="row">
        <div className="col-md-8">
          <h2 className='mb-5'>Contact Form</h2>
          <form>
          <div className="row">
            <div className="col-md-6">
            <div class="mb-4">
              <input type="text" placeholder="You name*" class="form-control"  />
            </div>
            </div>
            <div className="col-md-6">
            <div class="mb-4">
              <input type="email" placeholder="You Email*" class="form-control"  />
            </div>
            </div>
          </div>
          <div class="mb-4">
              <input type="text" placeholder="Subject*" class="form-control"   />
            </div>
            <textarea name="message" className='form-control mb-4' placeholder='Type Your Message...' id="" cols="107" rows="10"></textarea>
          <button type="submit" class="btn btn-primary send-btn rounded-pill">SEND MESSAGE</button>
          </form>
        </div>
        <div className="col-md-4  ">
            <h2>Information</h2>
            <div className="information px-4 pb-5">
            <p className='my-5 pt-5 borderr'><strong>Find solutions</strong>:to common problems, or get help from a support agent industry's standard .</p>
              
              <div className='my-5 borderr'>
              <span>   <i className='fa-solid fa-location-dot me-3'></i></span>
              <span><strong>Address:</strong> W38 Park Road New York</span> <br/>
              </div>
              
               <div className='my-5 borderr'>
               <span>   <i className='fa-solid fa-phone me-3'></i></span>
              <span><strong>Phone:</strong> (09) 123 854 365</span><br/>
               </div>
          
              <div className='my-5 borderr'>
              <span>   <i className='fa-solid fa-envelope me-3'></i></span>
              <span><strong>Email:</strong>support@movflx.com</span>
              </div>
         
            </div>
        </div>
      </div>
     </div>
    </div>

    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1687532836103!5m2!1sar!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    </div>
    
  )
}
