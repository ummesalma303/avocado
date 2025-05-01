import dbConnect, { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req:Request,{ params }:{ params: Promise<{ id: string }> }) {
    const {id} = await params;
    // console.log('-----------------5',email)
    const result = await dbConnect(collection.cart).findOne({_id:new ObjectId(id)}); 
    return Response.json(result)
  }


export async function PATCH(req:Request,{ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await req.json();
    console.log('----------------- body ---------',body)
    const query = { _id:new ObjectId(id)}
    console.log('-----------------5',query)
    const filter = {$set:{...body}}
    const option = {
      upsert: true
  }
    const result = await dbConnect(collection.cart).updateOne(query,filter,option);
    console.log(result) 
    return Response.json(result)
  }