
import { ObjectId } from 'mongodb'
import React from 'react'
import DetailsCard from '@/components/DetailsCard'
import dbConnect, { collection } from '@/lib/dbConnect'

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

// type Props = {
// params: {
//     id: string;
//   };
// }
// const FoodDetails = async ({params}:Props) => {
//   // console.log(params)
//   const {id} =  params
//   // const p = await params
//   // console.log('--------line number->21---------',id)
//   // console.log('--------line number->21---------', params)
//   // console.log(p)
//   const foodDetails = await dbConnect(collection.foods).findOne({ _id: new ObjectId(id) }) as Food | null;

   
//     // const foodDetails:Food | null= await dbConnect(collection.foods).findOne({_id: new ObjectId(id)})
    
//   return (
//     <div className='w-11/12 mx-auto mt-24 mb-10'>
//       {
//         foodDetails && <DetailsCard foodDetails={foodDetails}/>
//        }
//     </div>
//   )
// }

// export default FoodDetails



interface PageProps {
  params: {
    id: string
  }
}

const FoodDetails = async ({ params }: PageProps) => {
  const { id } = await params
  let foodDetails: Food | null = null

  try {
    if (!ObjectId.isValid(id)) {
      throw new Error('Invalid ID')
    }

    foodDetails = await dbConnect(collection.foods).findOne({
      _id: new ObjectId(id)
    }) as Food | null

    if (foodDetails) {
      foodDetails._id = foodDetails._id.toString()
    }
  } catch (error) {
    console.error(error)
  }

  if (!foodDetails) {
    return <div className="text-center mt-24">Food not found.</div>
  }

  return (
    <div className="w-11/12 mx-auto mt-24 mb-10">
      <DetailsCard foodDetails={foodDetails} />
    </div>
  )
}

export default FoodDetails
