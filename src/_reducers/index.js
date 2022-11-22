import { combineReducers } from "redux";

import userSlice from "./userReducer";
// import postSlice from "./postReducer";

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        user: userSlice.reducer,
        // post: postSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
