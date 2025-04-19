"use client"
import React, { createContext, ReactNode, useState } from 'react';

export const DataContext = createContext<string | null>(null);

interface DataProviderProps {
  children: ReactNode;
}
interface Food {
  food:{
    _id: string;
   foodName: string;
   foodImage: string;
   category: string;
   price: string;
   recipeDetails: string;
 }[]
 }
 
const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data,setData] = useState<Food>([]) 
  // console.log(data)
  const info={
    data,setData
  }
  return (
    <DataContext.Provider value={info}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
