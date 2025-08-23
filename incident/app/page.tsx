
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import incidentArray from "@/incidentData/incidentArray";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


// Map(6) {
//   '45-64' => 47,
//   '18-24' => 109,
//   '25-44' => 220,
//   '<18' => 58,
//   '65+' => 4,
//   'UNKNOWN' => 1
// }


const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

type DataIncidentType = { name: string, incidents: number };


type ChartDataIncidentType = Array<DataIncidentType>;

export default function Home() {  

  const mappedData = new Map<string, number>();

  const arr: DataIncidentType[] = [];

  const mappedDataMaker = (): void => {

    incidentArray.map(d => {
      if (mappedData.has(d.vic_age_group)) {
        mappedData.set(d.vic_age_group, mappedData.get(d.vic_age_group) as number + 1);
      } else {
        mappedData.set(d.vic_age_group, 1);
      }
    });
    for (const [key, value] of mappedData) {
      arr.push({ name: key, incidents: value });
    };

  };
  mappedDataMaker();

  //console.log(arr);


  return (
    <div className="h-[500px] w-full flex flex-col justify-center items-center border-2 border-amber-300">
      <p>what the what</p>
      <ResponsiveContainer width='100%' height={300} className='mx-4 border-2'>
        <PieChart >
          <Pie
            dataKey="incidents"
            isAnimationActive={false}
            data={arr}
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
  );
}
