'use client';

import { createContext, ReactNode, useContext, use  } from 'react';

const DataContext = createContext("Awaiting Stringified Data");

const DataProvider = ({children, promiseValue}: {children: ReactNode, promiseValue: Promise<string> }) => {
  const propData = use(promiseValue);

  return (
    <DataContext value={propData}>
      {children}
    </DataContext>
  )
}
export default DataProvider;

export const useData = () => useContext(DataContext);