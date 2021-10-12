import React, { useState, useEffect } from 'react'

export const Users = () => {
    const [users, setUsers] = useState([]);
    // UseEffect triggers after component renders
    useEffect(() => {
        setUsers(allusers)
    }, [])

    const deleteUser = (i) => {
        let allUsers = users.filter((user,index) => i!==index);
            setUsers(allUsers);  
    };
     
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
                    {users.map((user, i)=>{
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td><button>Edit</button></td>
                            <td><button onClick={() => {deleteUser(i)}}>Delete</button></td>
                            </tr>
                    })}
                </tbody>
            </table>

        </div>
    )

}

let allusers = [
    {
      "fname": "Jermaine",
      "lname": "Sooi",
      "email": "jermainesooi@toppanleefung.com",
      "id": 1
    },
    {
      "fname": "Darren",
      "lname": "Updated",
      "email": "dt@update.com",
      "id": 2
    }
]

