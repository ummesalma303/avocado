import React from 'react'
import { Button } from './ui/button';

type AppProps = {
    img: string;
    justify:string;
    text:string;
}

const Slider = ({img,justify,text}:AppProps) => {
    
  return (
    <div className="w-full h-[90vh] bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${img})` }}>
        
        {/* content */}
        <div className={`w-full flex px-8 md:px-16 items-center text-left ${justify} h-screen bg-linear-to-t from-[#0000005a] to-[#00000009] `}>
           <div className=" space-y-4 ">
           <p className='text-green-600 font-bold'>100% organics product</p>
            <h2 className='text-2xl md:text-5xl font-bold text-left w-[90%] md:w-[32rem]'>{text}</h2>
            <Button className='bg-green-600'>Shop Now</Button>
           </div>
    </div>
    </div>
  )
}

export default Slider