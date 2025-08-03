/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { incidentData } from "@/utils/actions";
import { createContext, ReactNode, useContext, use } from "react";

// Error: Server Functions cannot be called during initial render.
const DataContext = createContext("Awaiting Stringified Data");

const DataContextProvider = ({children, promiseValue}: {children:ReactNode, promiseValue: Promise<string>}) => {

  // const data = incidentData();
  const unwrappedData = use(promiseValue);
  // console.log(unwrappedData.length);
  

  return (
    <DataContext value={unwrappedData}>
      {children} {promiseValue}
    </DataContext>
  )
}
export default DataContextProvider;

export const useData = () => useContext(DataContext);