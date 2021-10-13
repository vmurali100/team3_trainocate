import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
import LifeCycleC from './LifeCycleC';

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "jermainesooi@toppanleefung.com",
             showCompC: true
        }

        console.log("LifeCycleA Constructor triggered");
    }

    static getDerivedStateFromProps(props, state) {
        // console.log("Props in getDerivedStateFromProps : - ", props)
        // console.log("State in getDerivedStateFromProps : - ", state)
        console.log("LifeCycleA getDerivedStateFromProps triggered");
        return null;
    }

    changeMailId = () => {
        this.setState({email:"jermaine@gmail.com"});
        this.setState({showCompC:!this.state.showCompC})
    }
    
    render() {
        console.log("LifeCycleA Render triggered");
        return (
            <React.Fragment>
                <LifeCycleB parentMailId={this.state.email}/>
                <button onClick={(this.changeMailId)}>Change Mail ID</button>
                {this.state.showCompC && <LifeCycleC />}
            </React.Fragment>
        )
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount triggered");  
    }
}
