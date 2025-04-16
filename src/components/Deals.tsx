import React from 'react'
// import { Button } from './ui/button'

const Deals = () => {
  return (
  <div className="py-20 bg-[url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg)] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className='flex justify-center items-center '>
      <div className="text-center">
        <i className='text-green-600 font-semibold text-2xl mb-6'>Todays Hot Deals</i>
        <h2 className='text-3xl md:text-5xl font-bold'>Original Stock Honey <br />
        Combo Package</h2>
        {/* countdown */}
      <div className=" flex justify-center mt-6 space-x-4">
        <div className="">
            <h3 className='text-3xl font-bold'>00</h3>
            <h3 className='text-2xl mt-2'>Days</h3>
        </div>
        <div className="">
            <h3 className='text-3xl font-bold'>00</h3>
            <h3 className='text-2xl mt-2'>Hrs</h3>
        </div>
        <div className="">
            <h3 className='text-3xl font-bold'>00</h3>
            <h3 className='text-2xl mt-2'>Mins</h3>
        </div>
        <div className="">
            <h3 className='text-3xl font-bold'>00</h3>
            <h3 className='text-2xl mt-2'>Secs</h3>
        </div>
        
      </div>
        <button className='bg-green-600 mt-8 rounded-sm py-3 px-6 text-white'>Shop Now</button>
      </div>
    </div>
  </div>
  )
}

export default Deals
