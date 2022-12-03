import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendImg } from "../api/api";

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
