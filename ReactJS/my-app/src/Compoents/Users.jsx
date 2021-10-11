import React, { useEffect, useState } from "react";

export const Users = () => {
  const [users, setusers] = useState([]);

  // Use Effect triggers Afte Component Render Completes
  useEffect(()=>{
      setusers(allusers)
  },[])
  return (
    <div>
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
            {users.map((user,i)=>{
                return <tr key={i}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
};

let allusers = [
    {
      fname: "Murali",
      lname: "Veesambattu",
      email: "vmurali100@gmail.com",
      id: 1,
    },
    {
      fname: "Harish",
      lname: "Kumar",
      email: "harish@gmail.com",
      id: 2,
    },
    {
      fname: "Lokesh MM",
      lname: "Kumar",
      email: "lokesh@gmail.com",
      id: 3,
    },
  ];
  
