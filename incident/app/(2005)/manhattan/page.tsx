/* eslint-disable @typescript-eslint/no-unused-vars */
import { useManhattanData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const ManhattanIncidentsPlots = () => {

  const manhattanData = useManhattanData(incidentArray);

  return (
    <div>ManhattanIncidentsPlots</div>
  )
}
export default ManhattanIncidentsPlots;