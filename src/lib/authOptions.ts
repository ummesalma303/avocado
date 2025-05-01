// import CredentialsProvider from "next-auth/providers/credentials";
//  import loginUser from "@/app/actions/auth/loginUser";
// import { NextAuthOptions } from "next-auth";
 
//  export const authOptions:NextAuthOptions = {
     
//      providers: [
//          CredentialsProvider({
          
//            name: "Credentials",
         
//            credentials: {
//              username: { label: "Username", type: "text", placeholder: "jsmith" },
//              password: { label: "Password", type: "password" }
//            },
//            async authorize(credentials): Promise<any | null> {
               
//                const user = await loginUser(credentials)
//                console.log('------24',user)
//              if (user) {
               
//                return user
//              } else {
             
//                return null
       
//              }
//            }
//          })
//        ],
//        pages: {
//          signIn: '/sign-in',
//        },
 
//        callbacks: {
//          async session({ session, token }) {
         
//            if (token){
//              session.user.name = token.name
//              session.user.image = token.image
//            }
//            return session
//          },
//          async jwt({ token, user }) {
 
//            if (user){
//              token.name = user.name
//              token.image =user.image
//            }
//            return token
//          }
//        }
//    }










import CredentialsProvider from "next-auth/providers/credentials";
 import loginUser from "@/app/actions/auth/loginUser";
import { NextAuthOptions } from "next-auth";
 


export interface UserProp {
  name: string
  email: string
  password: string
  image: string
}

 export const authOptions:NextAuthOptions = {
     
     providers: [
         CredentialsProvider({
          
           name: "Credentials",
         
           credentials: {
             email: { label: "email", type: "email", placeholder: "jsmith@gmail.com" },
             password: { label: "Password", type: "password" }
           },
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
           async authorize(credentials): Promise<any | null> {
            if (!credentials) return null;

               const user = await loginUser(credentials)
               console.log('------24',user)
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
         async session({ session, token }) {
         console.log('----------111',session.user)
           if (token && session.user){
             session.user.name = token.name
            //  session.user.image: string | null | undefined = token.image
            session.user.image = token.image as string | null | undefined;

           }

           return session
         },
         async jwt({ token, user }) {
 
           if (user){
             token.name = user.name
             token.image =user.image
           }
           return token
         }
       }
   }

