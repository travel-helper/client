import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://server-production-73a6.up.railway.app";
axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/login", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  const response = await axios.post("/user/logout");
  return response.data;
});

export const signup = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/signup", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
