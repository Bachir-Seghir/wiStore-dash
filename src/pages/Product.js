import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dataSeed";
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
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  margin-bottom: 15px;
  &:first-child {
    margin-top: 0 !important;
  }
`;
const MainLeft = styled.div`
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const MainRight = styled.div`
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: ${(props) => props.small && "24px"};
`;
const ProductHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & img {
    border-radius: 50%;
    height: 80px;
    width: 80px;
    margin-right: 10px;
    object-fit: cover;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.3rem;
  & span {
    font-size: 15px;
    font-weight: 700;
    margin-right: 20px;
    text-transform: capitalize;
    flex: 1;
    text-align: right;
  }
  & p {
    font-size: 15px;
    flex: 6;
  }
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
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #ddd;
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
  align-self: center;
  cursor: pointer;
  text-align: center;
`;
const Product = () => {
  return (
    <Container>
      <Top>
        <Title>Product</Title>
        <Link to="/addProduct">
          <AddButton>Add New Product</AddButton>
        </Link>
      </Top>
      <Main>
        <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        <MainRight>
          <ProductHead>
            <img
              src="https://images.indulgexpress.com/uploads/user/imagelibrary/2020/12/30/original/MacBookAirM1.jpg?w=400&dpr=2.6"
              alt=""
            />
            <Title small>MacBook Air</Title>
          </ProductHead>
          <ProductInfo>
            <InfoItem>
              <span>id</span>
              <p>1234RTG</p>
            </InfoItem>
            <InfoItem>
              <span>sales</span>
              <p>3900</p>
            </InfoItem>
            <InfoItem>
              <span>active</span>
              <p>Yes</p>
            </InfoItem>
            <InfoItem>
              <span>in stock</span>
              <p>Yes</p>
            </InfoItem>
          </ProductInfo>
        </MainRight>
      </Main>
      <ProductUpdate>
        <UpdateForm>
          <Title small>Edit</Title>
          <FormLabel htmlFor="name">
            <span>Name</span>
            <Input name="name" placeholder="name" />
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
        </UpdateForm>
        <UploadImage>
          <img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2020/12/30/original/MacBookAirM1.jpg?w=400&dpr=2.6" />
          <UploadLabel htmlFor="file">
            <Publish fontSize="large" />
            <input type="file" id="file" style={{ display: "none" }} />
          </UploadLabel>
          <AddButton update>Update</AddButton>
        </UploadImage>
      </ProductUpdate>
    </Container>
  );
};

export default Product;
