import React from "react";
import styled from "styled-components";
import { SelectActive } from "./AddUser";
import { Publish } from "@mui/icons-material";
import { AddButton } from "./User";

const Container = styled.div`
  padding: 20px;
`;
const Top = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.small && "24px"};
`;

const ProductUpdate = styled.div`
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  padding: 20px;
  column-gap: 15px;
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex: 1;
  max-width: 400px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  margin-top: 10px;
`;
const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const UploadImage = styled.form`
  display: grid;
  flex: 2;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  & img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const UploadLabel = styled.label`
  cursor: pointer;
  text-align: center;
  margin-top: 100px;
`;
const AddProduct = () => {
  return (
    <Container>
      <Top>
        <Title>Add Product</Title>
      </Top>

      <ProductUpdate>
        <UpdateForm>
          <Title small>Edit</Title>
          <FormLabel htmlFor="name">
            <span>Name</span>
            <Input name="name" placeholder="name" />
          </FormLabel>
          <FormLabel htmlFor="stock">
            <span>Stock</span>
            <Input name="stock" type="number" placeholder="stock" />
          </FormLabel>
          <FormLabel>
            <span>In Stock</span>
            <SelectActive name="inStock" id="inStock">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </SelectActive>
          </FormLabel>
          <FormLabel>
            <span>Status</span>
            <SelectActive name="status" id="status">
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </SelectActive>
          </FormLabel>
          <AddButton update style={{ marginTop: 50 }}>
            Create
          </AddButton>
        </UpdateForm>
        <UploadImage>
          <img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2020/12/30/original/MacBookAirM1.jpg?w=400&dpr=2.6" />
          <UploadLabel htmlFor="file">
            <Publish fontSize="large" />
            <input type="file" id="file" style={{ display: "none" }} />
          </UploadLabel>
        </UploadImage>
      </ProductUpdate>
    </Container>
  );
};

export default AddProduct;
