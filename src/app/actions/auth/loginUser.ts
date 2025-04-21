"use server"

import dbConnect, { collection } from "@/lib/dbConnect"

const loginUser = async (playload:object) => {
    const {email, password} = playload
    console.log(password)
    const userCollection = dbConnect(collection.users)
    const user = await userCollection.findOne({email})
    
    if(!user){
        return null
    }else if (user.password !== password) {
        return null
    }
    console.log(user,'-------------------')
    return user
}

export default loginUser
