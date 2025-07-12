// /* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { createContext, ReactNode, useContext } from "react";


const NumberContext = createContext(5);

const NumberContextProvider = ({children}: {children:ReactNode}) => {

  return (
    <NumberContext value={5}>
      {children}
    </NumberContext>
  )
}
export default NumberContextProvider;

export const useNumber = () => useContext(NumberContext);