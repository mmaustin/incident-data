'use client'

import { useData } from "@/providers/dataProvider";


const BrooklynDemographics = () => {

  const data = useData();
  // const parsedData: object[] = JSON.parse(data);
  console.log(data);
  

  return (
    <div className="h-screen">BrooklynDemographics</div>
  )
}
export default BrooklynDemographics;