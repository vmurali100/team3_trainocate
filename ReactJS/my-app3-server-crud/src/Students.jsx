import React, { useState } from "react";
import { StudentInfo } from "./StudentInfo";
import axios from 'axios';

export const Students = () => {
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const handleChange=(event)=>{
    let newStudent={...student}
    newStudent[event.target.name] = event.target.value
    setStudent(newStudent)
  }
  const createUser = () => {
      console.log(student);
      axios.post("http://localhost:3000/users",student).then((res)=>{
        console.log("Student Added Successfully");
      })
  };
  const getAllusers = () => {};
  const deleteUser = () => {};
  const editUser = () => {};
  const updateuser = () => {};
  const clearUser = () => {};
  
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col">
          <StudentInfo
            student={student}
            handleChange={handleChange}
            createUser={createUser}
            getAllusers={getAllusers}
            deleteUser={deleteUser}
            editUser={editUser}
            updateuser={updateuser}
            clearUser={clearUser}
          />
        </div>
        <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
