import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import loginUser from "@/app/actions/auth/loginUser";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

interface User {
  name: string
  photo: string
}
interface CustomSession extends Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    photo?: string | null; // ✅ custom property
  }
}
export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "Email", type: "text", placeholder: "xyz@gmail.com" },
            password: { label: "Password", type: "password" }
          },

          // async authorize(credentials): Promise<any | null> {
          //   if (!credentials) return null;
          //     const user = await loginUser(credentials)
          //     console.log('------24',JSON.stringify(credentials))
          //   if (user) {
          //     return user
          //   } else {
          //     return null
          //   }
          // }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          async authorize(credentials): Promise<any | null> {
            if (!credentials) return null;
          
            const user = await loginUser({
              email: credentials.username,
              password: credentials.password,
            });
          
            console.log('------24', JSON.stringify(credentials));
          
            return user ?? null;
          }
        })
      ],
      pages: {
        signIn: '/sign-in',
      },

      // callbacks: {
      //   async session({
      //     session,
      //     token,
      //   }: {
      //     session: CustomSession;
      //     token: JWT;
      //   }) {
      //     // console.log("---------jjjjjjjjjjj-------------",JSON.stringify(session))
      //     if (token &&  session.user){
      //       session.user.name = token.name
      //       session.user.photo = token.photo as string | null;
      //     }
      //     return session
      //   },
      //   async jwt({ token, user }: { token: User, user?: User }) {

      //     if (user){
      //       token.name = user.name
      //       token.photo =user.photo
      //     }
      //     return token
      //   }
      // }
      callbacks: {
        async session({ session, token }: { session: CustomSession; token: JWT }) {
          if (session.user && token) {
            session.user.name = token.name;
            session.user.photo = token.photo as string | null;
          }
          return session;
        },
        async jwt({ token, user }: { token: JWT; user?: User }) {
          if (user) {
            token.name = user.name;
            token.photo = user.photo;
          }
          return token;
        }
      }
      
  }
