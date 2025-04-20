// import { DataTable } from '@/components/DataTable'
import dbConnect, { collection } from '@/lib/dbConnect'
import React from 'react'

const AllUsers = async() => {
    const users = await dbConnect(collection.users).find().toArray()
    console.log(users)
  return (
    <div>
      {/* <DataTable users={users}/> */}
    </div>
  )
}

export default AllUsers
