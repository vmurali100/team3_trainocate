import React from 'react'
import ReactDOM from 'react-dom';

export const PortalDemo = () => {
    return ReactDOM.createPortal(
        <div>
            <h2>Hello from Portal Demo</h2>
        </div>,
        document.getElementById("my-root")
    )
}
