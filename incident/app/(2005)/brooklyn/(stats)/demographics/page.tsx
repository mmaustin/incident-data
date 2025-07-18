import { incidentData } from "@/utils/actions";

//import { useData } from "@/providers/dataProvider";

const BrooklynDemographics = async() => {

  const data = await incidentData();
  // const parsedData: object[] = JSON.parse(data);
  // console.log(data);
  

  return (
    <div className="h-screen">BrooklynDemographics</div>
  )
}
export default BrooklynDemographics;