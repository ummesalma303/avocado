"use client"
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'

const SearchInput = () => {
    const [search,setSearch] = useState('')
    const router = useRouter()
    const pathName = usePathname()
    useEffect(() => {
      const searchQuery = {search}
      const urlSearchQuery = new URLSearchParams(searchQuery)
      const url = `${pathName}?${urlSearchQuery}`;
      router.push(url)
    }, [search])
    
  return (
    <div>
         <div className="flex justify-center mx-auto w-full max-w-sm items-center space-x-2">
      <Input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search here" />
      <Button type="submit">Search</Button>
    </div>
    </div>
  )
}

export default SearchInput