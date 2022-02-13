import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  Dashboard,
  DynamicFeed,
  MailOutline,
  PersonOutline,
  Store,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: calc(100vh - 80px);
  position: sticky;
  top: 80px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Title = styled.h4`
  margin-bottom: 10px;
  color: #b7b7b7;
`;
const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  list-style: none;
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 0;
  color: ${(props) => (props.active ? "teal" : "#555")};
  &:hover {
    color: teal;
  }
  & svg {
    margin-right: 10px;
  }
  border-bottom: ${(props) => props.active && "2px solid teal"};
`;
const Sidebar = () => {
  return (
    <Container>
      <Section>
        <Title>Dashboard</Title>
        <SidebarList>
          <Link to="/">
            <MenuItem active>
              <Dashboard />
              Home
            </MenuItem>
          </Link>
          <MenuItem>
            <Timeline />
            Analytics
          </MenuItem>
          <MenuItem>
            <TrendingUp />
            Sales
          </MenuItem>
        </SidebarList>
      </Section>
      <Section>
        <Title>Quik Menu</Title>
        <SidebarList>
          <Link to="/users">
            <MenuItem>
              <PersonOutline />
              Users
            </MenuItem>
          </Link>
          <Link to="/products">
            <MenuItem>
              <Store />
              Products
            </MenuItem>
          </Link>

          <MenuItem>
            <AttachMoney />
            Transactions
          </MenuItem>
          <MenuItem>
            <BarChart />
            Reports
          </MenuItem>
        </SidebarList>
      </Section>
      <Section>
        <Title>Notifications</Title>
        <SidebarList>
          <MenuItem>
            <MailOutline />
            Mail
          </MenuItem>
          <MenuItem>
            <DynamicFeed />
            Feedback
          </MenuItem>
          <MenuItem>
            <ChatBubbleOutline />
            Messages
          </MenuItem>
        </SidebarList>
      </Section>
    </Container>
  );
};

export default Sidebar;
