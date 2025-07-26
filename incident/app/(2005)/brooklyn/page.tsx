///* eslint-disable @typescript-eslint/no-unused-vars */
//'use client';

import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";

const BrooklynIncidentsPlots = () => {
  
  const brooklynData = useUniversalData("BROOKLYN", incidentArray);
  console.log(brooklynData);
  

  return (
    <div className="h-screen">BrooklynIncidentsPlots</div>
  )
}
export default BrooklynIncidentsPlots;