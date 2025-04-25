import { NextRequest } from 'next/server'
import dbConnect, { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req:Request,{ params }: { params: { email: string } }) {
    const email = params.email;
    console.log('-----------------5',email)
    const result = await dbConnect(collection.foods).find({email}).toArray(); 
    return Response.json(result)
  }



  export async function DELETE(req:NextRequest,{ params }: { params: { id: string } }) {
    const id = params.id
    
    console.log('------------15------------', id)
    const result = await dbConnect(collection.foods).deleteOne({ _id: new ObjectId(id) })
    return Response.json(result);
  }