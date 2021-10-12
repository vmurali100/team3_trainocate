import React, { useState } from 'react'

export const Conditional = () => {
    const [showMessage, setShowMessage] = useState(false);
    const handleShowMessage = () => {
        setShowMessage(!showMessage);
    }
    return (
        <div>
            {showMessage && <h2>I will be hidden by default</h2>}
            <button onClick={handleShowMessage}>Show Message</button>
        </div>
    )
}
