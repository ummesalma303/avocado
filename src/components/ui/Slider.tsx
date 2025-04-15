import React from 'react'
import { Button } from './button'

type AppProps = {
    img: string;
    justify:string;
}

const Slider = ({img,justify}:AppProps) => {
  return (
    <div className="w-full h-[38rem] bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${img})` }}>
        
        {/* content */}
        <div className={`w-full flex md:px-16 items-center justify-${justify} h-screen bg-linear-to-t from-[#0000000e] to-[#00000009] `}>
           <div className="w-7xl space-y-4 ">
           <p className='text-green-600 font-bold'>100% organics product</p>
            <h2 className='text-4xl font-bold text-left'>Tasty & Healthy <br /> Organic Food</h2>
            <Button className='bg-green-600'>Shop Now</Button>
           </div>
    </div>
    </div>
  )
}

export default Slider