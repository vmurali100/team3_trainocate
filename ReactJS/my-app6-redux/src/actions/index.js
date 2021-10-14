import users from "./users.json";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const EDIT_USER = "EDIT_USER"

export const getAllUsersAction = () => {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
};

export const deleteUserAction = (user) => {
  return {
    type:DELETE_USER,
    payload:deleteUser(user)
  };
};

export const updateUserAction = (user) => {
  return {
      type:UPDATE_USER,
      payload:updateUsers(user)
  };
};

export const createUserAction = (user) => {
  return {
      type:CREATE_USER,
      payload:createUser(user)
  };
};

export const editUserAction =(val)=>{
  return {
    type:EDIT_USER,
    payload:val
  }
}


function deleteUser(user){
    return users.filter((obj)=> user.id !== obj.id)
}

function createUser(user){
  users.push(user)
    return users
}

function updateUsers(user){
  users.forEach(obj=>{
    if(obj.id == user.id){
      obj = user
    }
  })

  return users
}