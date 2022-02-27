import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // CRUD Operations
    //Create
    createProductStart: (state) => {
      state.isFetching = true;
    },
    createProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    createProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Get All
    getProductStart: (state) => {
      state.isFetching = true;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //Update
    UpdateProductStart: (state) => {
      state.isFetching = true;
    },
    UpdateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    UpdateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //Delete
    deleteProductStart: (state) => {
      state.isFetching = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  createProductStart,
  createProductSuccess,
  createProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
