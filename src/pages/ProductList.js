import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { products } from "../dataSeed";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
const ProductImage = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 10px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
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
const ProductList = () => {
  const [data, setData] = useState(products);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <ProductImage>
            <img src={params.row.img} alt={params.row.title} />
            {params.row.title}
          </ProductImage>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <Actions>
            <Link to={`/product/${params.row.id}`}>
              <button>Edit</button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row.id)} />
          </Actions>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
