import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import styled from "styled-components";
import { SelectActive } from "./AddUser";
import { Publish } from "@mui/icons-material";
import { AddButton } from "./User";
import app from "../firebase";
import { createProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

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
    object-fit: contain;
    border-radius: 10px;
    border: 1px solid #ddd;
    padding: 10px;
  }
`;
const UploadLabel = styled.label`
  cursor: pointer;
  text-align: center;
  margin-top: 100px;
`;
const AddProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleChange = (e) => {
    e.preventDefault();

    setInputs((prev) => {
      if (e.target.name === "price" || e.target.name === "stock") {
        return { ...prev, [e.target.name]: parseFloat(e.target.value) };
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    // Create a reference to the image file
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, image: downloadURL, categories: cat };
          createProduct(product, dispatch);
        });
      }
    );
  };
  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);
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
            <Input name="title" placeholder="Title" onChange={handleChange} />
          </FormLabel>
          <FormLabel htmlFor="description">
            <span>Description</span>
            <Input
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel htmlFor="stock">
            <span>Stock</span>
            <Input
              name="stock"
              type="number"
              placeholder="stock"
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel htmlFor="price">
            <span>Price</span>
            <Input
              name="price"
              type="number"
              placeholder="price"
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel htmlFor="categories">
            <span>Categories</span>
            <Input
              name="categories"
              type="text"
              placeholder="Categories"
              onChange={handleCat}
            />
          </FormLabel>
          <FormLabel>
            <span>In Stock</span>
            <SelectActive name="inStock" id="inStock" onChange={handleChange}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </SelectActive>
          </FormLabel>
          <FormLabel>
            <span>Status</span>
            <SelectActive name="status" id="status" onChange={handleChange}>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </SelectActive>
          </FormLabel>
          <AddButton update style={{ marginTop: 50 }} onClick={handleClick}>
            Create
          </AddButton>
        </UpdateForm>
        <UploadImage>
          <img src={preview} />
          <UploadLabel htmlFor="file">
            <Publish fontSize="large" />
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </UploadLabel>
        </UploadImage>
      </ProductUpdate>
    </Container>
  );
};

export default AddProduct;
