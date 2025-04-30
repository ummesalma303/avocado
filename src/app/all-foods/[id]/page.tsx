
// import DetailsCard from '@/components/DetailsCard'
// import dbConnect, { collection } from '@/lib/dbConnect'
// import { ObjectId } from 'mongodb'
// // import { useParams } from 'next/navigation'
// import React from 'react'

// export interface Food {
//   _id: string
//   foodName: string
//   foodImage: string
//   category: string
//   price: string
//   recipeDetails: string
//   foodId: string
//   count: number
//   userName: string
//   email: string
// }

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



import { ObjectId } from 'mongodb'
import dbConnect, { collection } from '@/lib/dbConnect'
import DetailsCard from '@/components/DetailsCard'

interface Food {
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

interface PageProps {
  params: {
    id: string
  }
}

const FoodDetails = async ({ params }: PageProps) => {
  const { id } = params

  const foodDetails = await dbConnect(collection.foods).findOne({
    _id: new ObjectId(id)
  }) as Food | null

  return (
    <div className='w-11/12 mx-auto mt-24 mb-10'>
      {foodDetails && <DetailsCard foodDetails={foodDetails} />}
    </div>
  )
}

export default FoodDetails
