import { useBronxData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";


const BronxIncidentsPlots = () => {

  const brooklynData = useBronxData(incidentArray);
  console.log(brooklynData);

  return (
    <div>BronxIncidentsPlots</div>
  )
}
export default BronxIncidentsPlots;