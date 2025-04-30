"use client"
// import React from 'react'
import { useRouter } from "next/navigation";
import Link from "next/link"
import {
    DropdownMenu,
    // DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { MoreHorizontal} from "lucide-react"

const Cell = ({ id }: { id: string }) => {
    console.log(id)
    const router = useRouter()
    // const food = row.original
// delete data
const handleDelete = async (id:string) => {
console.log(id)
try {
  
  const deleteData = await fetch(`/api/foods/${id}`, {
   method: "DELETE",
 })
  const res= await deleteData.json()
  console.log(res)
  router.refresh();
} catch (error) {
  console.log(error)
}
}
 
return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href={`/cart/${id}`}> Update items</Link></DropdownMenuItem>
        <DropdownMenuItem onClick={()=>handleDelete(id)} className="text-red-500"> Delete items</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Cell