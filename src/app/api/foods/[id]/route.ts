import { NextRequest } from 'next/server'
import dbConnect, { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";



  export async function DELETE(req:NextRequest,{ params }: { params: { id: string } }) {
    const id = params.id
    
    console.log('------------15------------', id)
    const result = await dbConnect(collection.cart).deleteOne({ _id: new ObjectId(id) })
    console.log(result)
    return Response.json(result);
  }