
// import { DataTable } from '@/components/DataTable'
import { DataTable } from '@/components/DataTable'
import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'

const Cart = async () => {
  const cart = await dbConnect(collection.cart).find().toArray()
  // console.log(cart)
  return (
    <div className='my-20 w-11/12 mx-auto'>
      
      <DataTable data={cart} />
    </div>
  )
}

export default Cart
