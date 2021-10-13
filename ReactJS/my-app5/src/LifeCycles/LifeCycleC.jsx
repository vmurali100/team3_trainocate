import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

export default class LifeCycleC extends Component {
    componentWillUnmount() {
        console.log("LifeCycleC componentWillUnmount triggered");
    }
    render() {
        return (
            // Fragment shorthand
            <>
                <h3>I am from LifeCycleC</h3>
                {/* <ErrorBoundary>
                    <Hero heroName="Superman"/>
                    <Hero heroName="Joker"/>
                </ErrorBoundary> */}
            </>
        )
    }
}
