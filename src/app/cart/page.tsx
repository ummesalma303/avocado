
import {  CartItem, DataTable } from '@/components/DataTable'
import { authOptions } from '@/lib/authOptions'
import dbConnect, { collection } from '@/lib/dbConnect'
import { getServerSession } from 'next-auth'


const Cart = async () => {
  const session:unknown = await getServerSession(authOptions);
  console.log(session)
  const cart = await dbConnect(collection.cart).find<CartItem>({email:session?.user?.email}).toArray()
  console.log(JSON.stringify(cart))
  return (
    <div className='my-20 w-11/12 mx-auto'>
      
      { cart && <DataTable data={cart} /> }
    </div>
  )
}

export default Cart
