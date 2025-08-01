///* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import incidentArray from "@/incidentData/incidentArray";
import dynamic from "next/dynamic";

const MapProperty = dynamic(
  () => import('@/components/IncidentMapTemplate'),
  { ssr: false }
);


const AllBoroughs = () => {

  const allBoroughData: Array<[number, number]> = incidentArray.map((data) => {
    return [Number(data.latitude), Number(data.longitude)] as [number, number];
  });
  console.log(allBoroughData.length);
  

  return (
    <>
      <MapProperty data={allBoroughData} />
    </>
  )
}
export default AllBoroughs;