import React from "react";
import styled from "styled-components";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  CalendarToday,
  GpsFixed,
  MailOutline,
  PersonOutline,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Container = styled.div`
  padding: 20px;
`;
const Top = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 15px;
`;
const Left = styled.div`
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 20px;
  & li {
    padding: 8px 0 8px 0;
  }
`;
const Right = styled.div`
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  column-gap: 20px;
`;
const Title = styled.h1`
  font-size: ${(props) => props.small && "24px"};
`;
const Sub = styled.h5`
  color: #bfbfbf;
  margin-top: 10px;
`;
export const AddButton = styled.button`
  max-width: 200px;
  background-color: teal;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 12px;
  border-radius: 6px;
  margin-top: ${(props) => props.update && "auto"};
  grid-column: 1 / span 2;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex: 1;
`;
const UploadLabel = styled.label`
  align-self: center;
  cursor: pointer;
`;
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #ddd;
  width: 80%;
`;
const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 2;
`;
const UpdateAvatar = styled.form`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  & div {
    align-self: center;
  }
`;
const User = () => {
  return (
    <Container>
      <Top>
        <Title>Edit User</Title>
        <Link to="/addUser">
          <AddButton>Add New User</AddButton>
        </Link>
      </Top>
      <Bottom>
        <Left>
          <ListItem style={{ padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt="user" src="" />
            </ListItemAvatar>
            <ListItemText primary="Seghir" secondary="developer" />
          </ListItem>
          <Sub>Account Details</Sub>
          <List>
            <ListItem>
              <ListItemIcon style={{ minWidth: 35 }}>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText primary="SeghirBachir22" />
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ minWidth: 35 }}>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText primary="03.01.1992" />
            </ListItem>
            <Sub>Contact Details</Sub>
            <ListItem>
              <ListItemIcon style={{ minWidth: 35 }}>
                <PhoneAndroid />
              </ListItemIcon>
              <ListItemText primary="+213 775 650 000" />
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ minWidth: 35 }}>
                <MailOutline />
              </ListItemIcon>
              <ListItemText primary="bachir@dev.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ minWidth: 35 }}>
                <GpsFixed />
              </ListItemIcon>
              <ListItemText primary="Hay Salam, Oran 31000" />
            </ListItem>
          </List>
        </Left>
        <Right>
          <UpdateForm>
            <Title small>Edit</Title>

            <FormLabel htmlFor="username">
              <span>Username</span>
              <Input name="username" placeholder="Username" />
            </FormLabel>
            <FormLabel htmlFor="fullName">
              <span>Full Name</span>
              <Input name="fullName" placeholder="Full Name" />
            </FormLabel>
            <FormLabel htmlFor="email">
              <span>Email</span>
              <Input name="email" placeholder="Email" />
            </FormLabel>
            <FormLabel htmlFor="phone">
              <span>Phone</span>
              <Input name="phone" placeholder="Phone" />
            </FormLabel>
            <FormLabel htmlFor="address">
              <span>Address</span>
              <Input name="address" placeholder="Address" />
            </FormLabel>
          </UpdateForm>
          <UpdateAvatar>
            <Avatar sx={{ width: 100, height: 100, borderRadius: "20px" }} />
            <UploadLabel htmlFor="file">
              <Publish fontSize="large" />
              <input type="file" id="file" style={{ display: "none" }} />
            </UploadLabel>
            <AddButton update>Update</AddButton>
          </UpdateAvatar>
        </Right>
      </Bottom>
    </Container>
  );
};

export default User;
