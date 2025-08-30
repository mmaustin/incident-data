'use client';
import { useRechartsDataMakerMurder, useUniversalData } from '@/appHooks/hooks';
import incidentArray from '@/incidentData/incidentArray';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { boroughInput } from '@/types/boroughType';


const ChartDisplayMurder = ({borough}: {borough: boroughInput}) => {

  const boroughData = useUniversalData(borough, incidentArray);
  const dataArray = useRechartsDataMakerMurder(boroughData);

  return (
    <div className="h-[500px] w-full flex flex-col justify-center items-center">
      <ResponsiveContainer width='100%' height={300} className='mx-4'>
        <PieChart >
          <Pie
            dataKey="incidents"
            isAnimationActive={false}
            data={dataArray}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default ChartDisplayMurder;