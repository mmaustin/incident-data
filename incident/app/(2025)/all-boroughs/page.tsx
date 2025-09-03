///* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import incidentArray from "@/incidentData/incidentArray";
import dynamic from "next/dynamic";
import { DataReturn } from "@/types/dataTypes";

const MapProperty = dynamic(
  () => import('@/components/IncidentMapTemplate'),
  { ssr: false }
);


const AllBoroughs = () => {

  const allBoroughData: Array<DataReturn> = incidentArray.map((data) => {
    return {
      coordinates: [Number(data.latitude), Number(data.longitude)] as [number, number],
      murderOutcome: data.statistical_murder_flag,
      ageGroup: data.vic_age_group,
      race: data.vic_race,
      sex: data.vic_sex,
    }
  });
  

  return (
    <>
      <MapProperty data={allBoroughData} />
    </>
  )
}
export default AllBoroughs;