import DetailsCard from '@/components/DetailsCard'
import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'

// interface Food {
//     _id: string;
//        foodName: string;
//        foodImage: string;
//        category: string;
//        price: string;
//        recipeDetails: string;
 
// }

const FoodDetails = async () => {
    // const foodDetails:any = await dbConnect(collection.foods).findOne()
    const foodDetails: any = await dbConnect(collection.foods).findOne()

    
    console.log(foodDetails)
  return (
    <div className='w-11/12 mx-auto my-10'>
      <DetailsCard foodDetails={foodDetails}/>
       
    </div>
  )
}

export default FoodDetails
