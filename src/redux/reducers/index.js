// reducers/index.js
import { combineReducers } from 'redux';
import memberReducer from './memberReducer';
import activityReducer from './activityReducer';

const rootReducer = combineReducers({
  members: memberReducer,
  activities: activityReducer
});

export default rootReducer;
