import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
`;
const ChartTitle = styled.h3`
  margin-bottom: 20px;
`;
const Chart = ({ data, grid, title, dataKey }) => {
  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#eee" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
