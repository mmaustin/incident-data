'use client';
import incidentArray from '@/incidentData/incidentArray';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { boroughInput } from '@/types/boroughType';
import { useRechartsDataMakerDemographics, useUniversalData } from "@/appHooks/hooks";

const DemographicsAreaChart = ({borough}: {borough: boroughInput}) => {

  const boroughData = useUniversalData(borough, incidentArray);
  const demographicsArray = useRechartsDataMakerDemographics(boroughData);

  return (
    <div>DemographicsAreaChart</div>
  )
}
export default DemographicsAreaChart;