import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.myInput = React.createRef();
  }
  componentDidMount() {
    this.myInput.current.value = "Some Value from Refs";
  }
  render() {
    return (
      <div>
        <input type="text" name="" id="" ref={this.myInput} />
      </div>
    );
  }
}
