import React, { Component } from 'react'
import HOCComp2 from './HOCComp2';

class ClickCounter2 extends Component {
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

export default HOCComp2(ClickCounter2);
