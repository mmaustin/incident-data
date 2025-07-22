///* eslint-disable @typescript-eslint/no-unused-vars */
//'use client';

import { useBrooklynData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";

const BrooklynIncidentsPlots = () => {
  
  const brooklynData = useBrooklynData(incidentArray);
  console.log(brooklynData);
  

  return (
    <div className="h-screen">BrooklynIncidentsPlots</div>
  )
}
export default BrooklynIncidentsPlots;