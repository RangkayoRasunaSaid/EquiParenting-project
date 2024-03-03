// 1. Create a Redux store
// store.js
import { applyMiddleware } from 'redux';
const createStore = redux.createStore
import thunk from 'redux-thunk'; // Use Redux Thunk for async actions if needed
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;