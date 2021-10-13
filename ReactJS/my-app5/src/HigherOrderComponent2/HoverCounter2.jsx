import React, { Component } from 'react'
import HOCComp2 from './HOCComp2'

class HoverCounter2 extends Component {
    render() {
        let {count, incrementCount} = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>Button hovered {count} times</button>
            </div>
        )
    }
}

export default HOCComp2(HoverCounter2)
