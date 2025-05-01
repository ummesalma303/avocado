import dbConnect, { collection } from "@/lib/dbConnect";

export async function GET() {
  try {
  
    const result = await dbConnect(collection.foods).find().limit(6).toArray();
    // console.log(result);
    return Response.json(result);
  } catch (error) {
    console.error("Error fetching foods:", error);
    return Response.json([]);
  }
}
