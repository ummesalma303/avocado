
import DetailsCard from '@/components/DetailsCard'
import dbConnect, { collection } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
// import { useParams } from 'next/navigation'
import React from 'react'

export interface Food {
  _id: string
  foodName: string
  foodImage: string
  category: string
  price: string
  recipeDetails: string
  foodId: string
  count: number
  userName: string
  email: string
}

const FoodDetails = async ({params}:{params:{id:string}}) => {
  const {id} = params
  const foodDetails = await dbConnect(collection.foods).findOne({ _id: new ObjectId(id) }) as Food | null;

   
    // const foodDetails:Food | null= await dbConnect(collection.foods).findOne({_id: new ObjectId(id)})
    console.log(foodDetails)
    
    console.log(foodDetails)
  return (
    <div className='w-11/12 mx-auto my-10'>
      {
        foodDetails && <DetailsCard foodDetails={foodDetails}/>
       }
    </div>
  )
}

export default FoodDetails
