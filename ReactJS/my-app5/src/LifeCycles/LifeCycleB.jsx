import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(" LifeCycleB constructor Triggered");

    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB GetDerivedStateFromProps trigered");
        return null
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate trigered");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate trigered");
        return prevProps

    }

    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate trigered");
    }
    
    render() {
        console.log("LifeCycleB Render Triggered");

        return (
            <React.Fragment>
                <h2>Parent Mail Id : {this.props.parentMailId}</h2>
            </React.Fragment>
        )
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount Triggered ");
    }
}
