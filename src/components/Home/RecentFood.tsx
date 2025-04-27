import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'
import Card from '../Card'

const RecentFood = async () => {
    const foods = await dbConnect(collection.foods).find().limit(6).toArray()
    console.log(foods)
  return (
    <div className='py-16'>
        <div className="text-center ">
            <i className='text-green-600 font-semibold text-2xl pb-9'>--- Popular Foods ---</i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Animi, blanditiis! Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='w-11/12 mx-auto my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
        {
            foods?.map((food:any,i:number)=> <Card key={i} food={food}/>)
        }
     
    </div>
    </div>
  )
}

export default RecentFood