import { Delete, Visibility } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;

const WidgetSm = ({ data }) => {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {data.slice(0, 4).map((user) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="view">
                <Visibility />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt={user.user} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.user} secondary={user.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default WidgetSm;
