import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import { format } from "timeago.js";

const Status = styled.span`
  border-radius: 6px;
  text-transform: capitalize;
  padding: 10px;
  font-weight: 700;
  background-color: ${(props) => {
    if (props.status === "approved") {
      return "#ddf7de";
    } else if (props.status === "pending") {
      return "#d1e7ff";
    } else {
      return "#ffe9f5";
    }
  }};
  color: ${(props) => {
    if (props.status === "approved") {
      return "#07bf07";
    } else if (props.status === "pending") {
      return "#2082ff";
    } else {
      return "#f75598";
    }
  }};
`;
const DataTable = ({ data }) => {
  return (
    <TableContainer component={Paper} style={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ "& th": { border: 0 } }}>
          <TableRow
            sx={{
              "& th": { fontWeight: "Bold", fontSize: 16, textAlign: "left" },
            }}
          >
            <TableCell>Customer</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((order) => (
            <TableRow
              key={order._id}
              sx={{ "& td, & th": { border: 0, textAlign: "left" } }}
            >
              <TableCell
                component="th"
                scope="order"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Avatar
                  alt="customer"
                  //src={order.avatar}
                  style={{ marginRight: 10 }}
                />{" "}
                {order.userId}
              </TableCell>
              <TableCell align="right">{format(order.createdAt)}</TableCell>
              <TableCell align="right">{order.amount}</TableCell>
              <TableCell align="right">
                <Status status={order.status}>{order.status}</Status>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
