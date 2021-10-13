import React from 'react'
import ReactDOM from 'react-dom'
export const PortalDemo = () => {
    return ReactDOM.createPortal(
        <div>
            <h2>Hello From Portal Demo</h2>
        </div>,
        document.getElementById("my-root")
    )
}
