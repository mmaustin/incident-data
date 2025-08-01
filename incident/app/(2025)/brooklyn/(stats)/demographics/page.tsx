import BrooklynDemoDisplay from "@/components/BrooklynDemoDisplay";
import { incidentData } from "@/utils/actions";

//import { useData } from "@/providers/dataProvider";

const BrooklynDemographics = async() => {

  const data = await incidentData();
  // const parsedData: object[] = JSON.parse(data);
  //console.log(data);
  

  return (
    <BrooklynDemoDisplay dataString={data} />
  )
}
export default BrooklynDemographics;