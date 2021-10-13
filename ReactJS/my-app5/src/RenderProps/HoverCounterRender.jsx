import React, { Component } from 'react'

export default class HoverCounterRender extends Component {    
    render() {
        let {increment, count} = this.props;
        return (
            <div>
                <button onMouseOver={increment}>Hovered {count} times</button>
            </div>
        )
    }
}
