import Image from 'next/image'
import React from 'react'
import DetailButton from './DetailButton';
// import { Button } from './ui/button';
interface DetailsProp {
    foodDetails:{
        _id: string;
       foodName: string;
       foodImage: string;
       category: string;
       price: string;
       recipeDetails: string;
     };
}
const DetailsCard:React.FC <DetailsProp> = ({foodDetails}) => {
    const { _id, foodName, price, foodImage, category, recipeDetails} = foodDetails ||{}

  
  return (
    <div className='flex space-x-5'>
      <div className="w-1/2">
         <Image width={90} height={40}
                    src={foodImage || "https://organicnutrition.com.bd/cdn/shop/articles/ONL_-_Blog_2048x.progressive.png.jpg?v=1649476918"}
                    alt={foodName||"N/A"}
                    className="w-full h-full object-cover"
                  />
      </div>
      <div className="">
        <h2 className="text-lg text-gray-800 font-semibold mb-2">Food Name: {foodName || 'N/A'}</h2>
        <p className="text-green-600 text-4xl font-bold mb-4">Price: ${price}</p>
        <h3>Category: {category }</h3>
        <p>Details:{recipeDetails}</p>

        <div className="">
           <DetailButton foodDetails={foodDetails} id={_id}></DetailButton>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
