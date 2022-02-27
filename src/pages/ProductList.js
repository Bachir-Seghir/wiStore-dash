import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../redux/apiCalls";

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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <ProductImage>
            <img src={params.row.image} alt={params.row.title} />
            {params.row.title}
          </ProductImage>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price (USD $)",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <Actions>
            <Link to={`/product/${params.row._id}`}>
              <button>Edit</button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row._id)} />
          </Actions>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={products}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
