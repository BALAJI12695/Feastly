import React from 'react'
import profilePic from '../assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='Work-section-wrapper' >
        <div className='work-section-top' >
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading' >What They Are Saying</h1>
            <p className='primary-text' > 
            "The meal options are fantastic! I love how easy it is to choose what I want, and the deliveries are always on time. I’ve never felt better!"
            </p>
        </div>
        <div className='testimonial-section-bottom' >
            <img src={profilePic} alt="" />
            <p >
            "The variety of meals keeps me excited about eating healthy. The service is super convenient, and I can trust that my food is always fresh."
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div> 
    </div>
  )
}

export default Testimonials