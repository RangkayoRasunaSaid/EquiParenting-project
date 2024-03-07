import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./slices/statsSlice";
import userReducer from './slices/userSlice'
import memberReducer from './slices/memberSlice'
import rewardReducer from './slices/RewardSlice'
import activityReducer from './slices/activitySlice'
import historyReducer from './slices/historySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    member: memberReducer,
    stats: statsReducer,
    reward: rewardReducer,
    activity: activityReducer,
    history: historyReducer,
    // Add other reducers here if any
  },
});

export default store;