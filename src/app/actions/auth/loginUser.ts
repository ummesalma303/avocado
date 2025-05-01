// "use server"

// import dbConnect, { collection } from "@/lib/dbConnect"

// const loginUser = async (playload:unknown) => {
//     const {email, password} = playload
//     console.log(password)
//     const userCollection = dbConnect(collection.users)
//     const user = await userCollection.findOne({email})
    
//     if(!user){
//         return null
//     }else if (user.password !== password) {
//         return null
//     }
//     console.log(user,'-------------------')
//     return user
// }

// export default loginUser



"use server"

import dbConnect, { collection } from "@/lib/dbConnect"

interface LoginPayload {
  email: string;
  password: string;
}

interface User {
  _id: string;
  email: string;
  password: string;
  name?: string;
  photo?: string;
}

const loginUser = async (payload: LoginPayload): Promise<User | null> => {
  const { email, password } = payload;

  const userCollection = dbConnect(collection.users);
  const user = await userCollection.findOne<User>({ email });

  if (!user || user.password !== password) {
    return null;
  }

  return user;
};

export default loginUser;
