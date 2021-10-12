import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { UserInfo } from './UserInfo';

export const Users = () => {
    const [user, setuser] = useState({
        id:"",
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const [users, setusers] = useState([]);
    const [isEdit, setisEdit] = useState(false);
    const [isInvalid, setisInvalid] = useState(true)

    const handleChange = (event) => {
        let newUser = {...user};
        newUser[event.target.name] = event.target.value;
        setuser(newUser);
        validate();
    }

    const getAllUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setusers(res.data);
        });
    }

    const deleteUser = (i) => {
        // delete locally

        let allUsers = [...users];
        let newUsers = allUsers.filter((user, index) => i !== index);
        setusers(newUsers);

        // let newUsers = allUsers.filter((user,index)=>std.index!==index);        
        // axios.delete("https://jsonplaceholder.typicode.com/users"+std.id).then(() => {
        //     getAllUsers();
        //     clearUser();
        // })
    }

    const editUser = (std) => {
        setisEdit(true);
        setuser(std);
    }

    const createUser = () => {
        let newUser = {...user};
        let allUsers = [...users];
        
        newUser.id = allUsers[allUsers.length-1].id + 1;
        allUsers.push(newUser);
        setusers(allUsers);
        setisInvalid(true);
    }
    
    const updateUser = () => {
        // update locally

        let allUsers = [...users];

        let index = allUsers.findIndex(x => x.id === user.id);
        allUsers[index].name = user.name;
        allUsers[index].username = user.username;
        allUsers[index].email = user.email;
        allUsers[index].phone = user.phone;
        allUsers[index].website = user.website;

        setusers(allUsers);
        clearUser();

        setisEdit(false);
        setisInvalid(true);

        // axios.put("https://jsonplaceholder.typicode.com/users/"+user.id, user).then(() => {
        //     getAllUsers();
        //     clearUser();
        // })
    }

    const clearUser = () => {
        setuser({
            id:"",
            name:"",
            username:"",
            email:"",
            phone:"",
            website:""
        });
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const validate = () => {
        var check = true;
        let i = 0;
        for (let a in user)
        {
            if (user[a] === ""){
                if (i !== 0)
                {
                    check = false;
                }
                i++;
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
                        <UserInfo
                            user={user}
                            handleChange={handleChange}
                            getAllUsers={getAllUsers}
                            deleteUser={deleteUser}
                            editUser={editUser}
                            updateUser={updateUser}
                            clearUser={clearUser}
                            createUser={createUser}
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
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((usr,i) => <tr>
                            <td>{usr.id}</td>
                            <td>{usr.name}</td>
                            <td>{usr.username}</td>
                            <td>{usr.email}</td>
                            <td>{usr.phone}</td>
                            <td>{usr.website}</td>
                            <td><button className="btn btn-warning" onClick={()=>{editUser(usr)}}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={()=>{deleteUser(i)}}>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
