
// import {  CartItem, DataTable } from '@/components/DataTable'
// import { authOptions } from '@/lib/authOptions'
// import dbConnect, { collection } from '@/lib/dbConnect'
// import { getServerSession } from 'next-auth'


// const Cart = async () => {
//   const session:unknown = await getServerSession(authOptions);
//   console.log(session)
//   const cart = await dbConnect(collection.cart).find<CartItem>({email:session?.user?.email}).toArray()
//   // console.log(JSON.stringify(cart))
//   return (
//     <div className='my-20 w-11/12 mx-auto'>
      
//       { cart && <DataTable data={cart} /> }
//     </div>
//   )
// }

// export default Cart


import { CartItem, DataTable } from '@/components/DataTable'
import { authOptions } from '@/lib/authOptions'
import dbConnect, { collection } from '@/lib/dbConnect'
import { getServerSession } from 'next-auth'
import { Session } from 'next-auth' // Import Session type

const Cart = async () => {
  
  const session: Session | null = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return (
      <div className='my-20 w-11/12 mx-auto'>
        <p className="text-center">You must be logged in to view your cart.</p>
      </div>
    )
  }

  const cart = await dbConnect(collection.cart)
    .find<CartItem>({ email: session.user.email })
    .toArray()

  return (
    <div className='my-20 w-11/12 mx-auto'>
      {cart.length > 0 ? <DataTable data={cart} /> : <p className="text-center">Your cart is empty.</p>}
    </div>
  )
}

export default Cart
