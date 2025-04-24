import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const middleware = async (req:Request) => {
    const token = await getToken({req})
    console.log('-----------------middleware--------------------',token)
  return NextResponse.next()
}

export default middleware