import { Delete, Visibility } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethod";

const Container = styled.div`
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {users.slice(0, 4).map((user) => (
          <ListItem
            key={user._id}
            secondaryAction={
              <IconButton edge="end" aria-label="view">
                <Visibility />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt={user.username} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.username} secondary={user.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default WidgetSm;
