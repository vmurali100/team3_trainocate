import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

export default class LifeCycleC extends Component {
  componentWillUnmount() {
    console.log("LifeCycleC - I am going to be Unmounted ");
  }
  render() {
    return (
      <div>
        <h3>I am From LifeCycleC </h3>
        {/* <ErrorBoundary>
          <Hero heroName="Daniel" />
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
      </div>
    );
  }
}
