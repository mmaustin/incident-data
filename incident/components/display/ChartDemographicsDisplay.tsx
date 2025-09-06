'use client';
import { useRechartsDataMakerDemographics, useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";
import { boroughInput } from "@/types/boroughType";

const ChartDemographicsDisplay = ({borough}: {borough: boroughInput}) => {

  const boroughData = useUniversalData(borough, incidentArray);
  const demographicsArray = useRechartsDataMakerDemographics(boroughData);

  return (
    <div>
      {demographicsArray.length}
    </div>
  )
}
export default ChartDemographicsDisplay