import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'

const FoodDetails = async () => {
    const foodDetails = await dbConnect(collection.foods).findOne()
    // const {foodName,} = foodDetails || {}
    console.log(foodDetails)
  return (
    <div>
        <h2>{foodDetails?.foodName}</h2>
      Food Details
    </div>
  )
}

export default FoodDetails
