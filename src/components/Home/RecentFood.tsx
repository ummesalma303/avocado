import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'
import Card from '../Card'

type Food = {
  _id: string;
  foodName: string;
  price: number;
  category:string
  image: string;
  description?: string;
};

const RecentFood = async () => {
    const foods:Food[] = await dbConnect(collection.foods).find().limit(6).toArray()
    console.log(foods)
  return (
    <div className='py-16'>
        <div className="text-center ">
            <i className='text-amber-500 font-semibold text-2xl pb-9'>--- Popular Foods ---</i>
            <p>Explore our best-selling foods, chosen by customers for their unbeatable taste, <br/> freshness, and consistent quality every time.</p>
        </div>
        <div className='w-11/12 mx-auto my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
        {
            foods && foods?.map((food:Food,i:number)=> <Card key={i} food={food}/>)
        }
     
    </div>
    </div>
  )
}

export default RecentFood