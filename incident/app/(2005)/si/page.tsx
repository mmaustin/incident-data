/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const StatenIslandIncidentsPlots = () => {

  const statenIslandData = useUniversalData("STATEN ISLAND", incidentArray);

  return (
    <div>StatenIslandIncidentsPlots</div>
  )
}
export default StatenIslandIncidentsPlots;