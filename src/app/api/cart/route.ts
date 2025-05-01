import dbConnect, { collection } from "@/lib/dbConnect"
// import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const body = await req.json() 
  console.log('-----------------5',body,req)
  
  const result = await dbConnect(collection.cart).insertOne(body); 
  return Response.json(result)
}