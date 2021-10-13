import React, { Component } from 'react'

export default class ClickCounterRender extends Component {

    render() {
        let {increment, count} = this.props;
        return (
            <div>
                <button onClick={increment}>Clicked {count} times</button>
            </div>
        )
    }
}
