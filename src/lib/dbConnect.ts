import { MongoClient, ServerApiVersion } from 'mongodb';

export const collection = {
    users: "user",
    cart: "cart",
    foods: "foods"
}
const dbConnect = (collectionName:string) => {
    console.log(collectionName)
    const uri = process.env.MONGO_URI as string;
    console.log(uri)
    // const uri = 'mongodb+srv://ImageGalleryUser:4O58hOYRV7TBdU92@cluster0.ot76b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
   
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
    });
    return client.db(process.env.DB_COLLECTION).collection(collectionName)
}

export default dbConnect
