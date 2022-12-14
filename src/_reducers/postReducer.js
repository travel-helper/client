import { createSlice, current } from "@reduxjs/toolkit";
// import _concat from "lodash/concat";
import _remove from "lodash/remove";
import _find from "lodash/find";

import {
  //   addComment,
  addPost,
  likePost,
  //   loadHashtagPosts,
  //   loadPost,
  loadPosts,
  //   loadUserPosts,
  removePost,
  //   retweet,
  unlikePost,
  updatePost,
  uploadImage,
  filterPost,
} from "../_actions/postAction";

// 기본 state
export const initialState = {
  mainPosts: [],
  //   hasMorePosts: true,
  //   singlePost: null,
  imagePath: "/upload/default1671612853173.png",
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  filter: false,
  filterState: {},
  //   addCommentLoading: false,
  //   addCommentDone: false,
  //   addCommentError: null,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
  //   uploadImagesLoading: false,
  //   uploadImagesDone: false,
  //   uploadImagesError: null,
  //   retweetLoading: false,
  //   retweetDone: false,
  //   retweetError: null,
};

// toolkit 사용방법
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    filterPost(state, action) {
      state.filterState = action.payload;
      state.filter = true;
    },
  },
  extraReducers: (builder) =>
    builder
      // loadPosts
      .addCase(loadPosts.pending, (state) => {
        state.loadPostsLoading = true;
        state.loadPostsDone = false;
        state.loadPostsError = null;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsDone = true;
        state.mainPosts = action.payload;
        //   state.hasMorePosts = action.payload.length === 10;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loadPostsLoading = false;
        state.loadPostsError = action.error.message;
      })
      //   // loadHashtagPosts
      //   .addCase(loadHashtagPosts.pending, (state) => {
      //     state.loadPostsLoading = true;
      //     state.loadPostsDone = false;
      //     state.loadPostsError = null;
      //   })
      //   .addCase(loadHashtagPosts.fulfilled, (state, action) => {
      //     state.loadPostsLoading = false;
      //     state.loadPostsDone = true;
      //     state.mainPosts = _concat(state.mainPosts, action.payload);
      //     state.hasMorePosts = action.payload.length === 10;
      //   })
      //   .addCase(loadHashtagPosts.rejected, (state, action) => {
      //     state.loadPostsLoading = false;
      //     state.loadPostsError = action.error.message;
      //   })
      //   // loadUserPosts
      //   .addCase(loadUserPosts.pending, (state) => {
      //     state.loadPostsLoading = true;
      //     state.loadPostsDone = false;
      //     state.loadPostsError = null;
      //   })
      //   .addCase(loadUserPosts.fulfilled, (state, action) => {
      //     state.loadPostsLoading = false;
      //     state.loadPostsDone = true;
      //     state.mainPosts = _concat(state.mainPosts, action.payload);
      //     state.hasMorePosts = action.payload.length === 10;
      //   })
      //   .addCase(loadUserPosts.rejected, (state, action) => {
      //     state.loadPostsLoading = false;
      //     state.loadPostsError = action.error.message;
      //   })
      // addPost
      .addCase(addPost.pending, (state) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.addPostLoading = false;
        state.addPostDone = true;
        // state.mainPosts.unshift(action.payload);
        state.imagePath = "/upload/default1671612853173.png";
      })
      .addCase(addPost.rejected, (state, action) => {
        state.addPostLoading = false;
        state.addPostError = action.error.message;
      })
      //   // uploadImages
      .addCase(uploadImage.pending, (state) => {
        state.uploadImageLoading = true;
        state.uploadImageDone = false;
        state.uploadImageError = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.uploadImageLoading = false;
        state.uploadImageDone = true;
        state.imagePath = action.payload;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.uploadImageLoading = false;
        state.uploadImageError = action.error.message;
      })
      //   // addComment
      //   .addCase(addComment.pending, (state) => {
      //     state.addCommentLoading = true;
      //     state.addCommentDone = false;
      //     state.addCommentError = null;
      //   })
      //   .addCase(addComment.fulfilled, (state, action) => {
      //     const post = _find(state.mainPosts, { id: action.payload.PostId });
      //     state.addCommentLoading = false;
      //     state.addCommentDone = true;
      //     post.Comments.unshift(action.payload);
      //   })
      //   .addCase(addComment.rejected, (state, action) => {
      //     state.addCommentLoading = false;
      //     state.addCommentError = action.error.message;
      //   })
      // removePost
      .addCase(removePost.pending, (state) => {
        state.removePostLoading = true;
        state.removePostDone = false;
        state.removePostError = null;
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.removePostLoading = false;
        state.removePostDone = true;
        // _remove(state.mainPosts, { id: action.payload.PostId });
      })
      .addCase(removePost.rejected, (state, action) => {
        state.removePostLoading = false;
        state.removePostError = action.error.message;
      })
        // likePost
        .addCase(likePost.pending, (state) => {
          state.likePostLoading = true;
          state.likePostDone = false;
          state.likePostError = null;
        })
        .addCase(likePost.fulfilled, (state, action) => {
          const post = _find(state.mainPosts, { id: action.payload.PostId });
          state.likePostLoading = false;
          state.likePostDone = true;
          post.Likers.push({ id: action.payload.UserId });
        })
        .addCase(likePost.rejected, (state, action) => {
          state.likePostLoading = false;
          state.likePostError = action.error.message;
        })
        // unlikePost
        .addCase(unlikePost.pending, (state) => {
          state.likePostLoading = true;
          state.likePostDone = false;
          state.likePostError = null;
        })
        .addCase(unlikePost.fulfilled, (state, action) => {
          const post = _find(state.mainPosts, { id: action.payload.PostId });
          state.likePostLoading = false;
          state.likePostDone = true;
          _remove(post.Likers, { id: action.payload.UserId });
        })
        .addCase(unlikePost.rejected, (state, action) => {
          state.likePostLoading = false;
          state.likePostError = action.error.message;
        })
      //   // retweet
      //   .addCase(retweet.pending, (state) => {
      //     state.retweetLoading = true;
      //     state.retweetDone = false;
      //     state.retweetError = null;
      //   })
      //   .addCase(retweet.fulfilled, (state, action) => {
      //     state.retweetLoading = false;
      //     state.retweetDone = true;
      //     state.mainPosts.unshift(action.payload);
      //   })
      //   .addCase(retweet.rejected, (state, action) => {
      //     state.retweetLoading = false;
      //     state.retweetError = action.error.message;
      //   })
      // updatePost
      .addCase(updatePost.pending, (state) => {
        state.updatePostLoading = true;
        state.updatePostDone = false;
        state.updatePostError = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const post = _find(state.mainPosts, { id: action.payload.PostId });
        state.updatePostLoading = false;
        state.updatePostDone = true;

        post.content = action.payload.content;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.updatePostLoading = false;
        state.updatePostError = action.error.message;
      })
      //   // loadPost
      //   .addCase(loadPost.pending, (state) => {
      //     state.loadPostsLoading = true;
      //     state.loadPostsDone = false;
      //     state.loadPostsError = null;
      //   })
      //   .addCase(loadPost.fulfilled, (state, action) => {
      //     console.log(action.payload);
      //     state.loadPostsLoading = false;
      //     state.loadPostsDone = true;
      //     state.singlePost = action.payload;
      //   })
      //   .addCase(loadPost.rejected, (state, action) => {
      //     state.loadPostsLoading = false;
      //     state.loadPostsError = action.error.message;
      //   })
      .addDefaultCase((state) => state),
});

export default postSlice;
