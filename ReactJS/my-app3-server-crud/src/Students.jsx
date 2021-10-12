import React, { useState } from "react";

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
  };
  const getAlluser = () => {};
  const deleteUser = () => {};
  const editUser = () => {};
  const updateuser = () => {};
  const clearUser = () => {};
  
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" name="fname" value={student.fname} onChange={(event)=>{handleChange(event)}}/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" name="lname" value={student.lname} onChange={(event)=>{handleChange(event)}}/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" name="email" value={student.email} onChange={(event)=>{handleChange(event)}}/>
            </div>

            <button type="button" className="btn btn-primary" onClick={createUser}>
              Submit
            </button>
          </form>
        </div>
        <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
