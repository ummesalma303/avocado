import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Food {
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
    <div className=''>
    <Link href={`/all-foods/${_id}`}>
    <div className="  rounded shadow-md overflow-hidden text-center">
      {/*  */}
    <div className="">
          <Image width={90} height={40}
            src={foodImage || "https://organicnutrition.com.bd/cdn/shop/articles/ONL_-_Blog_2048x.progressive.png.jpg?v=1649476918"}
            alt={foodName||"Papaya"}
            className="w-full h-full object-cover"
          />
        
    {/* icon */}
          <div className="">

          </div>
    </div>
      <div className="p-4">
        <h2 className="text-sm text-gray-800 font-semibold mb-2">fghmf {foodName}</h2>
        <p className="text-green-600 text-xl font-bold">${price}</p>
      </div>
    </div>
    </Link>
    </div>
  )
}

export default Card
