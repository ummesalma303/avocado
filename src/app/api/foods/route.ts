import dbConnect, { collection } from "@/lib/dbConnect"

export async function POST(req: Request) {
  const body = await req.json() 
  console.log('-----------------5--------------',body)
  // const updateDoc ={ $set:{count:1}}
  // const update = await dbConnect(collection.foods).updateOne(updateDoc)
  const result = await dbConnect(collection.foods).insertOne(body); 
  return Response.json(result)
}



  export async function GET(req:Request) {
    // const search = req.query.search
    const url = new URL(req.url)
    const search = url.searchParams.get('search')
    console.log('------------15------------', search)
    let query = {}
    if (search) {
      query = { foodName: { $regex: search, $options: "i" } };
    }
    const result = await dbConnect(collection.foods).find(query).toArray()
    console.log(result)
    return Response.json(result);
  }
