/* eslint-disable @typescript-eslint/no-unused-vars */


//import DataContextProvider from "@/providers/dataProvider"
import { incidentData } from '@/utils/actions';
import { ReactNode } from 'react';

// Can't do it in a secondary layout either
const BrooklynLayout = async ({children}: {children: ReactNode}) => {

  const d = await incidentData();
  const dd: object[] = JSON.parse(d);
  //console.log(dd.slice(400,409));

  return (
    // <DataContextProvider>
      <div className="bg-amber-700">
        {children}
      </div>
    // {/* </DataContextProvider> */}
    
  )
}
export default BrooklynLayout