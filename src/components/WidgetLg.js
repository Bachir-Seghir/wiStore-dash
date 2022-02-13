import React from "react";
import styled from "styled-components";
import DataTable from "./DataTable";

const Container = styled.div`
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const WidgetLg = () => {
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <DataTable />
    </Container>
  );
};

export default WidgetLg;
