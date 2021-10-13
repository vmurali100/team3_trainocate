import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }

        console.log("LifeCycleB Constructor triggered");
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps triggered");
        return null;
    }

    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate triggered");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate triggered");
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate triggered");
    }

    render() {
        console.log("LifeCycleB Render triggered");

        return (
                <h2>Parent Mail ID: {this.props.parentMailId}</h2>
        )
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount triggered");  
    }
}
