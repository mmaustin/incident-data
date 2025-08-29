'use client';
import { useRechartsDataMaker, useUniversalData } from '@/appHooks/hooks';
import incidentArray from '@/incidentData/incidentArray';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


const DemoChartDisplay = () => {

  const boroughData = useUniversalData("BROOKLYN", incidentArray);
  const dataArray = useRechartsDataMaker(boroughData);

  return (
    <div className="h-[500px] w-full flex flex-col justify-center items-center border-2 border-amber-300">
      <p>what the what</p>
      <ResponsiveContainer width='100%' height={300} className='mx-4 border-2'>
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
export default DemoChartDisplay;