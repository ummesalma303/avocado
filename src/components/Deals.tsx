import React from 'react'
// import { Button } from './ui/button'

const Deals = () => {
  return (
  <div className=" bg-[url(https://cdn.viva.org.uk/wp-content/uploads/2022/06/Vegan-health-food.jpg)] bg-cover bg-no-repeat bg-center bg-fixed">
      <div className='flex justify-center items-center bg-linear-to-t from-[#0000005a] to-[#00000009] w-full h-full py-20 '>
      <div className="text-center">
        <i className='text-amber-300 font-semibold text-2xl mb-6'>--- Todays Hot Deals ---</i>
        <h2 className='text-3xl md:text-5xl font-bold'>Original Stock Honey <br />
        Combo Package</h2>
        {/* countdown */}
      <div className=" flex justify-center mt-6 space-x-4">
      {/* <img src="../../public/assets/deals.jpg" alt="" /> */}
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
        <button className='bg-amber-500 mt-8 rounded-sm py-3 px-6 text-white'>Shop Now</button>
      </div>
    </div>
  </div>
  )
}

export default Deals
