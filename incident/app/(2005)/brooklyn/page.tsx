///* eslint-disable @typescript-eslint/no-unused-vars */
//'use client';

import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";

const BrooklynIncidentsPlots = () => {
  
  const brooklynData = useUniversalData("BROOKLYN", incidentArray);
  const bd = brooklynData.slice(0,9);

  const slicedData: Array<[number, number] | undefined> = bd.map((data) => {
    if(data){
      return [Number(data.latitude), Number(data.longitude)] as [number, number];
    };
  });

  console.log(slicedData);
  
  

  return (
    <div className="h-screen">BrooklynIncidentsPlots</div>
  )
}
export default BrooklynIncidentsPlots;