'use client';
import { useRechartsDataMakerDemographics, useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";
import { boroughInput } from "@/types/boroughType";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const ChartDemographicsDisplay = ({ borough }: { borough: boroughInput }) => {

  const boroughData = useUniversalData(borough, incidentArray);
  const demographicsArray = useRechartsDataMakerDemographics(boroughData);
  console.log(demographicsArray[0]);


  return (
    <div className="h-[500px] w-full flex flex-col justify-center items-center">
      <ResponsiveContainer width="100%" height={300} >
        <PieChart >
          <Pie data={demographicsArray[0]} dataKey="incidents" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={demographicsArray[1]} dataKey="incidents" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default ChartDemographicsDisplay