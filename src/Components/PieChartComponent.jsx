import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 130 },
  { name: 'Group B', value: 350 },
  { name: 'Group C', value: 400 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 300 },
  { name: 'Group F', value: 250 },
  { name: 'Group G', value: 320 },
];

const COLORS = ['blue', 'red', 'green', 'black' , 'pink' , 'hotpink' , 'lightgreen'];

const PieChartComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen container mx-auto h-96 w-96">
      <PieChart className='flex' width={300} height={400}>
        <Pie
          data={data}
        //   cx={200}
        //   cy={200}
          innerRadius={120}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;