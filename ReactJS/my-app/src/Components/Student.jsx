import React, {useState} from 'react'

export const Student = () => {
    // State hook [var, method] to change var value so you
    // use this to manipulate state at runtime in functional components
    const [message, setMessage] = useState("Hello World from React Hook")

    const handleChange = () => {
        setMessage("New message changed from setMessage function");
    }
    return (
        <div>
            <h3>{message}</h3>
            <button onClick={handleChange}>Change Text</button>
        </div>
    )
}
