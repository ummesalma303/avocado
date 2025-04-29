import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-banner-error bg-[url(https://static.vecteezy.com/system/resources/thumbnails/013/076/891/small_2x/error-page-not-found-vector.jpg)] w-full h-screen">
    <div className="flex justify-center items-center h-full">
        <div className="text-white text-center">
    {/* <h2 className='text-5xl'>Data Not Found</h2> */}
    
    <Link href='/'><Button>Go Back</Button></Link>
        </div>
    </div>
</div>
  )
}