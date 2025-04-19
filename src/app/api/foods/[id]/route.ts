import dbConnect, { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const id = await params;
    console.log('-----------------5',id)
    const result = await dbConnect(collection.foods).find({_id: new ObjectId(id)}).toArray(); 
    return Response.json(result)
  }
  