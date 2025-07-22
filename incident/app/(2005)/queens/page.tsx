/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQueensData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const QueensIncidentsPlots = () => {

  const queensData = useQueensData(incidentArray);

  return (
    <div>QueensIncidentsPlots</div>
  )
}
export default QueensIncidentsPlots;