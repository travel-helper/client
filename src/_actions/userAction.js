import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUser,
  requestLogin,
  requestSignUp,
  requestlogout,
} from "../api/api";

export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await requestLogin(data);

      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadMyInfo = createAsyncThunk("user/loadMyInfo", async () => {
  //로그인 유지를 위한 유저 정보 요청 함수
  const result = await fetchUser();
  return result;
});

export const logout = createAsyncThunk("user/logout", async () => {
  console.log("call logout");
  const result = await requestlogout();
  return result;
});

export const signup = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await requestSignUp(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);