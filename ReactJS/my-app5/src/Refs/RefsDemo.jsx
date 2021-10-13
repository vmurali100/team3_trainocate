import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.myInput = React.createRef();
    }
    
    componentDidMount(){
        console.log(this.myInput.current);
        this.myInput.current.value = "Some value from refs";
    }

    render() {
        return (
            <div>
                <input type="text" name="" id="" ref={this.myInput}/>
            </div>
        )
    }
}
