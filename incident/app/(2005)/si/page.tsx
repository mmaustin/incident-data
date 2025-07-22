/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSIData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const StatenIslandIncidentsPlots = () => {

  const statenIslandData = useSIData(incidentArray);

  return (
    <div>StatenIslandIncidentsPlots</div>
  )
}
export default StatenIslandIncidentsPlots;