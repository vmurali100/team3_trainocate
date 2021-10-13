import React, { Component } from 'react'

// 'Wrapper' class
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    static getDerivedStateFromError(error) {
        console.log("ErrorBoundary getDerivedStateFromError triggered");
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError)
        {
            return <h2>Something went wrong here</h2>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
