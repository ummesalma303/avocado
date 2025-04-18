"use client"
import React from 'react'
import { Button } from './ui/button'
interface IdProp {
    _id: string
 }
 const DetailButton: React.FC<IdProp> = ({ id }) => {
    console.log(id)
    const handleCart= async (id:string)=>{
        console.log(id)
    }
  return (
    <div className='mt-6'>
       <Button onClick={()=> handleCart(id)}>Add To Cart</Button>
    </div>
  )
}

export default DetailButton
