import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendImg, sendPost } from "../api/api";

export const addPost = createAsyncThunk(
  "post/addPost",
  async (data, thunkAPI) => {
    try {
      const response = await sendPost(data);
      //   thunkAPI.dispatch(userSlice.actions.addPostToMe(response.data.id));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "post/img",
  async (data, { rejectWithValue }) => {
    try {
      const response = await sendImg(data);

      return response.url;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
