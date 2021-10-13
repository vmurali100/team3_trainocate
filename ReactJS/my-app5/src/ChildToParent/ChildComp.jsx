import React, {useState} from 'react'

export const ChildComp = ({getMessageFromChild}) => {
    const [childMessage, setmessage] = useState("Hello world messsage from Child Component");
    return (
        <div>
            <h3>Child Component</h3>
            <button onClick={() => {getMessageFromChild(childMessage)}}>Send Message</button>
        </div>
    )
}
