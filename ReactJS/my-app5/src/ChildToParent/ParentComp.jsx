import React, { useState } from "react";
import { ChildComp } from "./ChildComp";

export const ParentComp = () => {
  const [message, setmessage] = useState("");
  const getMessageFromChild = (msg) => {
      setmessage(msg)
  };
  return (
    <div>
      <h2>Parent Component</h2>
      <h2>Message Received from Child is : {message}</h2>
      <hr />
      <ChildComp getMessageFromChild={getMessageFromChild}/>
    </div>
  );
};
