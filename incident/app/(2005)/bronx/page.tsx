import { useBronxData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const BronxIncidentsPlots = () => {

  const bronxData = useBronxData(incidentArray);
  console.log(bronxData);

  return (
    <div>BronxIncidentsPlots</div>
  )
}
export default BronxIncidentsPlots;