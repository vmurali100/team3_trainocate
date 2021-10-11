import React from "react";

export const Child = ({ greeting, personDetails, usersDetails }) => {
  return (
    <div>
      <p>{greeting}</p>
      <h2>Welcome From Child Component</h2>
      <ul>
        <li>
          {personDetails.fname} - {personDetails.lname}
        </li>
      
          {usersDetails.map((user) => {
            return <li key={user}>{user}</li>;
          })}
       
      </ul>
    </div>
  );
};
