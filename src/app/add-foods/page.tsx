import FoodForm from '@/components/FoodForm'
import React from 'react'
// import { Input } from "@/components/ui/input"

// type AppProps = {
//   obj: {
//     foodName: string;
//     category: string;
//     price: string;
//     recipeDetails: string;
//   };
// }
const AddFoods = () => {
 

  // console.log(watch("example"));

  return (
    <div className=' min-h-screen bg-[url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLXM4NC1tb25pa2EtZ3JhYmtvd3NrYS10aHltZS03LTAxXzIuanBn.jpg)] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center '>
    <div className="bg-linear-to-t from-[#00000032] to-[#0000002b] w-full h-full py-10">
    <div className="text-center">
     <i className='text-green-500 font-semibold text-xl pb-12'>--- Todays Hot Deals ---</i>
        <h2 className='text-2xl font-bold'>ADD AN ITEM</h2>
     </div>
    
    <FoodForm/>
    </div>
    </div>
  )
}

export default AddFoods
