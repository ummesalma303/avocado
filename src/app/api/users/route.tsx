import dbConnect, { collection } from "@/lib/dbConnect"

export async function POST(req: Request) {
  const body = await req.json() 
  const { email,password} = body || {} 
  console.log('-----------------5',password)
  const user = await dbConnect(collection.users).findOne({ email })
  if (!user) {
    
    const result = await dbConnect(collection.users).insertOne(body); 
    return Response.json(result)
  }   
   else{
    return Response.json(
      { err: "User already exists" },
      { status: 409 }
    );
   };

}