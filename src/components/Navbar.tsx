"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { IoMdMenu } from "react-icons/io";
import { signOut, useSession } from 'next-auth/react'


const Navbar = () => {
  const {data, status} = useSession()
  // console.log(status)
  return (
    <div className='w-full py-5 sticky top-0 backdrop-blur-lg z-10'>
      <div className="w-11/12 mx-auto flex justify-between items-center">
      
      <div className="flex items-center space-x-1.5n">
         {/* mobile menu */}
         <div className="md:hidden mr-1.5">
         <DropdownMenu>
  <DropdownMenuTrigger><Button variant="outline"><IoMdMenu />
  </Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href='/'>Home</Link></DropdownMenuItem>
   
      {
        status === 'authenticated' &&<>
         <DropdownMenuItem><Link href='/add-foods'>Add Foods</Link> </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href='/cart'>Cart</Link></DropdownMenuItem>

        </>
      } 
      
     
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href='/all-foods'>All Foods</Link></DropdownMenuItem>
    <DropdownMenuSeparator />
    
  </DropdownMenuContent>
</DropdownMenu>

         </div>
        <Image src='/assets/icon-3.png' width={40} height={40} alt='avocado' />
        <h2 className='text-2xl font-bold'>Avocado</h2>
      </div>

    {/* desktop menu */}

      <div className="hidden md:flex space-x-3">
      
        <Link href='/'>Home</Link>
        {
        status === 'authenticated' &&<>
         <Link href='/add-foods'>Add Foods</Link> 
       <Link href='/cart'>Cart</Link>

        </>
      } 
      
        <Link href='/all-foods'>All Foods</Link>
        
      </div>

      <div className="flex space-x-2">
        {
          status === 'authenticated'?
          <>
          <Button onClick={()=>signOut()}>Sign Out</Button>
          <Avatar>
      <AvatarImage src={data?`${data?.user?.photo}`:""} alt="@foods" />
      <AvatarFallback>N/A</AvatarFallback>
    </Avatar>
          </>:<> 
        <Link href='/sign-up'><Button>Sign Up</Button></Link>
        <Link href='/sign-in'><Button>Sign In</Button></Link></>
        }
       
        
      
       
     
      </div>
      </div>
    </div>
  )
}

export default Navbar