import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="min-h-screen w-11/12 mx-auto py-12 ">
      

        <div className="flex items-center justify-between pt-8 ">
        
        {/* Text Column */}
        <div className='w-1/2'>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
          At Avocado Haven, we celebrate the love for fresh, nutritious avocados. Our mission is to bring you the finest, sustainably grown avocados. Whether for snacking or cooking, we deliver quality and care straight from farm to table.

          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
          We are a fresh grocery store offering the best avocados and produce, carefully selected to bring quality to your home.
          </p>
          <div className="mt-8">
            {/* <Button>
              Learn More
            </Button> */}
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <Image width={400} height={200} 
            src="https://thumbs.dreamstime.com/b/portrait-successful-business-woman-white-background-professional-109290811.jpg" 
            alt="About us" 
            className=" object-cover "
          />
        </div>

      </div>

    </div>
  )
}

export default Contact