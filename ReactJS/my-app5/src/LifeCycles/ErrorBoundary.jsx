import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    render() {
        if(this.state.hasError){
            return <h2>Something Went Wrong Here .... </h2>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
