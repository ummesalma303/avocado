import React from 'react'
import { Button } from '../ui/button'

const Contact = () => {
  return (
    <div className="min-h-screen w-11/12 mx-auto py-12 ">
       <div className="text-center ">
            <i className='text-green-600 font-semibold text-2xl pb-9'>--- Contact Us ---</i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Animi, blanditiis! Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="flex items-center justify-center pt-8 ">
        
        {/* Text Column */}
        <div className='w-1/2'>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Welcome to our platform! We are a passionate team dedicated to delivering quality and innovation.
            Our mission is to empower and inspire people through creativity and commitment.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every project we work on is crafted with care and attention to detail. Thank you for being part of our journey!
          </p>
          <div className="mt-8">
            <Button>
              Learn More
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdzXGOafQiDpUg0uq8UcAI8YzJRFs_lkFn7g&s" 
            alt="About us" 
            className="rounded-2xl shadow-lg object-cover h-96 w-full"
          />
        </div>

      </div>

    </div>
  )
}

export default Contact