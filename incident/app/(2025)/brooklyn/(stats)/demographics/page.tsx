import { useRechartsDataMakerDemographics, useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";

const BrooklynDemographics = () => {

  const boroughData = useUniversalData("BROOKLYN", incidentArray);
  const demographicsArray = useRechartsDataMakerDemographics(boroughData);
  console.log(demographicsArray);
  

  return (
    <p></p>
  )
}
export default BrooklynDemographics;