import React, { Component } from 'react'
import HOCComp from './HOCComp'

class HoverCounter extends Component {
    render() {
        let {count, incrementCount} = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>Button hovered {count} times</button>
            </div>
        )
    }
}

export default HOCComp(HoverCounter)
