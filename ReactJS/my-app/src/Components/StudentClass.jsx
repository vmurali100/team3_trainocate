import React, { Component } from 'react'

export default class StudentClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: "Welcome to class component"
        }
    }

    // SetState used to change state at runtime for class component
    changeText = () => {
        this.setState({message: "Message changed from SetState method"})
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.changeText}>Change Text</button>
            </div>
        )
    }
}
