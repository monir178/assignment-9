import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  const quizesData = useLoaderData();
  const {data} = quizesData;
  const [{name, total, id}] = data;
  console.log(name, id, total)


  return (
  
    <div>
    <h2 className='text-4xl text-gray-600 text-center font-semibold mb-12 mt-4 mx-auto w-3/4'>This Stats is about the total number of quizes of the topics.</h2> 
      <ResponsiveContainer width="80%" height="80%" aspect={2}>
    <ComposedChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="total" barSize={60} fill="#413ea0" />
      <Line type="monotone" dataKey="total" stroke="#ff7300" />
    </ComposedChart>
  </ResponsiveContainer>
    </div>
 
  );
};

export default Statistics;
