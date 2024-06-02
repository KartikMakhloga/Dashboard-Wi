import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const IPScatterPlot = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="category" dataKey="srcIP" name="Source IP" />
        <YAxis type="category" dataKey="destIP" name="Destination IP" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="IP Events" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default IPScatterPlot;
