///* eslint-disable @typescript-eslint/no-unused-vars */
import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const BronxIncidentsPlots = () => {

  const bronxData = useUniversalData("BRONX", incidentArray)
  console.log(bronxData.length);

  return (
    <div>BronxIncidentsPlots</div>
  )
}
export default BronxIncidentsPlots;