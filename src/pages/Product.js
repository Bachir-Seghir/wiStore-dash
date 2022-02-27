import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dataSeed";
import { SelectActive } from "./AddUser";
import { Publish } from "@mui/icons-material";
import { AddButton } from "./User";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethod";

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
  width: 70%;
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
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const Months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: Months[item._id - 1], Sales: item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [Months, productId]);
  console.log(productStats);
  return (
    <Container>
      <Top>
        <Title>{product.title}</Title>
        <Link to="/addProduct">
          <AddButton>Add New Product</AddButton>
        </Link>
      </Top>
      <Main>
        <Chart data={productStats} dataKey="Sales" title="Sales Performance" />
        <MainRight>
          <ProductHead>
            <img src={product.image} alt="" />
            <Title small>{product.title}</Title>
          </ProductHead>
          <ProductInfo>
            <InfoItem>
              <span>id</span>
              <p>{product._id}</p>
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
              <p>{product.inStock}</p>
            </InfoItem>
          </ProductInfo>
        </MainRight>
      </Main>
      <ProductUpdate>
        <UpdateForm>
          <Title small>{product.title}</Title>
          <FormLabel htmlFor="name">
            <span>Name</span>
            <Input name="name" placeholder={product.title} />
          </FormLabel>
          <FormLabel htmlFor="description">
            <span>Description</span>
            <Input name="description" placeholder={product.description} />
          </FormLabel>
          <FormLabel htmlFor="price">
            <span>Price</span>
            <Input name="price" placeholder={product.price} />
          </FormLabel>
          <FormLabel>
            <span>In Stock</span>
            <SelectActive name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </SelectActive>
          </FormLabel>
        </UpdateForm>
        <UploadImage>
          <img src={product.image} />
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
