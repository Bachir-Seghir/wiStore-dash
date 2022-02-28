import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_SERVER_URL;
let token = "";
if (!localStorage.getItem("persist:root")) {
  token = "";
} else if (
  JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
    ?.currentUser
) {
  token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser.accessToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
