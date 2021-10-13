import React, { Component } from "react";

export default class ClickCounterRender extends Component {
  render() {
    let { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}
