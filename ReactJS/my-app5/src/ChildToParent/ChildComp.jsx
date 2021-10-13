import React, { useState } from "react";

export const ChildComp = ({getMessageFromChild}) => {
  const [childMessage, setmessage] = useState(
    "Hello World Message From Child Component"
  );
  return (
    <div>
      <h1>Child Componet</h1>
      <button onClick={()=>{getMessageFromChild(childMessage)}}>Send Message</button>
    </div>
  );
};
