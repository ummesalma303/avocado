/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from '@/components/Card'
import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'

const AllFoods = async() => {
    const foods = await dbConnect(collection.foods).find().toArray()
    // console.log(foods)
  return (
    <div className="">

    <div className='w-11/12 mx-auto my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
        {
            foods?.map((food:any,i:number)=> <Card key={i} food={food}/>)
        }
     
    </div>
    </div>
  )
}

export default AllFoods
