import React,{useState} from 'react'

export const Student = () => {
    const [message, setmessage] = useState("Hello World from React Hook");

    const handleChange = ()=>{
        setmessage("I am New Message Changed from Set Message Option")
    }
    return (
        <div>
            <h3>{message}</h3>
            <button onClick={handleChange}>Change Text</button>
        </div>
    )
}
