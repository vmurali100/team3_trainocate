import React, { useEffect, useState } from "react";
import { StudentInfo } from "./StudentInfo";
import axios from "axios";

export const Students = () => {
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [students, setstudents] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [isInvalid, setisInvalid] = useState(true)

  const handleChange = (event) => {
    let newStudent = { ...student };
    newStudent[event.target.name] = event.target.value;
    setStudent(newStudent);
    validate()
  };
  const createUser = () => {
    console.log(student);
    axios.post("http://localhost:3000/users", student).then((res) => {
      console.log("Student Added Successfully");
      getAllusers();
      clearUser();
      setisInvalid(true)
    });
  };
  const getAllusers = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res.data);
      setstudents(res.data);
    });
  };
  const deleteUser = (std) => {
    axios.delete("http://localhost:3000/users/"+std.id).then(()=>{
        getAllusers()
    })
  };
  const editUser = (std) => {
    setisEdit(true)
    setStudent(std)
  };
  const updateuser = () => {
    axios.put("http://localhost:3000/users/"+student.id,student).then((res)=>{
      getAllusers();
      clearUser()
      setisEdit(false);
      setisInvalid(true)
    })
  };
  const clearUser = () => {
    setStudent({
      fname: "",
      lname: "",
      email: "",
    })
  };

  useEffect(()=>{
    getAllusers()
  },[])

 const validate=()=>{
  var check = true;
 
  for(let a in student){
    if(student[a]===""){
      check = false
    }
  }

  if(check){
    setisInvalid(false)
  }else{
    setisInvalid(true)
  }
  
 }
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
              isEdit={isEdit}
              isInvalid={isInvalid}
            />
          </div>
          <div className="col">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>First</th>
                  <th>Last</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {students.map((std)=> <tr>
                  <td>{std.id}</td>
                  <td>{std.fname}</td>
                  <td>{std.lname}</td>
                  <td>{std.email}</td>
                  <td><button className="btn btn-warning" onClick={()=>{editUser(std)}}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={()=>{deleteUser(std)}}>Delete</button></td>
                </tr> )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
