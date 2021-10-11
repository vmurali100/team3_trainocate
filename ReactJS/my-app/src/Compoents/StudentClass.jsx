import React, { Component } from 'react'

export default class StudentClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message :"Welcome to Class Component"
        }
    }
    
    changeText = ()=>{
        this.setState({message:"Message Changed From Set state menthod"})
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
