// import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'
import Card from '../Card'

// type Food = {
//   _id: string;
//   foodName: string;
//   price: number;
//   category:string
//   image: string;
//   description?: string;
// };

const RecentFood = async () => {
    const data = await fetch('http://localhost:3000/api/popular-foods') 
    const foods = await data.json()
    // console.log(res)
  return (
    <div className='py-16'>
        <div className="text-center ">
            <i className='text-amber-500 font-semibold text-2xl pb-9'>--- Popular Foods ---</i>
            <p>Explore our best-selling foods, chosen by customers for their unbeatable taste, <br/> freshness, and consistent quality every time.</p>
        </div>
        <div className='w-11/12 mx-auto my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            foods?.map((food:any,i:number)=> <Card key={i} food={food}/>)
        }
     
    </div>
    </div>
  )
}

export default RecentFood