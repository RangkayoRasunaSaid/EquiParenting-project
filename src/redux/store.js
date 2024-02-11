import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slices/articleSlice";
import profileReducer from './reducers/profile'
import memberReducer from './reducers/member'
import rewardReducer from './reducers/reward'

const store = configureStore({
  reducer: {
    articles: articleReducer,
    user: profileReducer,
    member: memberReducer,
    reward: rewardReducer,
    // Add other reducers here if any
  },
});

export default store;