import { GET_USER, GET_USERS, QUERY_USERS, SAVE_USER, DELETE_USER } from "../../actions/users/consts";
import {createReducer} from '../createReducer';

const initialState = null;


const getUsers = (state, payload) => {
  return { ...state, payload }
}

const getUser = (state, payload) => {
  return { ...state, payload }
}

const queryUsers = (state, payload) => {
  return { ...state, payload }
}

const saveUser = (state, payload) => {
  return { ...state, payload }
}

const deleteUser = (state, payload) => {
  return { ...state, payload }
}


export default createReducer(initialState, {
  [GET_USER]: getUser,
  [GET_USERS]: getUsers,
  [QUERY_USERS]: queryUsers,
  [SAVE_USER]: saveUser,
  [DELETE_USER]: deleteUser
});