import React, { Component } from "react";
import HOCComp from "./HOCComp";

class ClickCounter extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Button Clicked {count} times</button>
      </div>
    );
  }
}

export default HOCComp(ClickCounter);
