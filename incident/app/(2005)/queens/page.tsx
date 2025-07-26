/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const QueensIncidentsPlots = () => {

  const queensData = useUniversalData("QUEENS", incidentArray);

  return (
    <div>QueensIncidentsPlots</div>
  )
}
export default QueensIncidentsPlots;