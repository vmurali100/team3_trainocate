import React, { useState, useEffect } from 'react'
import { StudentInfo } from './StudentInfo';
import axios from 'axios';

export const Students = () => {
    const [student, setStudent] = useState({
        fName:"",
        lName:"",
        email:""
    });

    const [students, setstudents] = useState([]);
    const [isEdit, setisEdit] = useState(false);
    const [isInvalid, setisInvalid] = useState(true)

    const handleChange = (event) => {
        let newStudent = {...student};
        newStudent[event.target.name] = event.target.value;
        setStudent(newStudent);
        validate();
    }

    const createUser = () => {
        console.log(student);
        axios.post("http://localhost:3000/users", student).then((res) => {
            console.log("Student added succesfully");
            getAllUsers()
            clearUser();
            setisInvalid(true);
        });
    }
    
    const getAllUsers = () => {
        axios.get("http://localhost:3000/users").then((res) => {
            setstudents(res.data);
        });
    }

    const deleteUser = (std) => {
        axios.delete("http://localhost:3000/users/"+std.id).then(() => {
            getAllUsers();
            clearUser();
        })
    }

    const editUser = (std) => {
        setisEdit(true);
        setStudent(std);
    }
    
    const updateUser = () => {
        axios.put("http://localhost:3000/users/"+student.id, student).then(() => {
            getAllUsers();
            clearUser();
            setisEdit(false);
            setisInvalid(true);
        })
    }

    const clearUser = () => {
        setStudent({
            fName:"",
            lName:"",
            email:""    
        });
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const validate = () => {
        var check = true;

        for (let a in student)
        {
            if (student[a] === ""){
                check = false;
            }
        }

        if (check){
            setisInvalid(false);
        }else{
            setisInvalid(true);
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <StudentInfo 
                            student={student}
                            handleChange={handleChange}
                            createUser={createUser}
                            getAllUsers={getAllUsers}
                            deleteUser={deleteUser}
                            editUser={editUser}
                            updateUser={updateUser}
                            clearUser={clearUser}
                            isEdit={isEdit}
                            isInvalid={isInvalid}
                        />
                    </div>
                </div>
            </div>
            <div className="col">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((std) => <tr>
                            <td>{std.id}</td>
                            <td>{std.fName}</td>
                            <td>{std.lName}</td>
                            <td>{std.email}</td>
                            <td><button className="btn btn-warning" onClick={()=>{editUser(std)}}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={()=>{deleteUser(std)}}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}