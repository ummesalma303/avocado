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

const FoodForm = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {data:session} = useSession()
      console.log(session?.user?.name)
    // post data in mongodb
    const onSubmit = async (foodData:object) => {
      try {
       const res = await fetch(`${process.env.NEXTAUTH_URL}/api/foods`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
      })
      const data = await res.json()
      console.log(data)

      if ( data.insertedId) {
       
        toast("Food successfully add", {
          // description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: <ImCross className=''/>,
            onClick: () => console.log("Undo"),
          },
          duration: 3000,
        })
      }
    
      } catch (error) {
        toast.error(String(error), { duration: 5000 });
        console.log(error)
      }
    };   

  return (
    <div>
       <Card className="w-xl mx-auto mt-6 backdrop-blur-lg bg-white/50">
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            {/*  name */}
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">User Name</Label>
                          <Input className='text-green-500' type='text' id="userName" disabled defaultValue={session?.user?.name || ''
                          } {...register("userName")} />
            
                        </div>
                        {/*  email */}
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">User Email</Label>
                          <Input className='text-green-500' type='text' id="userEmail" defaultValue={session?.user?.email || ''
                          } {...register("userEmail")} disabled/>
                        
                        </div>
            {/* food name */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Food Name</Label>
              <Input type='text' id="foodName" placeholder="Food Name" {...register("foodName",{ required: true })} />
              <p> {errors.foodName && <span className='text-red-500'>This field is required</span>}
              </p>

            </div>
            {/* food Image */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" >Food Image Url</Label>
              <Input type='url' id="foodImage" placeholder="Food Image Url" {...register("foodImage",{ required: true })} />
              <p> {errors.foodImage && <span className='text-red-500'>This field is required</span>}
              </p>

            </div>
            {/* Category & price */}
           <div className="flex space-x-4">
            {/* Category */}
           <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="framework">Category</Label>
               <select className='border-[1px] w-full p-1 rounded-md'  {...register("category")}>
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
              <Input type='number' id="price" placeholder="price" {...register("price", { required: true })} />
              {errors.price && <span className='text-red-500'>This field is required</span>}
      
            </div>
           </div>

            <div className="flex flex-col space-y-1.5">
            <div className="grid w-full gap-1.5">
      <Label htmlFor="details">Recipe Details</Label>
      <Textarea placeholder="Recipe Details" id="message" {...register("recipeDetails", { required: true })}/>
      <p> {errors.recipeDetails && <span className='text-red-500'>This field is required</span>}
              </p>
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

export default FoodForm
