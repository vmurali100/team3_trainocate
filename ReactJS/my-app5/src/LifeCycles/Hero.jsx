import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        if (this.props.heroName === "Joker"){
            throw new Error("Joker is not a hero")
        }
        return (
            <div>
                <h2>{this.props.heroName} - is hero</h2>
            </div>
        )
    }
}
