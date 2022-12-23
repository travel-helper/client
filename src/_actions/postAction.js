import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  sendImg,
  sendPost,
  requestPosts,
  removeRequest,
  updateRequest,
  likeRequest,
  unlikeRequest,
} from "../api/api";

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

export const loadPosts = createAsyncThunk("post/loadPosts", async (data) => {
  const response = await requestPosts(data);

  return response;
});

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

export const removePost = createAsyncThunk(
  "post/removePost",
  async (data, thunkAPI) => {
    try {
      const response = await removeRequest(data); // DELETE /post/1/comment
      // thunkAPI.dispatch(userSlice.actions.removePostToMe(response.data.id));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await updateRequest(data);

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await likeRequest(data); // PATCH /post/1/like
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const unlikePost = createAsyncThunk(
  "post/unlikePost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await unlikeRequest(data); // DELETE /post/1/like
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
