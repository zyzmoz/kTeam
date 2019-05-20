import { GET_USERS, QUERY_USERS, SAVE_USER, DELETE_USER } from './consts';


const getUsers = () => {
  return async(dispatch) =>{
    dispatch({
      type: GET_USERS
    });
  }
}

const getUser = (id) => {
  return async(dispatch) =>{
    dispatch({
      type: GET_USER
    });
  }
}

const queryUsers = (str) => {
  return async(dispatch) =>{
    dispatch({
      type: QUERY_USERS
    });
  }
}

const saveUser = (userObj) => {
  return async(dispatch) =>{
    dispatch({
      type: SAVE_USER
    });
  }
}

const deleteUsers = (id) => {
  return async(dispatch) =>{
    dispatch({
      type: DELETE_USER
    });
  }
}

export default {
  getUser,
  getUsers,
  saveUser,
  queryUsers,
  deleteUsers
}