import users from "./users.json";
import axios from "axios";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const EDIT_USER = "EDIT_USER";
export const SHOW_CREATE = "SHOW_CREATE";

let apiUrl = "http://localhost:3000/users/";
export const getAllUsersAction = () => {
  // return {
  //   type: GET_ALL_USERS,
  //   payload: users,
  // };

  return async (dispatch) => {
    let allUsers = await axios.get(apiUrl);
    dispatch({
      type: GET_ALL_USERS,
      payload: allUsers.data,
    });
  };
};

export const deleteUserAction = (user) => {
  // return {
  //   type: DELETE_USER,
  //   payload: deleteUser(user),
  // };
  return async (dispatch) => {
    let respose = await axios.delete(apiUrl + user.id);
    dispatch(getAllUsersAction());
  };
};

export const updateUserAction = (user) => {
  return async (dispatch) => {
    let response = await axios.put(apiUrl + user.id, user);
    dispatch(getAllUsersAction());
  };
  // return {
  //   type: UPDATE_USER,
  //   payload: updateUsers(user),
  // };
};

export const createUserAction = (user) => {
  // return {
  //   type: CREATE_USER,
  //   payload: createUser(user),
  // };

  return async (dispatch) => {
    let response = await axios.post(apiUrl, user);
    dispatch(getAllUsersAction());
  };
};

export const editUserAction = (val) => {
  return {
    type: EDIT_USER,
    payload: val,
  };
};

export const showCreateUserAction = (val) => {
  return {
    type: SHOW_CREATE,
    payload: val,
  };
};

function deleteUser(user) {
  return users.filter((obj) => user.id !== obj.id);
}

function createUser(user) {
  users.push(user);
  return users;
}

function updateUsers(user) {
  users.forEach((obj) => {
    if (obj.id == user.id) {
      obj = user;
    }
  });

  return users;
}
