import { getToken, JWT } from "next-auth/jwt"
import { NextResponse, NextRequest } from "next/server"

const middleware = async (req:NextRequest) => {
    const token: JWT | null = await getToken({req})
    console.log('-----------------middleware--------------------',token)
    if (token) {
      return NextResponse.next()
    }else{
      return NextResponse.redirect(new URL("/sign-up", req.url))
    }
}

export const config = { matcher: ["/add-foods",'/cart'] }

export default middleware