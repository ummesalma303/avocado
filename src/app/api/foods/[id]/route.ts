import { NextRequest } from 'next/server'
import dbConnect, { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";



  // export async function GET(req:NextRequest) {
  //   const search = req.query.search
    
  //   console.log('------------15------------', search)
  //   let query = {}
  //   if (search) {
  //     query = {foodName:${regex:search,$options:"i"}}
  //   }
  //   const result = await dbConnect(collection.cart).deleteOne({ _id: new ObjectId(id) })
  //   console.log(result)
  //   return Response.json(result);
  // }

  export async function DELETE(req:NextRequest,{ params }:{ params: Promise<{ id: string }> }) {
    const {id} = await params
    
    console.log('------------15------------', id)
    const result = await dbConnect(collection.cart).deleteOne({ _id: new ObjectId(id) })
    console.log(result)
    return Response.json(result);
  }