import React from 'react'

// Destructuring refers to breaking down the props and referencing directly
export const Child = ({greeting, personDetails, usersDetails}) => {
    return (
        <div>
            <p>{greeting}</p>
            <h2>Welcome from Child Component</h2>
            <ul>
                <li>{personDetails.fname}</li>
                <li>{personDetails.lname}</li>

                {usersDetails.map((user) => {
                    return <li key={user}>{user}</li>
                })}
            </ul>
        </div>
    )
}
