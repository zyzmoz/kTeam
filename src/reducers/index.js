import { combineReducers } from 'redux';
import userReducer from './users';
import modalReducer from './modal';

const rootReducer = combineReducers({
  users: userReducer,
  modal: modalReducer
});

export default rootReducer;