import UpdateForm from '@/components/updateForm'
// import { useParams } from 'next/navigation'
import React from 'react'

const UpdateFoods = async ({params}:{ params: Promise<{ id: string }> }) => {
  const {id} = await params
  const res = await fetch(`http://localhost:3000/api/cart/${id}`,)
      const data = await res.json()
  return (
    <div className='  h-screen bg-[url(https://img.freepik.com/free-vector/hand-drawn-cute-food-frame-background_23-2149602177.jpg?semt=ais_hybrid&w=740)] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center'>
       <div className="bg-linear-to-t from-[#00000032] to-[#0000002b] w-full h-full pt-8 pb-16">
        <h2 className='text-3xl font-semibold text-center pb-6'>Update item</h2>
        <UpdateForm data={data}/>
       </div>
    </div>
  )
}

export default UpdateFoods