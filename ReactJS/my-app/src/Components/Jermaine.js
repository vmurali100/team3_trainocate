import React, { Component } from 'react'
import { Child } from './Child';

export default class Jermaine extends Component {
    constructor(){
        super(); // method that makes available the properties from the constructor
        this.state={
            message : "Hello from Class Component - Jermaine",
            person:{
                fname:"Jermaine",
                lname:"Sooi"
            },
            users:["Darren","Jack","Ram","Ravi"]
        }
    }
    render() {
        return (
            <div>
                <Child 
                    greeting={this.state.message}
                    personDetails={this.state.person}
                    usersDetails={this.state.users}
                />
                {/* <h2>{this.state.message}</h2>
                <ul>
                    <li>{this.state.person.fname} - {this.state.person.lname}</li>

                    {this.state.users.map((user) => {
                        return <li>{user}</li>
                    })}
                </ul> */}
            </div>
        )
    }
}
