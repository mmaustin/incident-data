
/* eslint-disable @typescript-eslint/no-unused-vars */

import incidentArray from "@/incidentData/incidentArray";

// import DataProvider from "@/components/clientProvider/DataProvider";
//import { incidentData } from "@/utils/actions";
// import { ReactNode } from "react";

export default async function Home() {
//   const mapIt = () => {
//     data.map(d => {
//         if(holder.has(d.vic_age_group)){
//             holder.set(d.vic_age_group, holder.get(d.vic_age_group)+1)
//         } else {
//             holder.set(d.vic_age_group, 1);
//         }
//     });
//     console.log(holder)
// };

  const mappedData = new Map();
  
  const mappedDataMaker = () => {
    
    incidentArray.map(d => {
      if(mappedData.has(d.vic_age_group)){
        mappedData.set(d.vic_age_group, mappedData.get(d.vic_age_group)+1);
      } else {
        mappedData.set(d.vic_age_group, 1);
      }
    });
    console.log(mappedData);
    
  };
  mappedDataMaker()
  
  return (
    <div className="bg-amber-200 uppercase h-screen flex flex-col justify-center items-center">
     GRIM DATA REPORT
    </div>
  );
}
