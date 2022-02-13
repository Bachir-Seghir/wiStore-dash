import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import { DeleteOutline } from "@mui/icons-material";
import { users } from "../dataSeed";
import { Link } from "react-router-dom";

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  & div {
    margin-right: 20px;
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  & * {
    margin-right: 20px;
    cursor: pointer;
  }
  & svg {
    color: red;
  }

  & button {
    background-color: #00cb6a;
    border: none;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    color: white;
    border-radius: 8px;
    &:hover {
      color: #555;
    }
  }
`;

const UserList = () => {
  const [data, setData] = useState(users);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "user",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return (
          <UserAvatar>
            <Avatar src={params.row.avatar} alt={params.row.user} />
            {params.row.user}
          </UserAvatar>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <Actions>
            <Link to={`/user/${params.row.id}`}>
              <button>Edit</button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row.id)} />
          </Actions>
        );
      },
    },
  ];

  return (
    <div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
