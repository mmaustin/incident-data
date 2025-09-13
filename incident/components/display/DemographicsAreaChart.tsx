'use client';
import incidentArray from '@/incidentData/incidentArray';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { boroughInput } from '@/types/boroughType';
import { useRechartsDataMakerDemographics, useUniversalData } from "@/appHooks/hooks";

const DemographicsAreaChart = ({ borough }: { borough: boroughInput }) => {

  const boroughData = useUniversalData(borough, incidentArray);
  const data = useRechartsDataMakerDemographics(boroughData);

  return (
    <div className="h-full">

      <div className="h-[310px] w-[95%] flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data[0]}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="incidents" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="h-[310px] w-[95%] flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data[1]}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="incidents" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>

  )
}
export default DemographicsAreaChart;