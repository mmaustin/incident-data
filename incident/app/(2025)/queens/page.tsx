///* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";
import dynamic from "next/dynamic";
import { DataReturn } from "@/types/dataTypes";

const MapProperty = dynamic(
  () => import('@/components/IncidentMapTemplate'),
  { ssr: false }
);


const QueensIncidentsPlots = () => {

  const queensData = useUniversalData("QUEENS", incidentArray);

  const slicedData: Array<DataReturn> = queensData.map((data) => {
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
      <MapProperty data={slicedData} />
    </>
  )
}
export default QueensIncidentsPlots;