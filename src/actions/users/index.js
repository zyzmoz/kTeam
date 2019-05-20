import { GET_USERS, QUERY_USERS, SAVE_USER, DELETE_USER } from './consts';


export const getUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_USERS
    });
  }
}

export const getUser = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_USER
    });
  }
}

export const queryUsers = (str) => {
  return async (dispatch) => {
    dispatch({
      type: QUERY_USERS
    });
  }
}

export const saveUser = (userObj) => {
  return async (dispatch) => {
    dispatch({
      type: SAVE_USER,
      payload: { user: userObj }
    });
  }
}

export const deleteUsers = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_USER
    });
  }
}

