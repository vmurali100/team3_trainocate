import React, { useState } from "react";

export const User = () => {
  const [user, setuser] = useState({ fName: "", lName: "", email: "" });
  const [users, setusers] = useState([]);

  const handleChange = (event) => {
    let newUser = { ...user };
    newUser[event.target.name] = event.target.value;

    setuser(newUser);
  };

  const handleSubmit = () => {
    let allUsers = [...users];
    allUsers.push(user);
    setusers(allUsers);
    clearForm();
  };

  const clearForm = () => {
    setuser({ fName: "", lName: "", email: "" });
  };

  const delteteUser = (i) => {
    let allUsers = [...users];
    let newUsers = allUsers.filter((usr, index) => i !== index);
    setusers(newUsers)
  };
  return (
    <div>
      <form>
        <label for="fName">First Name :</label>
        <input
          type="text"
          name="fName"
          value={user.fName}
          onChange={(event) => {
            handleChange(event);
          }}
        />{" "}
        <br />
        <label for="fName">Last Name :</label>
        <input
          type="text"
          name="lName"
          value={user.lName}
          onChange={(event) => {
            handleChange(event);
          }}
        />{" "}
        <br />
        <label for="fName">Email :</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(event) => {
            handleChange(event);
          }}
        />{" "}
        <br />
        <button type="button" onClick={handleSubmit}>
          Add User
        </button>
      </form>
      <hr />
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i) => {
            return (
              <tr>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.email}</td>
                <td>
                  <button>Edit User</button>
                </td>
                <td>
                  <button onClick={()=>{delteteUser(i)}}>Delete User</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
