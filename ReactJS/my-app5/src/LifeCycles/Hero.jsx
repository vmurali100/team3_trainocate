import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        if(this.props.heroName === "Joker"){
            throw new Error("Joker is Not Hero")
        }
        return (
            <div>
                <h2>{this.props.heroName} - is Hero</h2>
            </div>
        )
    }
}
