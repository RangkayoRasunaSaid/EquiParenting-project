import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./slices/statsSlice";
import userReducer from './slices/userSlice'
import memberReducer from './slices/memberSlice'
import rewardReducer from './slices/RewardSlice'
import activityReducer from './slices/activitySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    member: memberReducer,
    stats: statsReducer,
    reward: rewardReducer,
    activity: activityReducer,
    // Add other reducers here if any
  },
});

export default store;