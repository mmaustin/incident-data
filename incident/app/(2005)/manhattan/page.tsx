/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const ManhattanIncidentsPlots = () => {

  const manhattanData = useUniversalData("MANHATTAN", incidentArray);

  return (
    <div>ManhattanIncidentsPlots</div>
  )
}
export default ManhattanIncidentsPlots;