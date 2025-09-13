'use client';
import incidentArray from '@/incidentData/incidentArray';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { boroughInput } from '@/types/boroughType';
import { useRechartsDataMakerDemographics, useUniversalData } from "@/appHooks/hooks";

const DemographicsAreaChart = ({ borough }: { borough: boroughInput }) => {

  const boroughData = useUniversalData(borough, incidentArray);
  const data = useRechartsDataMakerDemographics(boroughData);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center mt-24">
      <p className='font-extrabold text-2xl'>Bronx Murder Demographics</p>
      <div className="h-full w-full flex flex-wrap justify-center items-center mt-8">

      <div className="h-[210px] w-[45%] flex flex-col justify-center items-center ">
        <p className="font-bold">Victim Demographics</p>
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
            <XAxis dataKey="name" className='text-[6px] font-extrabold' />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="incidents" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="h-[210px] w-[45%] flex flex-col justify-center items-center">
      <p className="font-bold ">Perpetrator Demographics</p>
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
          <XAxis dataKey="name" className='text-[6px] font-extrabold'/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="incidents" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>

    </div>
    </div>
    

  )
}
export default DemographicsAreaChart;