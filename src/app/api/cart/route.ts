import dbConnect, { collection } from "@/lib/dbConnect"
// import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  const body = await req.json() 
  console.log('-----------------5',body,req)
  // const updateDoc ={ $set:{count:1}}
  // const update = await dbConnect(collection.foods).updateOne(updateDoc)
  const result = await dbConnect(collection.cart).insertOne(body); 
//   const updateDoc ={ $inc:{count:1}}
//   const update = await dbConnect(collection.foods).updateOne({ foodId: new ObjectIdId(body.foodId) },updateDoc)
//   console.log(result)
  return Response.json(result)
}