import axios from "axios";

// axios.defaults.baseURL = "https://server-production-73a6.up.railway.app";
axios.defaults.baseURL = "http://localhost:443";
axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const requestLogin = async (params) => {
  const response = await axios.post("/user/login", params);
  console.log(response.data);
  return response.data;
};

export const fetchUser = async (params) => {
  const response = await axios.get("/user");
  return response.data;
};

export const logout = async (params) => {
  const response = await axios.post("/user/logout");
  return response.data;
};

export const requestSignUp = async (params) => {
  const response = await axios.post("/user/signup", params);
  return response.data;
};
