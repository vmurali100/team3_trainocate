import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
import LifeCycleC from './LifeCycleC';

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"vmurali100@gmail.com",
            showCompC:true
        }

        console.log("LifeCycleA constructor Triggered");
    }
    
    static getDerivedStateFromProps(props,state){
        // console.log("Props In getDerivedStateFromProps : - ",props);
        // console.log("State in getDerivedStateFromProps : - ",state);
        console.log("LifeCycleA GetDerivedStateFromProps trigered");
        return null
    }

    changeMailID=()=>{
        this.setState({email:"daniel@gmail.com"})
        this.setState({showCompC:!this.state.showCompC})
    }
    render() {
        console.log("LifeCycleA render Triggered");
        return (
            <React.Fragment>
                <LifeCycleB parentMailId={this.state.email}/>
                <button onClick={this.changeMailID}>Change Mail ID</button>
                {this.state.showCompC && <LifeCycleC/>}
            </React.Fragment>
        )
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount Triggered ");
    }
}
