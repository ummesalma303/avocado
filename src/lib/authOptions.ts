import CredentialsProvider from "next-auth/providers/credentials";
import loginUser from "@/app/actions/auth/loginUser";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

interface User {
  name: string
  photo: string
}

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          async authorize(credentials): Promise<any | null> {
            if (!credentials) return null;
              const user = await loginUser(credentials)
              console.log('------24',JSON.stringify(credentials))
            if (user) {
              return user
            } else {
              return null
            }
          }
        })
      ],
      pages: {
        signIn: '/sign-in',
      },

      callbacks: {
        async session({
          session,
          token,
        }: {
          session: Session;
          token: JWT;
        }) {
          console.log("---------jjjjjjjjjjj-------------",JSON.stringify(session))
          if (token &&  session.user){
            session.user.name = token.name
            session.user.photo = token.photo
          }
          return session
        },
        async jwt({ token, user }: { token: User, user?: User }) {

          if (user){
            token.name = user.name
            token.photo =user.photo
          }
          return token
        }
      }
  }