"use client"
import React, { useContext } from 'react'
import { Button } from './ui/button'
import { DataContext } from '@/Providers/DataProvider'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { ImCross } from 'react-icons/im'
import { useRouter } from 'next/navigation'


 export interface Food {
  foodDetails:{
    _id: string
  foodName: string
  foodImage: string
  category: string
  price: string
  recipeDetails: string
  },
  id?:string
}

 const DetailButton: React.FC<Food> = ({foodDetails, id }) => {
   const {data:session} = useSession()
  //  console.log(session?.user.name)
  //  console.log(JSON.stringify(foodDetails))
  const router = useRouter()
    const handleCart = async (id:string,foodDetails:Food['foodDetails'])=>{
      const { _id, ...foods } = foodDetails;
      const carts = {...foods, foodId: _id, count:0, userName: session?.user?.name, email:session?.user?.email }
       
        try {
          const res = await fetch('http://localhost:3000/api/cart', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(carts),
         })
         const data = await res.json()
         if ( data.insertedId) {
          
           toast("Food successfully add", {
             // description: "Sunday, December 03, 2023 at 9:00 AM",
             action: {
               label: <ImCross className=''/>,
               onClick: () => console.log("Undo"),
             },
             duration: 3000,
           })
           router.push('/cart')
         }
         console.log(data)
       
         } catch (error) {
           toast.error(String(error), { duration: 5000 });
           console.log(error)
         }
    }

// update data

// // delete data
// const handleDelete = async (id:string) => {
// console.log(id)
// try {
  
//   const deleteData = await fetch(`/api/foods/${id}`, {
//    method: "DELETE",
//  })
//   const res= await deleteData.json()
//   console.log(res)
// } catch (error) {
//   console.log(error)
// }
// }
  return (
    <div className='mt-6 space-x-6'>
       <Button onClick={()=> handleCart(id||'',foodDetails)}>Add To Cart</Button>
     
    </div>
  )
}

export default DetailButton
