import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethod";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
`;
const FeaturedItem = styled.div`
  flex: 1;
  padding: 30px 20px;
  border-radius: 6px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedMoneyCont = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;

  & svg {
    margin-left: 6px;
    font-size: 20px;
  }
`;
const FeaturedSub = styled.span`
  font-size: 16px;
  color: grey;
`;

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  return (
    <Container>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyCont>
          <FeaturedMoney>${income[1]?.total}</FeaturedMoney>
          <FeaturedMoneyRate>
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward style={{ color: "red" }} />
            ) : (
              <ArrowUpward style={{ color: "#00d500" }} />
            )}
          </FeaturedMoneyRate>
        </FeaturedMoneyCont>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyCont>
          <FeaturedMoney>$1,400</FeaturedMoney>
          <FeaturedMoneyRate>
            -1,40
            <ArrowDownward style={{ color: "red" }} />
          </FeaturedMoneyRate>
        </FeaturedMoneyCont>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Costs</FeaturedTitle>
        <FeaturedMoneyCont>
          <FeaturedMoney>$4,400</FeaturedMoney>
          <FeaturedMoneyRate>
            +2,40
            <ArrowUpward style={{ color: "#00d500" }} />
          </FeaturedMoneyRate>
        </FeaturedMoneyCont>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
    </Container>
  );
};

export default FeaturedInfo;
