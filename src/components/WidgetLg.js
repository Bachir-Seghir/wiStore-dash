import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethod";
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
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <DataTable data={orders} />
    </Container>
  );
};

export default WidgetLg;
