import React, { Component } from 'react'
import HOCComp from './HOCComp'

 class ClickCounter extends Component {
    render() {
        let {count, incrementCount} = this.props;
        return (
            <div>
                {/* {this.props.children} */}
                <button onClick={incrementCount}>Button clicked {count} times</button>
            </div>
        )
    }
}

export default HOCComp(ClickCounter)
