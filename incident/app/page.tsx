
/* eslint-disable @typescript-eslint/no-unused-vars */

import incidentArray from "@/incidentData/incidentArray";

// Map(6) {
//   '45-64' => 47,
//   '18-24' => 109,
//   '25-44' => 220,
//   '<18' => 58,
//   '65+' => 4,
//   'UNKNOWN' => 1
// }

type DataIncidentType = {
  name: string,
  incidents: number
}

type ChartDataIncidentType = Array<DataIncidentType>;

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
