import { MongoClient, ServerApiVersion } from 'mongodb';

export const collection = {
    users: "user",
    foods: "foods"
}
const dbConnect = (collectionName:string) => {
    console.log(collectionName)
    // const uri = process.env.MONGO_URI;
    const uri = 'mongodb+srv://ImageGalleryUser:4O58hOYRV7TBdU92@cluster0.ot76b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
