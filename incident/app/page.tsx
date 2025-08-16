
/* eslint-disable @typescript-eslint/no-unused-vars */

import incidentArray from "@/incidentData/incidentArray";

export default async function Home() {

  const mappedData = new Map<string, number>();
  
  const mappedDataMaker = (): Map<string, number> => {
    
    incidentArray.map(d => {
      if(mappedData.has(d.vic_age_group)){
        mappedData.set(d.vic_age_group, mappedData.get(d.vic_age_group) as number +1);
      } else {
        mappedData.set(d.vic_age_group, 1);
      }
    });
    return mappedData;
    
  };
  console.log(mappedDataMaker());
  
  return (
    <div className="bg-amber-200 uppercase h-screen flex flex-col justify-center items-center">
     GRIM DATA REPORT
    </div>
  );
}
