import dbConnect, { collection } from "@/lib/dbConnect"

export async function POST(req: Request) {
  const body = await req.json() 
  console.log('-----------------5',body)

  const result = await dbConnect(collection.users).insertOne(body); 
  return Response.json(result)
}