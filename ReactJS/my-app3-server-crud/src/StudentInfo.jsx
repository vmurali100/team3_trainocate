import React from "react";

export const StudentInfo = ({student,handleChange,createUser,updateuser}) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="fname"
            value={student.fname}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lname"
            value={student.lname}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={student.email}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={createUser}>
          Submit
        </button>
        <button type="button" className="btn btn-primary" onClick={updateuser}>
          Update
        </button>
      </form>
    </div>
  );
};
