import dbConnect, { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req:Request,{ params }: { params: { id: string } }) {
    const id = params.id;
    // console.log('-----------------5',email)
    const result = await dbConnect(collection.cart).findOne({_id:new ObjectId(id)}); 
    return Response.json(result)
  }


export async function PATCH(req:Request,{ params }: { params: { id: string } }) {
    const id = params.id;
    const body = req.body;
    console.log('-----------------5',body)
    const query = { _id:new ObjectId(id)}
    console.log('-----------------5',query)
    const update = {$set:{...body}}
    const result = await dbConnect(collection.cart).updateOne(query,update); 
    return Response.json(result)
  }