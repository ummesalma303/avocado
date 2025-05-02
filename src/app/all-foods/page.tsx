/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from '@/components/Card'
import SearchInput from '@/components/SearchInput'
// import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'


export const dynamic = "force-dynamic";

const AllFoods = async({searchParams}: { searchParams: any }) => {
  let foods:any = []
  const query = searchParams
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/foods?search=${query?.search}`,{
      cache: 'no-store' 
    })
    foods = await res.json()
    console.log('---------------------',res)
 
  } catch (err) {
    console.log(err)
    return []
  }
  
  return (
    <div className="">
      <SearchInput/>



    <div className='w-11/12 mx-auto my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
    {foods.length > 0 ? (
          foods.map((food: any, i: number) => (
            <Card key={i} food={food} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center text-gray-500 h-[60vh]">
            LOADING...
          </div>
        )}
    </div>
    </div>
  )
}

export default AllFoods
