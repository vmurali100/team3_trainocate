import React, { useState } from 'react'

// React Forms start
export const User = () => {
    const [user, setUser] = useState({fName:"", lName:"", email:""});
    const [index, setIndex] = useState(0)
    const [users, setUsers] = useState([]);

    const handleChange = (event) => {
        // synthetic base event
        // console.log(event.target.name);
        // console.log(event.target.value);

        // user cloned to newUser
        // calls setUser to add t
        let newUser = {...user};
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    }

    const handleSubmit = () => {
        let allUsers = [...users];
        allUsers.push(user);
        setUsers(allUsers);
        clearForm();
    }

    const clearForm = () => {
        setUser({fName:"",lName:"",email:""})
    }

    const deleteUser = (i) =>{
        let allUsers = [...users];
        let newUsers = allUsers.filter((user,index)=>i!==index);
        setUsers(newUsers);
    }

    const editUser = (user, i) => {
        setIndex(i);
        setUser(user);
    }

    const updateUser = () => {
        let newUsers = [...users];
        newUsers[index] = user;
        setUsers(newUsers);
        clearForm();
    }

    return (
        <div>
            <form>
                <label htmlFor="fName">First Name :</label>
                <input type="text" name="fName" id="fname" value={user.fName} onChange={(event) => handleChange(event)}/><br/> 
                <label htmlFor="fName">Last Name :</label>
                <input type="text" name="lName" id="lname" value={user.lName} onChange={(event) => handleChange(event)}/><br/> 
                <label htmlFor="fName">Email :</label>
                <input type="text" name="email" id="email" value={user.email} onChange={(event) => handleChange(event)}/><br/> 

                <button type="button" onClick={handleSubmit}>Add User</button>
                <button type="button" onClick={updateUser}>Update User</button>

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
                    {users.map((user,i)=>{
                        return <tr>
                            <td>{user.fName}</td>
                            <td>{user.lName}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => editUser(user, i)}>Edit User</button></td>
                            <td><button onClick={() => deleteUser(i)}>Delete User</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}
