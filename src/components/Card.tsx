import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export interface Food {
 food:{
   _id: string;
  foodName: string;
  foodImage: string;
  category: string;
  price: string;
  recipeDetails: string;
};
}
// interface CardProps {
//   food: Food;
// }
// const Card= ({ food }:{ food: Food }) => {
const Card: React.FC <Food> = ({ food }) => {
  const { _id, foodName, price, foodImage } = food || {}
  // console.log(food)
    
  return (
    <div className='rounded shadow-md overflow-hidden text-center p-5'>
    <Link href={`/all-foods/${_id}`}>
      {/*  */}
    <div className="h-52">
         <div className="h-32">
         <Image width={260} height={160}
            src={foodImage || "https://organicnutrition.com.bd/cdn/shop/articles/ONL_-_Blog_2048x.progressive.png.jpg?v=1649476918"}
            alt={foodName}
            className="w-full h-full object-cover"
          />
         </div>
        
      <div className="p-4">
        <h2 className="text-sm text-gray-800 font-semibold mb-2">{foodName}</h2>
        <p className="text-amber-500 text-xl font-bold">${price}</p>
      </div>
    </div>
    </Link>
    </div>
  )
}

export default Card
