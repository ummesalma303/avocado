import DetailsCard from '@/components/DetailsCard'
import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'

const FoodDetails = async () => {
    const foodDetails = await dbConnect(collection.foods).findOne()
    // const {foodName,foodImage} = foodDetails || {}
    
    console.log(foodDetails)
  return (
    <div className='w-11/12 mx-auto my-10'>
      <DetailsCard foodDetails={foodDetails}/>
       
    </div>
  )
}

export default FoodDetails
