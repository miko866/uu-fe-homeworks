import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { dataFormatter } from '../utils/dataFormatter';


const BarChartComponent = ({ data, title }) => {
  const charData = [];

  data.forEach((item) => {
    charData.push({ name: item['rok'], [title]: item[title] });
  });

  return (
    <ResponsiveContainer height={400}>
      <BarChart height={300} width={700} data={charData}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis YAxis type={'number'} tickFormatter={dataFormatter} />
        <Tooltip />
        <Legend />
        <Bar dataKey={title} fill="#1976d2" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
