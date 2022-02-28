import axios from "axios";

const BASE_URL = "https://wistore-server.herokuapp.com/api/";
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
