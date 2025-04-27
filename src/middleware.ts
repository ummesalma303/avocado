import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

const middleware = async (req:Request) => {
    const token = await getToken({req})
    // console.log('-----------------middleware--------------------',token)
    if (token) {
      return NextResponse.next()
    }else{
      return NextResponse.redirect(new URL("/sign-up", req.url))
    }
}

export const config = { matcher: ["/add-foods"] }

export default middleware