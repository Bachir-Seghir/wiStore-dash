import React from "react";
import { NotificationsNone, Settings } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/WI-logo.png";

import { mobile } from "../responsive";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: white;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px",
  })}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  img {
    width: 100%;
  }
  ${mobile({
    width: "60px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    color: teal;
  }
  & div {
    border: 1px solid #ddd;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <img src={LogoImg} alt="without issues logo" />
          </Logo>
        </Left>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="warning">
              <NotificationsNone />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Settings />
            </Badge>
          </MenuItem>
          <MenuItem type="avatar">
            <Avatar alt="without issues" src={LogoImg} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
