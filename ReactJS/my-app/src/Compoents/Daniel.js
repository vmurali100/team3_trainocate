import React, { Component } from "react";
import { Child } from "./Child";

export default class Daniel extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello From Class Component - Daniel",

      person: {
        fname: "Murali",
        lname: "Krishna",
      },

      users: ["Murali", "Krishna", "Ram", "Ravi"],
    };
  }
  render() {
    return (
      <div>
          <Child 
          greeting={this.state.message}
          personDetails={this.state.person}
          usersDetails={this.state.users}
          />
        {/* <h2> {this.state.message}</h2> */}
        {/* <ul>
          <li>
            {this.state.person.fname} - {this.state.person.lname}
          </li>
          {this.state.users.map((user) => {
            return <li>{user}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}
