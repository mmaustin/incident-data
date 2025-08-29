'use client';
import { useRechartsDataMaker, useUniversalData } from '@/appHooks/hooks';
import incidentArray from '@/incidentData/incidentArray';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


const ChartDisplay = () => {

  const boroughData = useUniversalData("BROOKLYN", incidentArray);
  const dataArray = useRechartsDataMaker(boroughData);

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
export default ChartDisplay;