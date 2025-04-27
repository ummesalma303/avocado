import UpdateForm from '@/components/updateForm'
// import { useParams } from 'next/navigation'
import React from 'react'

const UpdateFoods = async ({params}:{params:{id:string}}) => {
  const {id} = params
  // console.log(id)
  const res = await fetch(`http://localhost:3000/api/cart/${id}`,)
      const data = await res.json()
    
      // console.log(data)
  return (
    <div className='mt-8 mb-16'>
        <h2 className='text-3xl font-semibold text-center mb-6'>Update item</h2>
        <UpdateForm data={data}/>
    </div>
  )
}

export default UpdateFoods