'use client';

import { createContext, ReactNode, useContext, use, useState  } from 'react';

const DataContext = createContext("Awaiting Stringified Data");

const DataProvider = ({children, promiseValue}: {children: ReactNode, promiseValue: Promise<string> }) => {
  const propData = use(promiseValue);

  const [constantData, ] = useState(propData)
  
//console.log(Object.keys(DataContext['_currentValue']));

  return (
    <DataContext value={constantData}>
      {children}
    </DataContext>
  )
}
export default DataProvider;

export const useData = () => useContext(DataContext);