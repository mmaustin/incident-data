'use client';

//import DataContextProvider from "@/providers/dataProvider"
import { ReactNode } from 'react';

// Can't do it in a secondary layout either
const BrooklynLayout = ({children}: {children: ReactNode}) => {
  return (
    // <DataContextProvider>
      <div className="">
        {children}
      </div>
    // {/* </DataContextProvider> */}
    
  )
}
export default BrooklynLayout