"use client"
import React, { useContext } from 'react'
import { Button } from './ui/button'
import { DataContext } from '@/provider/DataProvider'

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
  return (
    <div className='mt-6'>
       <Button onClick={()=> handleCart(id)}>Add To Cart</Button>
    </div>
  )
}

export default DetailButton
