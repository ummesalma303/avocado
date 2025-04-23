/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from '@/components/Card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'

const AllFoods = async() => {
    const foods = await dbConnect(collection.foods).find().toArray()
    console.log(foods)
  return (
    <div className="">
       <div className="flex justify-center mx-auto w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search here" />
      <Button type="submit">Search</Button>
    </div>
    <div className='w-11/12 mx-auto my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
        {
            foods?.map((food:any,i:number)=> <Card key={i} food={food}/>)
        }
     
    </div>
    </div>
  )
}

export default AllFoods
