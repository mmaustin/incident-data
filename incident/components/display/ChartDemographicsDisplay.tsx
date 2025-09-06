'use client';
import { useRechartsDataMakerDemographics, useUniversalData } from "@/appHooks/hooks";
import incidentArray from "@/incidentData/incidentArray";
import { boroughInput } from "@/types/boroughType";
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const ChartDemographicsDisplay = ({borough}: {borough: boroughInput}) => {

  const boroughData = useUniversalData(borough, incidentArray);
  const demographicsArray = useRechartsDataMakerDemographics(boroughData);

  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie data={demographicsArray[0]} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
      <Pie data={demographicsArray[1]} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
    </PieChart>
  </ResponsiveContainer>
  )
}
export default ChartDemographicsDisplay