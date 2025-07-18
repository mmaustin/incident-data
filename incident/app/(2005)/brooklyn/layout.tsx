/* eslint-disable @typescript-eslint/no-unused-vars */


//import DataContextProvider from "@/providers/dataProvider"
// import DataProvider from '@/components/clientProvider/DataProvider';
// import { incidentData } from '@/utils/actions';
import { ReactNode } from 'react';

// Can't do it in a secondary layout either
const BrooklynLayout = ({children}: {children: ReactNode}) => {

  //const d = incidentData();
  //const dd: object[] = JSON.parse(d);
  //console.log(dd.slice(400,409));

  return (
    // <DataProvider promiseValue={d}>
      <div className="bg-blue-200">
        {children}
      </div>
    // </DataProvider> 
    
  )
}
export default BrooklynLayout