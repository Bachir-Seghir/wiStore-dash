import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userData } from "../dataSeed";
import { userRequest } from "../requestMethod";

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
const Home = ({ admin }) => {
  const [userStats, setUserStats] = useState([]);
  const Months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: Months[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    !admin && navigate("/login");
  }, [admin]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userStats}
        dataKey="Active User"
        grid
        title="Users Analytics"
      />
      <Widgets>
        <WidgetSm />
        <WidgetLg />
      </Widgets>
    </Container>
  );
};

export default Home;
