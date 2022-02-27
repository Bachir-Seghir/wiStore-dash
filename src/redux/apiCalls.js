import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest, userRequest } from "../requestMethod";
import {
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
} from "./productSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(loginFailure());
  }
};
export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(createProductSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(createProductFailure());
  }
};
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(getProductFailure());
  }
};
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    console.log(error.message);
    dispatch(updateProductFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    console.log(error.message);
    dispatch(deleteProductFailure());
  }
};
