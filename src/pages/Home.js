import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userData, users } from "../dataSeed";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
const Widgets = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 15px;
`;
const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        dataKey="Active User"
        grid
        title="Users Analytics"
      />
      <Widgets>
        <WidgetSm data={users} />
        <WidgetLg />
      </Widgets>
    </Container>
  );
};

export default Home;
