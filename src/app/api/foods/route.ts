import dbConnect, { collection } from "@/lib/dbConnect"

export async function POST(req: Request) {
  const body = await req.json() 
  console.log('-----------------5',body)
  // const updateDoc ={ $set:{count:1}}
  // const update = await dbConnect(collection.foods).updateOne(updateDoc)
  const result = await dbConnect(collection.foods).insertOne(body); 
  return Response.json(result)
}