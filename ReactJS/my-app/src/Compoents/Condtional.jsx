import React,{useState} from 'react'

export const Condtional = () => {
    const [showMessage, setshowMessage] = useState(false);
    const handleShowMessage =()=>{
        setshowMessage(!showMessage)
    }
    return (
        <div>
            {showMessage && <h2>I will be Hidden by default</h2>}
            <button onClick={handleShowMessage}>Show Message</button>
        </div>
    )
}
