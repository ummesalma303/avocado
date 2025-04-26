"use client"
import React, { useContext } from 'react'
import { Button } from './ui/button'
import { DataContext } from '@/Providers/DataProvider'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { ImCross } from 'react-icons/im'

interface IdProp {
    id: string
 }

 const DetailButton: React.FC<IdProp> = ({foodDetails, id }) => {
   const {data:session, status} = useSession()
  //  console.log(session?.user?.email)
  //  const email = session?.user?.email
  // const [cart,setCart] = useState({})
  const {data,setData} = useContext(DataContext)
    console.log(data,'data -----------------')
    const handleCart= async (id,foodDetails)=>{
      const { _id, ...foods } = foodDetails;
      const carts = {...foods, foodId: _id, count:0 }
        console.log(foodDetails)
        console.log(carts)
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
       <Button onClick={()=> handleCart(id,foodDetails)}>Add To Cart</Button>
       <Button>Update</Button>
       {/* <Button variant='destructive' onClick={()=>handleDelete(id)}>Delete</Button> */}
    </div>
  )
}

export default DetailButton
