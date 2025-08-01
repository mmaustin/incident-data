///* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";
import dynamic from "next/dynamic";

const MapProperty = dynamic(
  () => import('@/components/IncidentMapTemplate'),
  { ssr: false }
);


const BronxIncidentsPlots = () => {

  const bronxData = useUniversalData("BRONX", incidentArray);
  //const bdTemporary = brooklynData.slice(0, 9);

  const slicedData: Array<[number, number]> = bronxData.map((data) => {
    return [Number(data.latitude), Number(data.longitude)] as [number, number];
  });

  return (
    <>
      <MapProperty data={slicedData} />
    </>
  )
}
export default BronxIncidentsPlots;