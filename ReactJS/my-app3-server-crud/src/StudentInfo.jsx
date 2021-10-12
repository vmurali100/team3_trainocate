import React from 'react'

export const StudentInfo = ({student, handleChange, createUser, updateUser, isEdit, isInvalid}) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        First Name
                    </label>
                    <input type="text" className="form-control" name="fName" value={student.fName} onChange={(event) => {handleChange(event)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Last Name
                    </label>
                    <input type="email" className="form-control" name="lName" value={student.lName} onChange={(event) => {handleChange(event)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                        </label>
                    <input type="email" className="form-control" name="email" value={student.email} onChange={(event) => {handleChange(event)}}/>
                </div>
                { isEdit 
                ? <button type="button" className="btn btn-primary" onClick={updateUser} >Update</button>
                : <button type="button" className="btn btn-primary" onClick={createUser} disabled={isInvalid}>Submit</button>
                }
                
            </form>
        </div>
    )
}
