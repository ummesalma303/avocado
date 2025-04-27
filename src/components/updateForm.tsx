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
import { CartProps } from './DataTable';
import { useSession } from 'next-auth/react';

// export interface Cart {
//   _id: string
//   foodName: string
//   foodImage: string
//   category: string
//   price: string
//   recipeDetails: string
//   foodId: string
//   count: number
// }

const UpdateForm  = ({data}:CartProps) => {
  // console.log(JSON.stringify(data))
  const { _id, foodName, price, foodImage, category, recipeDetails} = data ||{}
  const {data:session, status} = useSession()
    const { register, handleSubmit,  formState: { errors } } = useForm();
    // post data in mongodb
    const onSubmit = async (updateFoodData:object) => {
      console.log(updateFoodData)
      try {
      //  const res = await fetch(`http://localhost:3000/api/foods/6801cd876a611551e1a1f588`,)
      // const data = await res.json()
    
      // console.log(data)
    
      } catch (error) {
        toast.error(String(error), { duration: 5000 });
        console.log(error)
      }
    };   

    // const onSubmit = async (foodData:object) => {
    //   console.log(foodData)
    //   try {
    //    const res = await fetch('http://localhost:3000/api/foods', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(foodData),
    //   })
    //   const data = await res.json()
    //   if ( data.insertedId) {
       
    //     toast("Food successfully add", {
    //       // description: "Sunday, December 03, 2023 at 9:00 AM",
    //       action: {
    //         label: <ImCross className=''/>,
    //         onClick: () => console.log("Undo"),
    //       },
    //       duration: 3000,
    //     })
    //   }
    //   console.log(data)
    
    //   } catch (error) {
    //     toast.error(String(error), { duration: 5000 });
    //     console.log(error)
    //   }
    // };   

  return (
    <div>
       <Card className="w-xl mx-auto">
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            {/*  name */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Name</Label>
              <Input type='text' id="userName" value={session?.user?.name || ''} {...register("userName")} />
            

            </div>
            {/*  email */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Email</Label>
              <Input type='email' id="userEmail" value={session?.user?.email || ''} {...register("userEmail")} />
            

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
