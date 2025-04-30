"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { ImCross } from "react-icons/im";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export interface CartItem {
  _id: string,
  foodName: string;
  foodImage: string;
  category: string;
  price: string;
  recipeDetails: string;
}

export interface CartProps {
  data: CartItem;
}

const UpdateForm  = ({data}:CartProps) => {
  const router = useRouter()
  const {_id, foodName, price, foodImage, category, recipeDetails} = data 
  const {data:session} = useSession()
  console.log(session?.user?.name)

    const { register, handleSubmit } = useForm();
    // post data in mongodb
    const onSubmit = async (updateFoodData:object) => {
      console.log(updateFoodData)
      try {
        const res = await fetch(`/api/cart/${_id}`, {
         method: 'PATCH',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(updateFoodData),
       })
       const data = await res.json()
       if ( data. modifiedCount>0) {
        
         toast("Items successfully update", {
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
    };   

       

  return (
    <div>
       <Card className="w-xl mx-auto">
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            {/*  name */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Name</Label>
              <Input className='text-amber-500' type='text' id="userName" disabled defaultValue={session?.user?.name || ''
              } {...register("userName")} />

            </div>
            {/*  email */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Email</Label>
              <Input className='text-amber-500' type='text' id="userEmail" defaultValue={session?.user?.name || ''
              } {...register("userEmail")} disabled/>
            
            </div>
            {/* food name */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Food Name</Label>
              <Input type='text' id="foodName" defaultValue={foodName
              } {...register("foodName")} />
            

            </div>
            {/* food Image */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" >Food Image Url</Label>
              <Input type='url' id="foodImage" defaultValue={foodImage} {...register("foodImage")} />
             
            </div>
            {/* Category & price */}
           <div className="flex space-x-4">
            {/* Category */}
           <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="framework">Category</Label>
               <select className='border-[1px] w-full p-1 rounded-md' defaultValue={category} {...register("category")}>
               <option value="Food & Drinks">Food & Drinks</option>
                  <option value="Bread & Cakes">Bread & Cakes</option>
                  <option value="Dried Foods">Dried Foods</option>
                  <option value="Fish & Meat">Fish & Meat</option>
                  <option value="Vegetable">Vegetable</option>
      </select>
            </div>
            {/* price */}
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="name">Price</Label>
              <Input type='number' id="price" defaultValue={price} {...register("price")} />
             
            </div>
           </div>

            <div className="flex flex-col space-y-1.5">
            <div className="grid w-full gap-1.5">
      <Label htmlFor="details">Recipe Details</Label>
      <Textarea defaultValue={recipeDetails} id="message" {...register("recipeDetails")}/>
    </div>
            </div>
            
            <input className='bg-black text-white py-2 rounded-md' type="submit" value='submit' />
          </div>
        </form>
      </CardContent>
      
    </Card>
    </div>
  )
}

export default UpdateForm
