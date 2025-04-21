"use client"
import React, { useContext } from 'react'
import { Button } from './ui/button'
import { DataContext } from '@/Providers/DataProvider'

interface IdProp {
    id: string
 }

 const DetailButton: React.FC<IdProp> = ({ id }) => {
  // const [cart,setCart] = useState({})
  const {data,setData} = useContext(DataContext)
    console.log(data,'data -----------------')
    const handleCart= async (id:string)=>{
        console.log(id)
        try {
          const data = await fetch(`http://localhost:3000/api/foods/${id}`)
        const res = await data.json()
        setData(res)
          console.log(res)
        } catch (error) {
          console.log(error)
        }
    }

// update data

// delete data
const handleDelete = async (id:string) => {
console.log(id)
try {
  
  const deleteData = await fetch(`/api/foods/${id}`, {
   method: "DELETE",
 })
  const res= await deleteData.json()
  console.log(res)
} catch (error) {
  console.log(error)
}
}
  return (
    <div className='mt-6 space-x-6'>
       <Button onClick={()=> handleCart(id)}>Add To Cart</Button>
       <Button>Update</Button>
       <Button variant='destructive' onClick={()=>handleDelete(id)}>Delete</Button>
    </div>
  )
}

export default DetailButton
